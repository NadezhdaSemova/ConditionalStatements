function godzillaVsKong(input){
let budget = Number(input[0]);
let statists = Number(input[1]);
let priceClothes = Number(input[2]);

let decor = budget * 0.10;

if (statists > 150){
    priceClothes -= priceClothes * 0.10;
}
let totalMoney = (priceClothes * statists) + decor;

if (totalMoney > budget){
let notEnough = totalMoney - budget;
console.log(`Not enough money!`);
console.log(`Wingard needs ${notEnough.toFixed(2)} leva more.`);
}else{
let restMoney = budget - totalMoney;
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${restMoney.toFixed(2)} leva left.`);
}
}
godzillaVsKong(["9587.88",
"222",
"55.68"])


