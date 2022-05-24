function areaOfFigures(input){
    let type = String(input[0]);

    let face = 0;
    if(type === "square"){
        let length = Number(input[1]);
        face = length * length;

    }else if (type === "rectangle"){
        let length = Number(input[1]);
        let high = Number(input[2]);
        face = length * high;
        

    }else if (type === "circle"){
let radius = Number(input[1]);
face = Math.PI * Math.pow(radius, 2);
    }else if (type === "triangle"){
        let length = Number(input[1]);
        let high = Number(input[2]);
        face = length * high / 2;
    }
    
    console.log(face.toFixed(3));
}
areaOfFigures(["triangle",
"4.5",
"20"])


