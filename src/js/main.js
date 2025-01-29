var button = document.querySelector(".button");

function changeAllColor() {
  button.classList.add("is-red");
}

button.addEventListener("click", changeAllColor);
