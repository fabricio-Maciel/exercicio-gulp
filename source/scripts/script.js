const btn = document.querySelector("button");
const imagensContainer = document.querySelector(".container-grid");
btn.addEventListener("click", function (e) {
  imagensContainer.classList.toggle("hidden");
});
