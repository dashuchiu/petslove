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

const switchArea = document.querySelector(".switch-view");
const productView = document.querySelector(".card-wrapper");

switchArea.addEventListener("click", (e) => {
  const mode = e.target.dataset.mode;
  if (mode && !e.target.classList.contains("active")) {
    // 清除現有 active
    switchArea
      .querySelectorAll("iconify-icon[class^=icon]")
      .forEach((el) => el.classList.remove("active"));
    e.target.classList.add("active");

    // 套用模式
    productView.className = `card-wrapper ${mode}`;
  }
});

loading();
