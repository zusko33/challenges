console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');
const numA = document.querySelector("number-a");
const numB = document.querySelector("number-b");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formElements = event.target.elements;
  const numA = Number(formElements.numberA.value);
  const numB = Number(formElements.numberB.value);
  let result = 1;

  // --v-- write your code here --v--
  if (formElements.addition.checked) {
    result = add(numA, numB);
  } else if (formElements.subtraction.checked) {
    result = subtract(numA, numB);
  } else if (formElements.multiplication.checked) {
    result = multiply(numA, numB);
  } else if (formElements.division.checked) {
    if (numB === 0) {
      result = "never divide by 0";
    } else {
      result = divide(numA, numB);
    }
  } else result = "error";
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
