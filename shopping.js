function shopping(input){
let budget = Number(input[0]);
let videoCards = Number(input[1]);
let procesor = Number(input[2]);
let ram = Number(input[3]);

let priceVideoCards = videoCards * 250;
let priceProcesor = (priceVideoCards * 0.35) * procesor;
let priceRam = (priceVideoCards * 0.10) * ram;

let totalPrice = priceVideoCards + priceProcesor + priceRam;

if (videoCards > procesor){
    totalPrice -= totalPrice * 0.15;
}

if (totalPrice <= budget){
console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
}else{
console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
}

} 
shopping(["920.45",
"3",
"1",
"1"])

