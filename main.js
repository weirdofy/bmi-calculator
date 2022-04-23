console.log("hemlo");

let weight = document.querySelector("#weight"),
  height = document.querySelector("#height"),
  calcBtn = document.querySelector("#calculate"),
  bmi = document.querySelector("#bmi"),
  bmiStatus = document.querySelector("#bmiStatus");

calcBtn.addEventListener("click", () => {
  let BMI = (weight.value / height.value / height.value) * 10000;
  bmiStatus.innerHTML = "HEHE";

  if (
    weight.value == "" ||
    height.value == "" ||
    (weight.value == "" && height.value == "")
  ) {
    alert("Values cannot be empty");
  }

  let bmI = String(BMI);
  console.log(`The BMI is ${bmI.slice(0, 5)}`);
  bmi.innerHTML = bmI.slice(0, 5);
});
