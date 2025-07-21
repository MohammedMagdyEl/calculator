const historyDisplay = document.getElementById("history");
const currentDisplay = document.getElementById("current");
const container = document.getElementById("container");

let firstNumber = "";
let operator = "";
let secondNumber = "";
let resultDisplayed = false;

container.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") return;

  const value = e.target.value;

  if (!isNaN(value) || value === ".") {
    if (value) handleNumber(value);
  } else if (["+", "-", "*", "/"].includes(value)) {
    handleOperator(value);
  } else if (value === "=") {
    calculate();
  } else if (value === "AC") {
    clear();
  }
});

function handleNumber(value) {
  if (resultDisplayed) {
    clear();
  }
  
// If the operator is not set, we are still entering the first number
  if (!operator) {
    firstNumber += value;
    currentDisplay.textContent = firstNumber;
  } else {
    secondNumber += value;
    currentDisplay.textContent = secondNumber;
  }
}

function handleOperator(op) {
  if (!firstNumber) return;

  if (secondNumber) {
    calculate();
    firstNumber = currentDisplay.textContent;
    secondNumber = "";
  }

  operator = op;
  historyDisplay.textContent = `${firstNumber} ${operator}`;
  resultDisplayed = false;
}

function calculate() {
  if (!firstNumber || !operator || !secondNumber) return;

  const a = parseFloat(firstNumber);
  const b = parseFloat(secondNumber);
  let result = 0;

  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Error" : a / b;
      break;
  }

  currentDisplay.textContent = result;
  historyDisplay.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
  firstNumber = result.toString();
  secondNumber = "";
  operator = "";
  resultDisplayed = true;
}

function clear() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  resultDisplayed = false;
  currentDisplay.textContent = "";
  historyDisplay.textContent = "";
}
