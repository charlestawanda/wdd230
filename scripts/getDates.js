const date = document.querySelector("#currentYear")
const lm = document.querySelector("#lastModified")

const dt = new Date();
date.innerHTML = dt.getFullYear();

lm.innerHTML = `Last Modified: ${document.lastModified}`