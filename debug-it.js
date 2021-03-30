var height = 1.79;
var weight = 82;

var BMI = weight / (height * height);

console.log("Your BMI is: " + BMI.tofixed());

if (BMI > 25 {
  console.log("Depending on your build, you might be overweight");
} else if (BMI < 18) {
  console.log("Depending on your build, you might be underweight);
} else {
  console.log("Looks like you're height / weight ratio is pretty healthy");
}
