var height = 1.79;
var weight = 56;

var BMI = weight / (heigth * heigth);

console.log("Your BMI is: " + BMI.toFixed());

if (BMI > 25) {
  console.log("Depending on your build, you might be overweight");
} if (BMI < 18) {
  console.log("Depending on your build, you might be underweight");
} else {
  console.log("Looks like you're height / weight ratio is pretty healthy");
}
