function sumSeconds(input){
let n1 = Number(input[0]);
let n2 = Number(input[1]);
let n3 = Number(input[[2]]);

let totalSeconds = n1 + n2 + n3;
let mintus = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

if (seconds < 10){
console.log(`${mintus}:0${seconds}`)
}else {
    console.log(`${mintus}:${seconds}`)
}
}
sumSeconds(["14", "12",
"10"])



