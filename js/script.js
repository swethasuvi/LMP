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

  // Clone testimonial cards to create a seamless loop
  const slider = document.getElementById("testimonialSlider");
  const cards = slider.querySelectorAll(".testimonial-card");

  // Clone each card and append to the end
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    slider.appendChild(clone);
  });

  // Scroll horizontally in a loop
  let scrollSpeed = 2; // Adjust for speed
  function autoScroll() {
    slider.scrollLeft += scrollSpeed;
    // If at end, reset to start
    if (slider.scrollLeft >= slider.scrollWidth / 2) {
      slider.scrollLeft = 0;
    }
    requestAnimationFrame(autoScroll);
  }

  // Start auto-scroll after content loads
  window.addEventListener("load", autoScroll);


  document.addEventListener("DOMContentLoaded", function () {
    const dropdownTrigger = document.querySelector(".dropdown");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    let isMenuOpen = false;

    // // Show on hover
    // dropdownTrigger.addEventListener("mouseenter", () => {
    //   dropdownMenu.style.display = "flex";
    //   isMenuOpen = true;
    // });

    // dropdownTrigger.addEventListener("mouseleave", () => {
    //   setTimeout(() => {
    //     if (!isMenuOpen) {
    //       dropdownMenu.style.display = "none";
    //     }
    //   }, 200);
    // });

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

  // search container visibility
  

  document.addEventListener("DOMContentLoaded", function () {
    const searchIcons = document.querySelectorAll(".search-icon");
    const navLinks = document.querySelector(".nav-links");
    const searchContainer = document.querySelector(".search-container");

    // Show search container on icon click
    searchIcons.forEach(icon => {
      icon.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent triggering document click
        navLinks.style.display = "none";
        searchContainer.style.display = "flex"; // or block, depending on your layout
      });
    });

    // Hide search container when clicking outside of it
    document.addEventListener("click", function (event) {
      const isClickInside = searchContainer.contains(event.target);

      if (!isClickInside) {
        searchContainer.style.display = "none";
        navLinks.style.display = "flex"; // or block
      }
    });
  });

  // search input change starts
//   document.addEventListener("DOMContentLoaded", function () {
//     const searchInput = document.querySelector(".search-input");

//     const placeholderTexts = [
//       "Search for Products",
//       "Search for Turmeric",
//       "Search for Ghee",
//       "Search for Dry Fruits",
//       "Search for Coconut Oil"
//     ];

//     let index = 0;

//     setInterval(() => {
//       searchInput.setAttribute("placeholder", placeholderTexts[index]);
//       index = (index + 1) % placeholderTexts.length;
//     }, 2000); // change every 2 seconds
//   });
//   setInterval(() => {
//   searchInput.style.opacity = 0;

//   setTimeout(() => {
//     searchInput.setAttribute("placeholder", placeholderTexts[index]);
//     searchInput.style.opacity = 1;
//     index = (index + 1) % placeholderTexts.length;
//   }, 300); // match CSS transition time
// }, 2000);

  // search input change ends






