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

const modeGroup = document.querySelector(".mode-group");
const ipt_login = document.querySelector("#signin");
const signin_block = document.querySelector("#signin-block");
const signup_block = document.querySelector("#signup-block");

modeGroup.addEventListener("change", () => {
  const isLogin = ipt_login.checked;
  signin_block.classList.toggle("d-lg-none", !isLogin);
  signup_block.classList.toggle("d-lg-none", isLogin);
});

loading();
