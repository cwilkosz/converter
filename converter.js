// T(°C) = (T(°F) - 32) × 5/9
function toCelsius (temp) {
	document.getElementById("toCelsius").innerHTML = Math.round((temp * 9/5) + 32);
	console.log("toCelsius", toCelsius);
}


// T(°F) = T(°C) × 9/5 + 32
function toFahrenheit (temp) {
	document.getElementById("toFahrenheit").innerHTML = Math.round((temp + 32) * 9/5);
	console.log("toFahrenheit", toFahrenheit);
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.

//*function determineConverter (clickEvent) {
 //  console.log("event", clickEvent);
//}

//* Assign a function to be executed when the button is clicked

//button.addEventListener("click", determineConverter);

//// Decimal round
 // if (!Math.round10) {
 //   Math.round10 = function(value, exp) {
   //   return decimalAdjust('round', value, exp);
   // };

//document.getElementById("temp-converted").innerHTML = Math.round((temp * (9 / 5)) + 32);
 //   console.log("toCelsius", toCelsius);
//