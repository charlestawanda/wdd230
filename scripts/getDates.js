const date = document.querySelector("#currentYear")
const lm = document.querySelector("#lastModified")
const nav = document.querySelector("nav");
const courseNav = document.querySelector("#nav");

const dt = new Date();
date.innerHTML = dt.getFullYear();

lm.innerHTML = `Last Modified: ${document.lastModified}`
// responsive ham and nav
ham.addEventListener("click", () => {
    ham.classList.toggle("show");
    nav.classList.toggle("show");
  });
  // filters and stuff
courseNav.addEventListener("click", (event) => {
    getCourses(event.target.textContent);
  });