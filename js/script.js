document.addEventListener('DOMContentLoaded', function () {
  const imageCarousel = document.getElementById('image-carousel');
  const imageDescription = document.getElementById('image-description');
  const fadeInDuration = 1000; // Duración de la animación de aparición (en milisegundos)
  const fadeOutDuration = 1000; // Duración de la animación de desaparición (en milisegundos)
  let currentIndex = 0;

  function showImageWithDescription() {
      const slides = imageCarousel.querySelectorAll('.image-slide');

      if (currentIndex >= slides.length) {
          currentIndex = 0;
      }

      slides.forEach((slide, i) => {
          if (i === currentIndex) {
              slide.style.display = 'block';
          } else {
              slide.style.display = 'none';
          }
      });

      const currentSlide = slides[currentIndex];
      const description = currentSlide.querySelector('.carousel-description').textContent;
      imageDescription.textContent = description;

      currentIndex++;

      setTimeout(hideCurrentSlide, 5000); // Cambiar cada 5 segundos
  }

  function hideCurrentSlide() {
      const currentSlide = imageCarousel.querySelector('.image-slide[style="display: block;"]');
      if (currentSlide) {
          currentSlide.style.display = 'none';
      }
      showImageWithDescription();
  }

  showImageWithDescription();
});
