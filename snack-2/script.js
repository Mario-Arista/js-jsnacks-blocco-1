const number1 = Number(prompt("Scrivo il primo numero"));
const number2 = Number(prompt("Scrivo il secondo numero"));
const number3 = Number(prompt("Scrivo il terzo numero"));
const number4 = Number(prompt("Scrivo il quarto numero"));
const number5 = Number(prompt("Scrivo il quinto numero"));
const number6 = Number(prompt("Scrivo il sesto numero"));
const number7 = Number(prompt("Scrivo il settimo numero"));
const number8 = Number(prompt("Scrivo il Ottavo numero"));
const number9 = Number(prompt("Scrivo il Nono numero"));
const number10 = Number(prompt("Scrivo il decimo numero"));
let sum = 0;


// for (let i = 1; i <= 10; i++) {
//     let `number${i}` = Number(prompt("Scrivo un numero"));

//     let sum += `number${i}`;
// }

// Somma Numeri prompt con output
const outputSumElement = document.getElementById("sum-numbers");
outputSumElement.innerHTML = number1 + number2 + number3 + number3 + number5 + number6 + number7 + number8 + number9 + number10;

// Somma Numeri prompt con output
const outputNumbersElement = document.getElementById("insert-numbers");

// Ho provato a farlo con array che si riempiva dopo 
// con un for, ma la sintassi 
