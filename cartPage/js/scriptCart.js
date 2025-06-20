import { initNav } from "../../layout/js/nav.js";
import { loading } from "../../utils/utils.js";
async function loadHTML(selector, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
}

loadHTML("#nav-placeholder", "../../layout/nav.html").then(() => {
  initNav();
});
loadHTML("#footer-placeholder", "../../layout/footer.html");


const btnCheckout = document.querySelector(".btn.action");
btnCheckout.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("d-none");
});

const btnClose = document.querySelector(".modal .close");
btnClose.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("d-none");
});

loading();
