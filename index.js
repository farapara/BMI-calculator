const button = document.querySelector(".btn");
const height = document.querySelector(".height");
const weight = document.querySelector(".weight");
const result = document.querySelector(".result");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let calculateBmi = weight.value / (height.value * 2);
  result.textContent = "Your BMI is" + " " + calculateBmi.toFixed(2);

  if (calculateBmi < 18.5 || calculateBmi > 30) {
    result.style.color = "red";
  } else if (calculateBmi > 18.5 && calculateBmi < 25) {
    result.style.color = "green";
  } else if (calculateBmi > 25 && calculateBmi < 30) {
    result.style.color = "orange";
  }

  form.reset();
});
