document
  .querySelector(".connect-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for connecting with us!");
    this.reset();
  });

const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    const body = header.nextElementSibling;
    body.classList.toggle("open");
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    const dropdownTrigger = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    let isMenuOpen = false;

    // Show on hover
    dropdownTrigger.addEventListener("mouseenter", () => {
      dropdownMenu.style.display = "flex";
      isMenuOpen = true;
    });

    dropdownTrigger.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!isMenuOpen) {
          dropdownMenu.style.display = "none";
        }
      }, 200);
    });

    // Show on click
    dropdownTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      isMenuOpen = !isMenuOpen;
      dropdownMenu.style.display = isMenuOpen ? "flex" : "none";
    });

    // Hide when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdownTrigger.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = "none";
        isMenuOpen = false;
      }
    });
  });


