
// Бургер-меню
function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}

// Галерея (горизонтальная прокрутка)
function scrollGallery(direction) {
  const slider = document.getElementById("gallerySlider");
  const card = slider.querySelector(".gallery-card");
  if (!card) return;
  const cardWidth = card.offsetWidth + 20;
  slider.scrollLeft += direction * cardWidth * 2;
}

// Отзывы (горизонтальная прокрутка)
function scrollReviews(direction) {
  const slider = document.getElementById("reviewsSlider");
  const card = slider.querySelector(".review-card");
  if (!card) return;
  const cardWidth = card.offsetWidth + 20;
  slider.scrollLeft += direction * cardWidth * 2;
}
function scrollReviews(direction) {
  const slider = document.getElementById("reviewsSlider");
  const card = slider.querySelector(".review-card");
  if (!card) return;
  const cardWidth = card.offsetWidth + 20;
  slider.scrollLeft += direction * cardWidth;
}
  const burger = document.getElementById('burger');
  const navMenu = document.getElementById('navMenu');

  burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
