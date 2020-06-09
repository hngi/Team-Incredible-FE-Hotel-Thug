// Gallery Slide start
let slideStart = 0;
moveSlides();

function moveSlides() {
    let i;
    let slides = document.getElementsByClassName('gallery_imgs');
    let indicator = document.getElementsByClassName('ind_item');
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideStart++;
    if (slideStart > slides.length) {
        slideStart = 1;
    }
    for (i = 0; i < indicator.length; i++) {
        indicator[i].className = indicator[i].className.replace(' focus', '');
    }
    slides[slideStart-1].style.display = 'grid';
    indicator[slideStart-1].className += ' focus';
    setTimeout(moveSlides, 5000);
}

