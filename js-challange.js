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



//Grade System
function gradeSystem(grade){
    if(grade>=90 && grade<=100){
        console.log('You got A+');
    }
    else if(grade>=80 && grade<=89){
        console.log('You got A');
    }
    else if(grade>=70 && grade<=79){
        console.log('You got A-');
    }
    else if(grade>=60 && grade<=69){
        console.log('You got B');
    }
    else if(grade>=50 && grade<=59){
        console.log('You got C');
    }
    else if(grade>=33 && grade<=49){
        console.log('You got D');
    }
    else if(grade>=0 && grade<=32){
        console.log('You are Failed');
    }
    else{
        console.log('You have Entered a Wrong Number');
    }
    return grade;
}

// console.log(gradeSystem(102));


//Simple interest Calculator
//Formula A = P(1 + rt)

function interestCalculator(principal, rate, time){
    let totalRate = rate/100;
    let total = principal*(1+totalRate*time);
    let grandTotal = total -principal;
    return grandTotal;
}

console.log(interestCalculator(4000000, 2, 2))