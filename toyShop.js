function toyShop(input){
let excursionPrice = Number(input[0]);
let puzzle = Number(input[1]);
let talkDoll = Number(input[2]);
let tedyBear = Number(input[3]);
let minion = Number(input[4]);
let truck = Number(input[5]);

let totalNumber = puzzle + talkDoll + tedyBear + minion + truck;
let totalPrice = (puzzle * 2.60) + (talkDoll * 3) + (tedyBear * 4.1) + (minion * 8.2) + (truck * 2);

if (totalNumber >= 50){
    totalPrice -= totalPrice * 0.25;
}
let moneyForRent = totalPrice * 0.10;
let totalIncome = totalPrice - moneyForRent;

if (totalIncome >= excursionPrice){
    let left = totalIncome - excursionPrice
console.log(`Yes! ${left.toFixed(2)} lv left.`);
}else{
    let notEnough = excursionPrice - totalIncome;
console.log(`Not enough money! ${notEnough.toFixed(2)} lv needed.`);
}
}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
