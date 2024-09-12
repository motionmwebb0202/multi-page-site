const body = document.querySelector("body");
const btnclick = document.querySelector(".btn");
let btnclicks = false;



btnclick.addEventListener("click", () => {
  if (btnclicks) {
    body.style.background = "black";
  } else {
    body.style.background = "white";
  }
  btnclicks = !btnclicks;
});
