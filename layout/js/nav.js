export function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".hamburger");
  // 初始化時根據目前 scrollY 設定 class
  nav.classList.toggle("scroolDown", window.scrollY > 0);
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scroolDown", window.scrollY > 0);
  });
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
