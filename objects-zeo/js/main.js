//Create a stopwatch object that has four properties and three methods
let stopwatch = {};

stopwatch.minute = 12;
stopwatch.second = 5;
stopwatch.millisecond = 1;
stopwatch.name = 'Timex';

stopwatch.getTime = function(minute, second, millisecond){
    console.log(`The curren time is ${minute}, ${second}, ${millisecond}`);
}

stopwatch.resetTimer = function(){
    stopwatch.minute = 0;
    stopwatch.second = 0;
    stopwatch.millisecond = 0;
}

stopwatch.startTimer = function(){
    console.log('Starting timer');
}