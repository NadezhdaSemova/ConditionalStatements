function bonusScore(input){
let number = Number(input[0]);

let totalScore = 0;

if (number <= 100){
totalScore = number + 5;
}else if (number <= 1000){
    totalScore = number + (number * 0.20);
}else{
    totalScore = number + (number * 0.10);
}
if (number % 2 == 0){
    totalScore += 1;
}
if (number % 10 == 5){
    totalScore += 2;
}
let bonus = totalScore - number;

console.log(bonus);
console.log(totalScore);
}
bonusScore(["15875"])