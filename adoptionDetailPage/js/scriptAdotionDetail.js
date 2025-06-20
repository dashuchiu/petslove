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

const btnClose = document.querySelectorAll(".modal .close");
btnClose.forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.add("d-none");
  });
});

const btnSubmit = document.querySelector(".modal .btn.submit");
const player = document.querySelector("dotlottie-player");
btnSubmit.addEventListener("click", () => {
  document.querySelector(".modal.adoption-form").classList.add("d-none");
  document.querySelector(".modal.confirm").classList.remove("d-none");

  // 強制從頭播放
  player.stop(); // 先停止
  player.play(); // 再播放
});


loading();
