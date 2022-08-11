//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvShows = ['The Chi', 'Shameless', 'The Bear'];
tvShows.forEach(show => console.log(show));
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
let arrNumbers = [1, 2, 3, 4, 5];
function onlyEvens(anArray){
    return anArray.filter(num => num % 2 === 0);
}
console.log(onlyEvens(arrNumbers));
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
function alertsSumOfLowestAndHighest(anArray){
    let sortedArray = anArray.sort((a, b) => a - b);
    alert( sortedArray[1] + sortedArray[sortedArray.length - 2]);
}
alertsSumOfLowestAndHighest([1, 2, 3, 4, 5, 6, 7, 8, 9]);