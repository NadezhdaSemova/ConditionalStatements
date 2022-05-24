function timePlus15Minutes(input){
let hours = Number(input[0]);
let mintus = Number(input[1]);

let totalMinuts = (hours * 60) + mintus + 15;
let newHour = Math.floor(totalMinuts / 60);
let newMinuts = totalMinuts % 60;

if (newMinuts < 10){
    if (newHour > 23){
        console.log(`0:0${newMinuts}`)
    }else {
    console.log(`${newHour}:0${newMinuts}`)
    }
}else {
        if (newHour > 23){
            console.log(`0:${newMinuts}`)
        }else {
        console.log(`${newHour}:${newMinuts}`)
        }
    }
}
timePlus15Minutes(["12", "49"])