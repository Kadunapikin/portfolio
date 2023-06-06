const menu = document.getElementById('myTopnav');
const navItems = document.getElementById('navItems').getElementsByTagName('a');
const navItem = document.getElementById('navItem').getElementsByTagName('h3');

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

function showNavItem() {
  for (let i = 0; i < navItems.length; i += 1) {
    navItem[i].style.opacity = '1';
    navItem[i].style.transform = 'translateY(0)';
  }
}

window.addEventListener('load', showNavItem);
