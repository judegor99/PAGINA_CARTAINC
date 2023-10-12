document.addEventListener('DOMContentLoaded', function () {
  const mockupCarousel = document.getElementById('mockup-carousel');
  const advancesCarousel = document.getElementById('advances-carousel');
  const imageDescription = document.getElementById('image-description');
  const fadeInDuration = 1000; // Duración de la animación de aparición (en milisegundos)
  const fadeOutDuration = 1000; // Duración de la animación de desaparición (en milisegundos)

  function showImageWithDescription(carousel) {
      const slides = carousel.querySelectorAll('.image-slide');
      let currentIndex = 0;

      function showSlide(index) {
          slides.forEach((slide, i) => {
              if (i === index) {
                  slide.style.opacity = 1;
              } else {
                  slide.style.opacity = 0;
              }
          });
          const description = slides[index].querySelector('.carousel-description').textContent;
          imageDescription.textContent = description;
      }

      function nextSlide() {
          showSlide(currentIndex);
          currentIndex = (currentIndex + 1) % slides.length;
      }

      showSlide(currentIndex);
      setInterval(nextSlide, 5000);
  }

  showImageWithDescription(mockupCarousel);
  showImageWithDescription(advancesCarousel);
});
