import {
  checkKey,
  checkAction,
  allClear,
  performAnAction,
  isPercent,
} from "./calcFun.mjs";

const out = document.querySelector(".calc-screen p");

const acButton = document.querySelector(".ac");
acButton.addEventListener("click", () => allClear(out));

const buttonsContainer = document.querySelector(".buttons");
buttonsContainer.addEventListener("click", (event) => {
  if (!event.target.classList.contains("btn")) return;

  const key = event.target.innerHTML;

  if (event.target.classList.contains("ac")) {
    allClear(out);
  } else if (typeof parseInt(key) === "number" && parseInt(key) == key) {
    checkKey(key, out);
  } else {
    checkAction(key, out);
  }

  if (key === "=") {
    performAnAction(out);
  }

  if (key === "%") {
    isPercent(out);
  }
});
