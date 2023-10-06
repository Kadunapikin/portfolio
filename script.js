const menu = document.getElementById('myTopnav');
const navItems = document.getElementById('navItems').getElementsByTagName('a');
// const navBarName = document.getElementById('navItem').getElementsByTagName('h3');

function mobileMenu() {
  if (menu.className === 'nav-items') {
    menu.className += ' responsive';
  } else {
    menu.className = 'nav-items';
  }
}

document.getElementById('menuIcon').addEventListener('click', mobileMenu);

function showNavItems() {
  for (let i = 0; i < navItems.length; i += 1) {
    navItems[i].style.opacity = '1';
    navItems[i].style.transform = 'translateY(0)';
  }
}

window.addEventListener('load', showNavItems);

// function showNavBarName() {
//   for (let i = 0; i < navItems.length; i += 1) {
//     navBarName[i].style.opacity = '1';
//     navBarName[i].style.transform = 'translateY(0)';
//   }
// }

// window.addEventListener('load', showNavBarName);
