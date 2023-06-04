function removeLeadingZeros(num) {
  return parseFloat(num);
}

function calculate(a, operator, b) {
  const num1 = removeLeadingZeros(a);
  const num2 = removeLeadingZeros(b);

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
}

export function checkKey(key, output) {
  let currentValue = output.textContent;

  if (key === "." && currentValue.includes(".")) {
    return;
  }

  if (currentValue === "0" && key !== ".") {
    currentValue = "";
  }

  output.textContent = currentValue + key;
}

export function checkAction(action, output) {
  const currentValue = output.textContent;
  const lastChar = currentValue[currentValue.length - 1];

  if (
    lastChar === "+" ||
    lastChar === "-" ||
    lastChar === "x" ||
    lastChar === "/"
  ) {
    output.textContent = currentValue.slice(0, -1) + action;
  } else {
    output.textContent += action;
  }
}

export function performAnAction(output) {
  const currentValue = output.textContent;
  const matches = currentValue.match(/(-?\d+\.?\d*)([+\-x/])(-?\d+\.?\d*)/);

  if (!matches || matches.length !== 4) {
    return;
  }

  const num1 = matches[1];
  const operator = matches[2];
  const num2 = matches[3];

  const result = calculate(num1, operator, num2);
  output.textContent = result;
}
export function calculatePercentage(arg1, arg2) {
  const result = (parseFloat(arg1) * parseFloat(arg2)) / 100;
  return result;
}

export function isPercent(output) {
  const currentValue = output.textContent;
  const matches = currentValue.match(/(-?\d+\.?\d*)([+\-x/])(-?\d+\.?\d*)%/);
  if (matches && matches.length === 4) {
    const num1 = parseFloat(matches[1]);
    const num2 = parseFloat(matches[3]);
    const result = calculatePercentage(parseFloat(num1), parseFloat(num2));
    output.textContent = result;
  }
}
export function allClear(output) {
  output.textContent = "0";
}
