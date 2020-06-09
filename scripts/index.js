var slideshows = document.querySelectorAll('[data-component="slideshow"]');
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {

	var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`);

	var index = 0, time = 5000;
	slides[index].classList.add('active');

	setInterval( () => {
		slides[index].classList.remove('active');
		
		index++;
		if (index === slides.length) index = 0;

		slides[index].classList.add('active');

	}, time);
}

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

