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
