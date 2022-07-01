var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");

function validateForm() {
  if (
    age.value == "" ||
    height.value == "" ||
    weight.value == "" ||
    (male.checked == false && female.checked == false)
  ) {
    alert("All fields are required!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  } else {
    countBmi();
  }
}

// Iteration 1: Below functions have syntax error(you can also see it in console) correct it.
document.getElementById("submit").addEventListener("click", validateForm);

function countBmi() {

// Iteration 2: To calculate BMI the height should be in "meter" but we are taking it in "centimere" 
//                  from the user. So, figure out a way to remove this logic error.(hint: 1m = 100cm)
  var bmi =
    Number(weight.value) /
    ((Number(height.value) * Number(height.value)) / 10000);

// Iteration 3: Below code has some common SyntaxError, figure it out and solve it.
  var result = "";
  if (bmi < 18.5) {
    result = "Underweight";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
  } else if (35 <= bmi) {
    result = "Extremely obese";
  }

  var h1 = document.createElement("h1");
  var h2 = document.createElement("h2");

  var t = document.createTextNode(result);
  var b = document.createTextNode("BMI: ");
  var r = document.createTextNode(parseFloat(bmi).toFixed(2));

  h1.appendChild(t);
  h2.appendChild(b);
  h2.appendChild(r);

  document.body.appendChild(h1);
  document.body.appendChild(h2);
  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
}
document.getElementById("submit").addEventListener("click", countBmi);
