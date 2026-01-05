const navbar = document.getElementById("navbar");
const topBar = document.getElementById("topBar");

let lastScrollY = window.scrollY;
const stickyPoint = navbar.offsetTop;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  // Navbar sticky logic
  if (currentScrollY >= stickyPoint) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  // fixd logic
  if (currentScrollY > lastScrollY) {
    // scrolling down
    topBar.classList.add("hide");
  } else {
    // scrolling up
    topBar.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

console.log(newsData);
