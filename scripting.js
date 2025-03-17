document.addEventListener("DOMContentLoaded", function () {
  const bar = document.getElementById("bar");
  const mobileMenu = document.getElementById("mobile-menu");

  bar.addEventListener("click", function () {
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
    } else {
      mobileMenu.classList.add("open");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close");
  const navbar = document.getElementById("navbar");
  const backButton = document.getElementById("back");

  // Open Menu
  menuIcon.addEventListener("click", function () {
      navbar.classList.add("active");
  });

  // Close Menu
  closeIcon.addEventListener("click", function () {
      navbar.classList.remove("active");
  });

  // Back Button: Navigates to home page
  backButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents default anchor behavior
      window.location.href = "index.html"; // Change this if needed
  });
});
