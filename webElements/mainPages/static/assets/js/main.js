document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
  const navMenu = document.querySelector("#navmenu");

  mobileNavToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileNavToggle.classList.toggle("bi-list");
    mobileNavToggle.classList.toggle("bi-x");
  });

  // Dropdown toggle for nested menus
  const dropdownToggles = document.querySelectorAll(".toggle-dropdown");
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const parentLi = toggle.closest("li");
      const dropdownMenu = parentLi.querySelector("ul");
      dropdownMenu.classList.toggle("dropdown-active");
      toggle.classList.toggle("bi-chevron-down");
      toggle.classList.toggle("bi-chevron-up");
    });
  });

  // Smooth scroll to anchor links
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth"
        });
      }
    });
  });

  // Preloader
  const preloader = document.getElementById("preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.display = "none";
    });
  }
});
