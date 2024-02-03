// MI salvo il Button
const buttonInvio = document.getElementById("primary-button");

const numberElement = document.getElementById("number-calc");

// Apro un evento al click

buttonInvio.addEventListener("click", 
    function(event) {

    // Prevengo il comportamento predefinito del form
    event.preventDefault(); 

    // Mi salvo il valore dell'input
    const numberValue = parseInt(numberElement.valueOf);
    
    // Controllo che il numero sia di 4 cifre
    if (numberValue < 1000 || numberValue > 9999 ) {
        alert("Devi inserire un numero di 4 cifre");
    }

    // Estraggo le cifre
    const migliaia = Math.floor(numberValue / 1000);
    const centinia = Math.floor(numberValue / 100);
    const decima = Math.floor(numberValue / 10);
    const unitaFinale = numberValue % 10;

    // Sommo le cifre
    const somma = migliaia + centinia + decima + unitaFinale;

    // Metto in pagina la somma
    const outputSumElement = document.getElementById("sum-numbers");
    outputSumElement.innerText = somma;
    
});