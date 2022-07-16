//Celcius to Fahrenheit
// Formula	(0°C × 9/5) + 32
function celciusToFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5)+32
    return fahrenheit;
}

let myFahrenheit = celciusToFahrenheit(20);
// console.log(myFahrenheit);


// Fahrenheit to Celcius
// Formula (20°F − 32) × 5/9

function fahrenheitToCelcius(fahrenheit){
    let celcius = (fahrenheit-32)*5/9;
    return celcius;
}

let myCelcius = fahrenheitToCelcius(40);
// console.log('the celcius is',myCelcius,'deg');

