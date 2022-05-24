function worldSwimmingRecord(input){
let recordSec = Number(input[0]);
let lenghtMeters = Number(input[1]);
let timeSecOneM = Number(input[2]);

let plusTime = Math.floor(lenghtMeters / 15) * 12.5;
let totalTime = lenghtMeters * timeSecOneM + plusTime;

if (totalTime < recordSec){
console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
}else{
let notEnough = totalTime - recordSec;
console.log(`No, he failed! He was ${notEnough.toFixed(2)} seconds slower.`)
}
}
worldSwimmingRecord(["55555.67",
"3017",
"5.03"])

