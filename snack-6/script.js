// Mi salvo un contatore
let sum = 0;

// Utilizzo un for per chiedere 10 numeri all'utente

for (let i = 0; i < 10; i++) {
    // chiedo all'utente 10 numeri con il prompt
    let numberAsk = parseInt(prompt("Inserisci il numero " + (i + 1) + ":"));

    sum += numberAsk;
}

// Calcolo media
let media = sum / 10;


// Metto in pagina la somma
const outputSumElement = document.querySelector("#results-sum");
const outputMessagSumElement = document.querySelector("#message-sum");

outputMessagSumElement.innerHTML = "La somma dei 10 numeri che hai inserito è:";
outputSumElement.innerHTML = `${sum}`;

// Metto in pagina la media
const outputMediaElement = document.querySelector("#results-media");
const outputMessagMediaElement = document.querySelector("#message-media");

outputMessagMediaElement.innerHTML = "La media dei 10 numeri che hai inserito è:";
outputMediaElement.innerHTML = `${media}` 



