const menu = document.getElementById("myTopnav");

function mobileMenu() {
    if (menu.className === "nav-items") {
      menu.className += " responsive";
    } else {
      menu.className = "nav-items";
    }
  }

document.getElementById("menuIcon").addEventListener('click', mobileMenu);