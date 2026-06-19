/*
            Adjust this if your actual attraction detail route differs.
            For example, if your route is explore.html?n=LINK, change this constant.
        */
        const detailPageBase = '../explore/place.html?n=';

        /*
            Location colors keyed by the specificLocation array index.
            Add/remove entries if your repository changes.
        */
        const locationColors = [
            '#e74c3c', // 0 Downtown
            '#3498db', // 1 North District
            '#9b59b6', // 2 Arts District
            '#f39c12', // 3 Entertainment District
            '#2ecc71', // 4 Technology Park
            '#1abc9c', // 5 Media District
            '#e67e22', // 6 Exposition Park
            '#34495e', // 7 Greater Desert Springs
            '#7f8c8d'  // 8 Various Locations
        ];

        const MAP_SCALE = 1;
        let mapBounds = null;

        function initMapPage() {
            mapBounds = calculateBounds();
            renderLegend();
            renderMapPins();
            updateMapMeta();
        }

        function parseCoordinates(coordString) {
            if (!coordString) return null;

            const raw = String(coordString).trim();
            if (!raw || raw.toUpperCase() === 'TBD') return null;

            const parts = raw
                .replace(/,/g, '')
                .split(/\s+/)
                .map(Number);

            if (parts.length < 3 || parts.some(Number.isNaN)) return null;

            return {
                x: parts[0],
                z: parts[2]
            };
        }

        function getMappedPlaces() {
            if (!Array.isArray(window.places)) return [];

            return window.places.filter(place => {
                if (!place || !place.coordinates) return false;
                return !!parseCoordinates(place.coordinates);
            });
        }

        function calculateBounds() {
            const mappedPlaces = getMappedPlaces();

            if (mappedPlaces.length === 0) {
                return { minX: 0, maxX: 1, minZ: 0, maxZ: 1 };
            }

            let minX = Infinity;
            let maxX = -Infinity;
            let minZ = Infinity;
            let maxZ = -Infinity;

            mappedPlaces.forEach(place => {
                const coords = parseCoordinates(place.coordinates);
                if (!coords) return;

                minX = Math.min(minX, coords.x);
                maxX = Math.max(maxX, coords.x);
                minZ = Math.min(minZ, coords.z);
                maxZ = Math.max(maxZ, coords.z);
            });

            const rangeX = (maxX - minX) || 1;
            const rangeZ = (maxZ - minZ) || 1;
            const padding = 0.08;

            return {
                minX: minX - (rangeX * padding),
                maxX: maxX + (rangeX * padding),
                minZ: minZ - (rangeZ * padding),
                maxZ: maxZ + (rangeZ * padding)
            };
        }

        function mapToPercent(x, z) {
            const rangeX = (mapBounds.maxX - mapBounds.minX) || 1;
            const rangeZ = (mapBounds.maxZ - mapBounds.minZ) || 1;

            const xNorm = (x - mapBounds.minX) / rangeX;
            const zNorm = (z - mapBounds.minZ) / rangeZ;

            return {
                left: (xNorm * 100 * MAP_SCALE) + ((100 * (1 - MAP_SCALE)) / 2),
                top: (zNorm * 100 * MAP_SCALE) + ((100 * (1 - MAP_SCALE)) / 2)
            };
        }

        function renderMapPins() {
            const container = document.getElementById('mapPins');
            container.innerHTML = '';

            const mappedPlaces = getMappedPlaces();

            mappedPlaces.forEach(place => {
                const coords = parseCoordinates(place.coordinates);
                if (!coords) return;

                const pos = mapToPercent(coords.x, coords.z);
                if (Number.isNaN(pos.left) || Number.isNaN(pos.top)) return;

                const pin = document.createElement('button');
                pin.type = 'button';
                pin.className = 'map-pin';
                pin.style.left = `${pos.left}%`;
                pin.style.top = `${pos.top}%`;
                pin.style.setProperty('--pin-color', getPinColor(place.location));
                pin.setAttribute('aria-label', place.name || 'Attraction');

                const tooltip = document.createElement('span');
                tooltip.className = 'map-tooltip';
                tooltip.textContent = place.name || 'Unnamed Attraction';
                pin.appendChild(tooltip);

                pin.addEventListener('click', function () {
                    const siteLink = encodeURIComponent(place.siteLink || '');
                    window.location.href = `${detailPageBase}${siteLink}`;
                });

                container.appendChild(pin);
            });
        }

        function getPinColor(locationIndex) {
            const idx = Number(locationIndex);
            return locationColors[idx] || '#888888';
        }

        function renderLegend() {
            const legend = document.getElementById('mapLegend');
            legend.innerHTML = '';

            if (!Array.isArray(window.specificLocation)) return;

            window.specificLocation.forEach((locationName, index) => {
                const item = document.createElement('div');
                item.className = 'legend-item';

                const dot = document.createElement('span');
                dot.className = 'legend-color';
                dot.style.background = getPinColor(index);

                const text = document.createElement('span');
                text.textContent = locationName;

                item.appendChild(dot);
                item.appendChild(text);
                legend.appendChild(item);
            });
        }

        function updateMapMeta() {
            const meta = document.getElementById('mapMeta');
            const mappedCount = getMappedPlaces().length;
            const totalCount = Array.isArray(window.places) ? window.places.filter(Boolean).length : 0;
            meta.textContent = `${mappedCount} mapped attraction${mappedCount === 1 ? '' : 's'} shown out of ${totalCount} total.`;
        }
