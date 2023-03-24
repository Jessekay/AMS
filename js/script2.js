/* eslint-enable */

const mobileMenu = document.querySelector('.main-menu');
const closeBtn = document.getElementById('close');
const hamburger = document.getElementById('menu-bar');

hamburger.onclick = function showMenu() {
  document.body.style.overflow = 'hidden';
  mobileMenu.style.display = 'block';
};
closeBtn.onclick = function closeMenu() {
  document.body.style.overflow = 'visible'; /* eslint-disable */ 
  mobileMenu.style.display = none = 'none'; /* eslint-disable */ 
};
