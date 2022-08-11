// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = "Thanksgiving";
favHoliday = favHoliday.toUpperCase();
console.log(favHoliday);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let alertString = "Hello, world";
alert(alertString.slice(-3));

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function absValue(num1, num2, num3, num4, num5){
    let total = 100 - num1 - num2 - num3 - num4 - num5;
    alert(Math.abs(total));
}
absValue(1, 2, 3, 4, 5);
// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowAndHigh(num1, num2, num3){
    let anArray = [];
    anArray.push(num1, num2, num3);
    anArray.sort((a, b) => a - b);
    console.log(anArray[0]);
    console.log(anArray[2]);
}
lowAndHigh(10, 55, 19);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function returnsHeadsOrTailsRandomly(){
    let randomNumber = Math.round(Math.random());

    if (randomNumber === 0) {
        return "Heads";
    } else {
        return "Tails";
    }
}

console.log(returnsHeadsOrTailsRandomly());

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function consoleLogsHeadsOrTails(aNum){
    let count = 0;
    while(count <= aNum){
        console.log(returnsHeadsOrTailsRandomly());
        count++;
    }
}

consoleLogsHeadsOrTails(50);