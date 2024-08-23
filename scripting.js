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
