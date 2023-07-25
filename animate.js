function scrollToSection(event) {
  event.preventDefault();

  var targetId = this.getAttribute('href');
  var targetElement = document.querySelector(targetId);
  var headerHeight = document.querySelector('header.head').offsetHeight;

  // Close the menu if it's open
  var menuContent = document.getElementById("menu-items");
  if (menuContent.classList.contains("show")) {
    var menuToggle = document.getElementById("menu-toggle");
    menuContent.classList.remove("show");
    menuToggle.classList.remove("close");
  }

  var targetPosition = targetElement.getBoundingClientRect().top;
  var offsetPosition = targetPosition - headerHeight;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.navbar .navs a');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', scrollToSection);
  }
});


function toggleMenu() {
  var menuContent = document.querySelector(".menu-content");
  var menuToggle = document.getElementById("menu-toggle");

  menuContent.classList.toggle("show");
  menuToggle.classList.toggle("close");
}




