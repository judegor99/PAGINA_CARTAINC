document.addEventListener('DOMContentLoaded', function () {
    const imageCarousel = document.getElementById('image-carousel');
    const imageDescription = document.getElementById('image-description');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const slides = imageCarousel.querySelectorAll('.image-slide');
    let currentIndex = 0;
  
    function showImageWithDescription() {
      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }
      // Mostrar la imagen actual
      slides.forEach((slide, i) => {
        if (i === currentIndex) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });
  
      // Actualizar la descripción
      const currentSlide = slides[currentIndex];
      const description = currentSlide.querySelector('.carousel-description').textContent;
      imageDescription.textContent = description;
    }
  
    function showPrevImage() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showImageWithDescription();
    }
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % slides.length;
      showImageWithDescription();
    }
  
    prevButton.addEventListener('click', showPrevImage);
    nextButton.addEventListener('click', showNextImage);
  
    // Mostrar la primera imagen y descripción al cargar la página
    showImageWithDescription();
  });
  