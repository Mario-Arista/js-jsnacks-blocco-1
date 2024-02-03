// MI salvo il Button
const buttonInvio = document.getElementById("primary-button");

const numberElement = document.getElementById("number-calc");

// Apro un evento al click

buttonInvio.addEventListener("click", 
    function(event) {

    // Prevengo il comportamento predefinito del form
    event.preventDefault(); 

    // Mi salvo il valore dell'input

    const numberValue = Math.floor(numberElement.value);

    // Controllo che il numero sia di 4 cifre
    if (numberValue < 1000 || numberValue > 9999 ) {
        alert("Devi inserire un numero di 4 cifre");
    }

    // Estraggo le cifre
    const migliaia = Math.floor(numberValue / 1000);
    console.log(migliaia);
    const centinaia = Math.floor((numberValue % 1000) / 100);
    console.log(centinaia);
    const decima = Math.floor((numberValue % 100) / 10);
    console.log(decima);
    const unitaFinale = numberValue % 10;
    console.log(unitaFinale);
    

    // Sommo le cifre
    const somma = migliaia + centinaia + decima + unitaFinale;

    // Metto in pagina la somma
    const outputSumElement = document.querySelector("#results");
    outputSumElement.innerHTML += somma;
    document.querySelector("h2").classList.remove("d-none")
});