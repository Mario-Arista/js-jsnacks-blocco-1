const oneAsk = prompt("inerisci parola 1");
const twoAsk = prompt("inerisci parola 2");

if (oneAsk == null || twoAsk == null) {
    alert("Inserisci una parola valida");
}


const lenghtWordOne = oneAsk.length;
const lenghtWordTwo = twoAsk.length;

// OUTPUT

const outputOneElement = document.querySelector("#output-one");
const outputTwoElement = document.querySelector("#output-two");


if (lenghtWordOne < lenghtWordTwo) {
    outputOneElement.innerHTML = `<strong>${oneAsk}</strong> La prima parola che hai digitato ha meno caratteri!`;
    outputTwoElement.innerHTML = `<strong>${twoAsk}</strong> La Seconda parola che hai digitato ha più caratteri!`;

} else if (lenghtWordOne > lenghtWordTwo) {
    outputOneElement.innerHTML = `<strong>${twoAsk}</strong> La Seconda parola che hai digitato ha meno caratteri!`;
    outputTwoElement.innerHTML = `<strong>${oneAsk}</strong> La prima parola che hai digitato ha più caratteri!`;
} else {
    outputOneElement.innerHTML = `<strong>${twoAsk}</strong> ha esattamente gli stessi caratteri di <strong>${oneAsk}</strong>`;
}
