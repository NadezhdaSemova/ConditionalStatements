function passwordGuess(input){
let text = String(input[0]);

if (text === "s3cr3t!P@ssw0rd"){
console.log(`Welcome`)
}else{
console.log(`Wrong password!`)
}
}
passwordGuess(["s3cr3t!p@ss"])