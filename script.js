document.getElementById("menuIcon").addEventListener("click", function() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-items") {
      x.className += " responsive";
  } else {
      x.className = "nav-items";
  }
});
