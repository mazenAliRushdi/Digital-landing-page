// Get references to the menu button and navigation links
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Event listener for the menu button click (mobile navigation)
menuBtn.addEventListener("click", (e) => {
  // Toggle the 'open' class on the navigation links
  navLinks.classList.toggle("open");

  // Check if the 'open' class is present
  const isOpen = navLinks.classList.contains("open");

  // Change the menu button icon based on whether the menu is open or closed
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Event listener for clicking on navigation links (mobile)
navLinks.addEventListener("click", (e) => {
  // Remove the 'open' class to close the mobile menu
  navLinks.classList.remove("open");
  // Reset the menu button icon to the menu icon
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// GSAP Animations for header elements on page load
gsap.from(".dark-nav", {
  y: -100, // Start position above the viewport
  duration: 1, // Animation duration of 1 second
  ease: "power3.out", // Easing function for a smooth finish
});

gsap.from(".header__image img", {
  x: 100, // Start position to the right
  opacity: 0, // Start with zero opacity
  duration: 1.5,
  delay: 0.5, // Delay the start of the animation
  ease: "power3.out",
});

gsap.from(".header__content h2", {
  opacity: 0,
  y: 30, // Start position below
  duration: 1,
  delay: 1,
  ease: "power3.out",
});

gsap.from(".header__content h1", {
  opacity: 0,
  y: 50, // Start position further below
  duration: 1,
  delay: 1.2,
  ease: "power3.out",
});

gsap.from(".header__content p", {
  opacity: 0,
  y: 40, // Start position below
  duration: 1,
  delay: 1.4,
  ease: "power3.out",
});

gsap.from(".header__content .btn", {
  opacity: 0,
  scale: 0.8, // Start slightly smaller
  duration: 0.8,
  delay: 1.6,
  ease: "back.out(1.7)", // Slight overshoot for a bouncy effect
});

gsap.from(".header__content .socials li", {
  opacity: 0,
  y: 20, // Start position below
  duration: 0.6,
  delay: 1.8,
  stagger: 0.2, // Stagger the animation of each social icon
  ease: "power2.out",
});

gsap.from(".header__bar", {
  opacity: 0,
  y: 10, // Start position below
  duration: 0.7,
  delay: 2,
  ease: "power2.out",
});
