let sum = 0;

// Utilizzo un for per chiedere 10 numeri all'utente

for (let i = 0; i < 10; i++) {
    // chiedo all'utente 10 numeri con il prompt
    let numberAsk = Number(prompt("Inserisci il numero " + (i + 1) + ":"));

    sum += numberAsk;
}

// Somma Numeri prompt con output
const outputSumElement = document.getElementById("sum-numbers");
outputSumElement.innerHTML = sum;

