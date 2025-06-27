document.querySelectorAll('.js-carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const images = carousel.querySelectorAll('img');
    const total = images.length;
    let index = 0;
    let intervalId;
  
    const showImage = (i) => {
      const offset = i * -100;
      track.style.transform = `translateX(${offset}%)`;
    };
  
    const nextImage = () => {
      index = (index + 1) % total;
      showImage(index);
    };
  
    const startAutoSlide = () => {
      intervalId = setInterval(nextImage, 4000);
    };
  
    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };
  
    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoSlide);
    carousel.addEventListener('mouseleave', startAutoSlide);
  
    // Initialize
    showImage(index);
    startAutoSlide();
  });
  