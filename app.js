document.addEventListener('DOMContentLoaded', () => {
    // Example images array; replace with your dynamic image source
    const images = [
        'images/IMG_6426.JPG',
        'images/IMG_6427.JPG',
        'images/IMG_6429.JPG',
        'images/IMG_6430.JPG'   ,
        'images/IMG_6431.JPG',
        'images/IMG_6432.JPG',
        'images/IMG_6433.JPG',
        'images/IMG_6428.JPG',
        'images/IMG_6434.PNG',
        'images/IMG_6435.JPG',
        'images/IMG_6436.JPG',
        'images/IMG_6437.JPG',
        'images/IMG_6438.JPG',
        'images/IMG_6439.JPG',
        'images/813dfde514c08c31.jpeg'
    ];

    const gallery = document.getElementById('gallery');

    images.forEach(imageSrc => {
        const card = document.createElement('div');
        card.classList.add('card');

        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;
        imgElement.alt = 'Photography';
        imgElement.onclick = () => showLightbox(imgElement.src);

        card.appendChild(imgElement);
        gallery.appendChild(card);
    });
});

function showLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = 'flex';
    lightboxImg.src = src;
    document.addEventListener('keydown', handleKeyDown);
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.removeEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
}
