const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

const target = document.querySelectorAll('.nav__link');
for (let i = 0; i < target.length; i++) {
  target[i].addEventListener('click', function () {
    for (let j = 0; j < target.length; j++) {
      target[j].classList.remove('active-link');
    }
    target[i].classList.add('active-link');
  });
}
