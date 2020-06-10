// Start of Top SlideShow/Carousel
let slideIndex = 0;
let topSlides = document.getElementsByClassName('topSlides');
let topDots = document.getElementsByClassName('topDot');
showTopSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showTopSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showTopSlides((slideIndex = n));
}

function showTopSlides(n) {
  let i;
  if (n > topSlides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = topSlides.length;
  }
  for (i = 0; i < topSlides.length; i++) {
    topSlides[i].style.display = 'none';
  }
  for (i = 0; i < topDots.length; i++) {
    topDots[i].className = topDots[i].className.replace(' active', '');
  }
  topSlides[slideIndex - 1].style.display = 'block';
  topDots[slideIndex - 1].className += ' active';
}

// let slideIndex = 0;
// showSlides();

function startTopSlides() {
  var i;
  for (i = 0; i < topSlides.length; i++) {
    topSlides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > topSlides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < topDots.length; i++) {
    topDots[i].className = topDots[i].className.replace(' active', '');
  }
  topSlides[slideIndex - 1].style.display = 'block';
  topDots[slideIndex - 1].className += ' active';
  setTimeout(startTopSlides, 3000); // Change image every 3 seconds
}

startTopSlides();
// End of Top SlideShow/Carousel

// Gallery Slide start
let slideStart = 0;
moveSlides(slideStart);

function activeSlide(n) {
    moveSlides(slideStart = n);
}

function moveSlides(n) {
    let i;
    let slides = document.getElementsByClassName('gallery_imgs');
    let indicator = document.getElementsByClassName('ind_item');
    if (n > slides.length) {slideStart = 1}
    if (n < 1) {slideStart = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(' focus', '');
    }
    slides[slideStart-1].style.display = 'grid';
    indicator[slideStart-1].className += ' focus';
}

//Sticky Navbar
window.onscroll = () => {fixFunction()};
const nav = document.getElementById('header');
let stuck = nav.offsetTop;

fixFunction = () => {
  if (window.pageYOffset >= stuck) {
    nav.classList.add('fix-scroll')
  }
  if (window.pageYOffset <= stuck) {
    nav.classList.remove('fix-scroll');
  }
}
//End Sticky Navbar

// Start of testimonial slides
let displayedSlide = 1;
displaySlideShow(displayedSlide);
startSlideShow()

function changeSlide(n) {
  displaySlideShow(displayedSlide += n);
}

function displaySlide(n) {
  displaySlideShow(displayedSlide = n);
}

function displaySlideShow(n) {
  let i;
  let slides = document.getElementsByClassName("slide-content");

  if (n > slides.length) {
    displayedSlide = 1
  } 

  if (n < 1) {
    displayedSlide = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }

  slides[displayedSlide-1].style.display = "block";
}

function startSlideShow() {
  let i;
  let slides = document.getElementsByClassName("slide-content");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  displayedSlide++;

  if (displayedSlide > slides.length) {
    displayedSlide = 1;
  }

  slides[displayedSlide - 1].style.display = 'block';
  setTimeout(startSlideShow, 3000); // Change image every 3 seconds
}