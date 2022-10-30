let digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let actions = ["-", "+", "/", "x", "%", "."];
let firstNumber = "";
let secondNumber = "";
let sign = "";
let finish = false;

function checkKey(key, out) {
  if (digit.includes(key)) {
    if (secondNumber == "" && sign == "") {
      firstNumber += key;
      out.textContent = firstNumber;
    } else if (firstNumber != "" && sign != "" && !finish) {
      secondNumber += key;
      out.textContent = secondNumber;
    } else if (firstNumber != "" && secondNumber != "" && finish) {
      allClear(out);
      firstNumber += key;
      out.textContent = firstNumber;
    } else if (firstNumber === ".") {
      firstNumber += firstNumber;
      out.textContent = firstNumber;
    }
  } else {
    return "Malformed expression";
  }
  return out.textContent;
}

function checkAction(key, out) {
  if (actions.includes(key)) {
    if (firstNumber != "" && secondNumber == "") {
      sign = key;
      out.textContent = sign;
    } else {
      return "Malformed expression";
    }
  }
  return out.textContent;
}

function performAnAction(out) {
  switch (sign) {
    case "+":
      firstNumber = +firstNumber + +secondNumber;
      out.textContent = firstNumber;
      break;
    case "-":
      firstNumber = +firstNumber - +secondNumber;
      out.textContent = firstNumber;
      break;
    case "x":
      firstNumber = +firstNumber * +secondNumber;
      out.textContent = firstNumber;
      break;
    case "/":
      if (secondNumber === "0") {
        allClear(out);
        return (out.textContent = "Error");
      }
      firstNumber = +firstNumber / +secondNumber;
      out.textContent = firstNumber;
      break;
  }
  finish = true;
  console.log(finish);
  return out.textContent;
}

function isPercent(out) {
  if (firstNumber != "" && sign === "x" && secondNumber != "") {
    firstNumber = (firstNumber * secondNumber) / 100;
    return (out.textContent = firstNumber);
  } else {
    return (out.textContent = "Malformed expression");
  }
}

function allClear(out) {
  firstNumber = "";
  secondNumber = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}

export { checkKey, checkAction, allClear, performAnAction, isPercent };
