const displayArea = document.getElementById("display-area");
const container = document.getElementById("container");

container.addEventListener("click", (e) => {
  if (e.target.nodeName == "BUTTON") {
    switch (e.target.textContent) {
      case "AC":
        clear();
        break;
      case "=":
        evaluate();
        break;
      case "+/-":
        positiveAndNegative();
        break;
      default:
        addtodisplayArea(e.target.textContent);
    }
  }
});

function clear() {
  displayArea.textContent = "";
}

function positiveAndNegative() {
  displayArea.textContent = displayArea.textContent * -1;
}

function addtodisplayArea(value) {
  displayArea.textContent = displayArea.textContent + value;
}

function evaluate() {
  try {
    let calculation = math.evaluate(displayArea.textContent);
    displayArea.textContent = calculation;
  } catch (error) {
    displayArea.textContent = "Invalid Operation";
    console.error(error);
  }
}
