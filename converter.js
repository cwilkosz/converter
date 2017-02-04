// T(°C) = (T(°F) - 32) × 5/9
//function toCelsius (temp) {
//	document.getElementById("toCelsius").innerHTML = Math.round((temp * 9/5) + 32);
//	console.log("toCelsius", toCelsius);
//}


// T(°F) = T(°C) × 9/5 + 32
//function toFahrenheit (temp) {
//	document.getElementById("toFahrenheit").innerHTML = Math.round((temp + 32) * 9/5);
//	console.log("toFahrenheit", toFahrenheit);
//}

// Get a reference to the button element in the DOM
//var button = document.getElementById("converter");

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
function toCelsius(temp) {
  document.getElementById("temp-converted").innerHTML = Math.round((temp * (9 / 5)) + 32);
    console.log("toCelsius", toCelsius);

  var newCelTemp = document.getElementById("temp-converted").innerHTML;
    console.log("newCelTemp", newCelTemp);
    
    if (newCelTemp >= 32) {
      document.getElementById("temp-converted").style.color = "red";
    } else if (newCelTemp <= 0) {
      document.getElementById("temp-converted").style.color = "blue";
    } else {
      document.getElementById("temp-converted").style.color = "green";
    };
};

function toFahrenheit (temp) {
  document.getElementById("temp-converted").innerHTML = Math.round((temp - 32) * (5 / 9));  
    console.log("toFahrenheit", toFahrenheit);

  var newFahTemp = document.getElementById("temp-converted").innerHTML;
    console.log("newFahTemp", newFahTemp); 

    if (newFahTemp >= 90) {
      document.getElementById("temp-converted").style.color = "red";
    } else if (newFahTemp <= 32) {
      document.getElementById("temp-converted").style.color = "blue";
    } else {
      document.getElementById("temp-converted").style.color = "green";
    };
};


// Get a reference to the button element in the DOM
var button = document.getElementById("convert-button");
 console.log("button", button);
var radio = document.getElementsByName("temp");
 console.log("radio", radio);

var clickedRadioButton = "";

for (var i = 0; i < radio.length; i++) {
  console.log("radio index", radio[i]);
  radio[i].addEventListener("click", function(clickEvent) {
    console.log("clickEvent", clickEvent);
    clickedRadioButton = clickEvent.target.value;
    console.log("clickedRadioButton", clickedRadioButton);
  });
};

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if (clickedRadioButton === "celsius") {
   toCelsius(parseInt(document.getElementById("orig-temp").value)); 
  } 
  if (clickedRadioButton === "fahrenheit") {
   toFahrenheit(parseInt(document.getElementById("orig-temp").value));
  };
  console.log("event", clickEvent);
};

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);