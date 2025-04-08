/* FOOTER */
const cYear = document.getElementById("copyright");
const mDate = document.getElementById("lastModified");

let copyrightYear = new Date();
let lastModified = new Date(document.lastModified);

cYear.textContent = `©${copyrightYear.getFullYear()} | Tawanda Samatanda `;
mDate.textContent = `Last Modification: ${lastModified.toLocaleString('de-DE')}`;

/* MENU */
const menuButton = document.querySelector('#menu');
const navMenu = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navMenu.classList.toggle('open');
});


/* Visits Counter */
const visitsCounter = document.querySelector('.visits');

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visitsCounter.textContent = `Visits Count: ${numVisits + 1}`;
} else {
    visitsCounter.textContent = `Welcome to my website!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);