document.addEventListener('DOMContentLoaded', function() {
    function moveSlide(step, carouselId) {
        const carousel = document.getElementById(carouselId);
        const slides = carousel.querySelectorAll('.carousel-item');
        const totalSlides = slides.length;
        let index = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        if (index === -1) index = 0; // Si no hay slide activo, empieza desde el primero.

        // Calcula el nuevo índice
        index = (index + step + totalSlides) % totalSlides;
        const offset = -index * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Marca el slide activo
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    // Inicializa el primer slide como activo
    const carousels = document.querySelectorAll('.carousel-inner');
    carousels.forEach(carousel => {
        carousel.querySelector('.carousel-item').classList.add('active');
    });

    // Asigna eventos a los botones de navegación
    document.querySelectorAll('.carousel-button').forEach(button => {
        button.addEventListener('click', function() {
            const direction = this.classList.contains('left') ? -1 : 1;
            const carouselId = this.nextElementSibling.id; // El id del contenedor del carrusel es el siguiente elemento después del botón
            moveSlide(direction, carouselId);
        });
    });
});
