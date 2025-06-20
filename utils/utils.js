export function loading() {
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    loader.classList.add("d-none");
  });
}

export function loadSpinner(selectorImg) {
  const spinner = document.querySelector(".spinner");

  let loadedCount = 0;
  selectorImg.forEach((img) => {
    if (img.complete) {
      loadedCount++;
    } else {
      img.addEventListener("load", () => {
        loadedCount++;
        if (loadedCount === selectorImg.length) {
          spinner.classList.add("d-none");
        }
      });
    }
  });

  if (loadedCount === selectorImg.length) {
    spinner.classList.add("d-none");
  }
}
