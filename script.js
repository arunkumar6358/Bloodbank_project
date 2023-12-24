const menu = document.querySelector('.menubar a'); // value get using class name and tage name
const menulist = document.querySelector('nav ul'); // value get using tag name
menu.addEventListener('click', ()=>{
    menulist.classList.toggle('showmenu');
});
function scrolltotop(){
 window.scrollTo(0,0);
}
function slideshow() {
    var current = document.querySelector("#slideshow img.active");
    var next = current.nextElementSibling;
    if (!next) {
      next = document.querySelector("#slideshow img:first-child");
    }
    current.classList.remove("active");
    next.classList.add("active");
  }
  setInterval(slideshow, 3000); // Change image every 3 seconds
  