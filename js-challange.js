//Celcius to Fahrenheit
// Formula	(0°C × 9/5) + 32
function celciusToFahrenheit(celcius){
    let fahrenheit = (celcius * 9/5)+32
    return fahrenheit;
}

let myFahrenheit = celciusToFahrenheit(20);
console.log(myFahrenheit);


// Fahrenheit to Celcius
// Formula (20°F − 32) × 5/9