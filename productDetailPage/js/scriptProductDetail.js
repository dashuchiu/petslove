import { initNav } from "../../layout/js/nav.js";

async function loadHTML(selector, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.querySelector(selector).innerHTML = html;
}

loadHTML("#nav-placeholder", "../../layout/nav.html").then(() => {
  initNav();
});
loadHTML("#footer-placeholder", "../../layout/footer.html");