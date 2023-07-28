document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image-container img');

    function checkFadeImages() {
        images.forEach((image, index) => {
            const imageTop = image.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (imageTop < windowHeight * 0.8) {
                image.style.opacity = 1;
            }
        });
    }

    document.addEventListener('scroll', checkFadeImages);
});