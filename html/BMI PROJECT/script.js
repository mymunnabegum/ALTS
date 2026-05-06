function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    height = height / 100; // convert cm to meters

    let bmi = weight / (height * height);

    let result = document.getElementById("result");

    if (bmi < 18.5) {
        result.innerText = "BMI: " + bmi.toFixed(2) + " (Underweight)";
    } else if (bmi < 24.9) {
        result.innerText = "BMI: " + bmi.toFixed(2) + " (Normal)";
    } else if (bmi < 29.9) {
        result.innerText = "BMI: " + bmi.toFixed(2) + " (Overweight)";
    } else {
        result.innerText = "BMI: " + bmi.toFixed(2) + " (Obese)";
    }
}