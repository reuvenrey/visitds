function createImageGallery(placeIndex) {
    const container = document.getElementById('galleryContainer');
    const place = window.placePage[placeIndex];

    if (!place || !Array.isArray(place.slideshowLinks) || place.slideshowLinks.length === 0) {
        container.innerHTML = '';
        return;
    }

    const images = place.slideshowLinks;
    let currentIndex = 0;

    // Render gallery preview grid
    container.innerHTML = `
        <div class="image-gallery">
            <div class="gallery-grid">
                ${images.map((imgUrl, index) => `
                    <div class="gallery-item" data-index="${index}">
                        <img src="${imgUrl}" alt="Gallery image ${index + 1}" loading="lazy">
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const lightbox = document.getElementById('galleryLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCounter = document.getElementById('lightboxCounter');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    function updateLightbox() {
        lightboxImage.src = images[currentIndex];
        lightboxCounter.textContent = `${currentIndex + 1} of ${images.length}`;
    }

    function openLightbox(index) {
        currentIndex = index;
        updateLightbox();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateLightbox();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox();
    }

    // Open fullscreen when preview clicked
    container.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            openLightbox(Number(item.dataset.index));
        });
    });

    // Fullscreen controls
    closeBtn.onclick = closeLightbox;
    nextBtn.onclick = showNext;
    prevBtn.onclick = showPrev;

    // Close if user clicks dark background outside image
    lightbox.onclick = function (e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    };

    // Keyboard support
    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNext();
        } else if (e.key === 'ArrowLeft') {
            showPrev();
        }
    });
}
