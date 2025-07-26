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
    if (
      !dropdownTrigger.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
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
  searchIcons.forEach((icon) => {
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

// sticky behaviour starts

const logo = document.querySelector(".logo-background");
const container = document.querySelector(
  '[style*="background-color: #F6F4DC"]'
);

window.addEventListener("scroll", () => {
  const rect = container.getBoundingClientRect();
  //  alert(rect.bottom)
  if (rect.top <= 0 && rect.bottom > 60) {
    logo.style.position = "fixed";
    logo.style.top = "0";
  } else {
    logo.style.position = "absolute";
    logo.style.top = "initial";
  }
});

// sticky behaviour ends

// Show popup menu
document.getElementById("ham-burger").onclick = function () {
  document.getElementById("popup-menu").classList.remove("hidden");
};

// Close popup
document.getElementById("close-popup").onclick = function () {
  document.getElementById("popup-menu").classList.add("hidden");
};

// Show search mobile menu
document.getElementById("search-icon-mobile").onclick = function (event) {
  event.stopPropagation(); // Prevents the click from bubbling up
  const searchContainer = document.getElementById("search-container-mobile");
  const elementOne = document.querySelector('.nav-left');
  const elementTwo = document.querySelector('.nav-mobile');

  // Show search container
  searchContainer.classList.remove("hidden");

  // Hide other nav elements
  if (elementOne) elementOne.style.display = 'none';
  if (elementTwo) elementTwo.style.display = 'none';

  // Add outside click listener
  document.addEventListener('click', handleOutsideClick);
};

function handleOutsideClick(event) {
  const searchContainer = document.getElementById("search-container-mobile");
  const searchIcon = document.getElementById("search-icon-mobile");

  // If click is outside the container and not on the icon
  if (!searchContainer.contains(event.target) && event.target !== searchIcon) {
    // Hide the container again
    searchContainer.classList.add("hidden");

    // Show previously hidden elements again
    const elementOne = document.querySelector('.nav-left');
    const elementTwo = document.querySelector('.nav-mobile');
    if (elementOne) elementOne.style.display = '';
    if (elementTwo) elementTwo.style.display = '';

    // Remove the click listener to avoid memory leaks
    document.removeEventListener('click', handleOutsideClick);
  }
}
// mobile search ends

// Toggle All Categories submenu starts
document.getElementById("all-categories-toggle").onclick = function () {
  const submenu = document.getElementById("category-submenu");
  const arrow = document.getElementById("category-arrow");

  submenu.classList.toggle("hidden");

  // Change arrow direction
  if (submenu.classList.contains("hidden")) {
    arrow.innerHTML = "▲";
  } else {
    arrow.textContent = "▼";
  }
};
// Toggle All Categories submenu ends

// popup code ends

// search query starts
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-input");

  const validIds = [
    "groundnut",
    "black-soybean",
    "tamarind",
    "green-gram",
    "red-cow-peas",
    "toor-dal",
    "mothbean",
    "sesame",
    "almonds",
    "pistachios",
    "cashew-nut",
    "black-raisins",
    "dates",
    "dry-grape",
    "figs",
    "peanuts",
    "citron",
    "lemon",
    "broccoli",
    "carrots",
    "coconut",
    "dried-fig",
    "honey-banana",
    "small-onion",
    "coconut-oil",
    "ghee",
    "turmeric",
    "karupatti",
    "cardamom",
    "honey",
    "red-chilli",
    "finger-millet",
    "walnuts",
    "pecans",
    "chestnuts",
    "hazelnuts",
  ];

  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        const userInput = e.target.value
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-");

        if (validIds.includes(userInput)) {
          window.location.href = `/product-categories.html#${userInput}`;
        } else {
         
        }
      }
    });
  }
});

// search query ends
