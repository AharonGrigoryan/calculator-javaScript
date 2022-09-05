import {
  checkKey,
  checkAction,
  allClear,
  performAnAction,
  Ispercent,
} from "./calcFun.mjs";

const out = document.querySelector(".calc-screen p");

document.querySelector(".ac").onclick = allClear;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) allClear(out);

  let key = event.target.innerHTML;
  
  typeof parseInt(key) === "number" && parseInt(key) == parseInt(key)
    ? checkKey(key, out)
    : checkAction(key, out);

  if (key === "=") {
    performAnAction(out);
  }
  if (key === "%") {
    Ispercent(out);
  }

};
