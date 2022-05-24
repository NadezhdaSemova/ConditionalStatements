function lunchBreak(input){
let name = String(input[0]);
let timeseries = Number(input[1]);
let timeRest = Number(input[2]);

let timeLunch = timeRest / 8;
let restTime = timeRest /4;
let timeForSeries = timeRest - restTime - timeLunch;

if (timeForSeries >= timeseries){
    console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeForSeries - timeseries)} minutes free time.`)
}else{
console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeseries - timeForSeries)} more minutes.`)
}
}
lunchBreak(["Teen Wolf",
"48",
"60"])
