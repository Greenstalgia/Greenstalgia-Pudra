const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute(
    'class',
    isOpen ? "ri-close-line" : "ri-menu-4-line"
  );
});

navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-4-line');
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header__content .header__subtitle", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".header__socials li", {
  ...scrollRevealOption,
  delay: 2500,
  interval: 500,
});

const catModal = document.getElementById('cat-modal');
const openModalBtn = document.getElementById('open-cat-modal');
const closeModalBtn = document.getElementById('close-cat-modal');

openModalBtn.addEventListener('click', () => {
  catModal.showModal();
});

closeModalBtn.addEventListener('click', () => {
  catModal.close();
});

catModal.addEventListener('click', (event) => {
  if (event.target === catModal) {
    catModal.close();
  }
});

const galleryModal = document.getElementById('gallery-modal');
const openGalleryBtn = document.getElementById('open-gallery-modal');
const closeGalleryBtn = document.getElementById('close-gallery-modal');
const galleryImages = document.querySelectorAll('.gallery__img');

openGalleryBtn.addEventListener('click', () => {
  galleryModal.showModal();
});

closeGalleryBtn.addEventListener('click', () => {
  galleryModal.close();
});

galleryModal.addEventListener('click', (event) => {
  if (event.target === galleryModal) {
    galleryModal.close();
  }
});

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.showModal();
  });
});

lightbox.addEventListener('click', () => {
  lightbox.close();
});

const contactModal = document.getElementById('contact-modal');
const openContactBtn = document.getElementById('open-contact-modal');
const closeContactBtn = document.getElementById('close-contact-modal');

openContactBtn.addEventListener('click', () => {
  contactModal.showModal();
});

closeContactBtn.addEventListener('click', () => {
  contactModal.close();
});

const contactForm = document.getElementById('contact-form');
const userNameInput = document.getElementById('user-name');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

const userName = userNameInput.value;

alert(`Дякую, ${userName}! Головний інспектор отримав повідомлення і вже радісно муркоче.`)

contactForm.reset();
contactModal.close();
});

const workModal = document.getElementById('work-modal');
const openWorkBtn = document.getElementById('open-work-modal');
const closeWorkBtn = document.getElementById('close-work-modal');

openWorkBtn.addEventListener('click', () => { workModal.showModal(); });
closeWorkBtn.addEventListener('click', () => { workModal.close(); });
workModal.addEventListener('click', (event) => {
  if (event.target === workModal) { workModal.close(); }
});

const track = document.getElementById('carousel-track');
const slides = Array.from(track.children);
const nextButton = document.getElementById('carousel-next');
const prevButton = document.getElementById('carousel-prev');
let currentSlideIndex = 0;

const updateSlidePosition = () => {
  track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
};

nextButton.addEventListener('click', () => {
  if (currentSlideIndex < slides.length - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  updateSlidePosition();
});

prevButton.addEventListener('click', () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = slides.length - 1;
  }
  updateSlidePosition();
});