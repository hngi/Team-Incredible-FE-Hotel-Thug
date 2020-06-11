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