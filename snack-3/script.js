// Mi salvo elemento HTML Bottone
const buttonInvio = document.getElementById("primary-button");

const containerElement = document.querySelector("#results");

// Apro un evento al click

buttonInvio.addEventListener("click", 
    function(event) {

    // Prevengo il comportamento predefinito del form
    event.preventDefault(); 

     // Creo un array vuoto 
    const arrayWithNumbers = [];

    // Mi salvo i valori degli Input + Riempo Array
    for (let i = 1; i <= 6; i++) {
        const number = Number(document.getElementById("number-" + i).value);
        if (number % 2 !== 0) {
            arrayWithNumbers.push(number);
            console.log(arrayWithNumbers);
        }
    }

    // Metto in pagina i numeri dispari
    for (let i = 0; i < arrayWithNumbers.length; i++) {
        const newElement = document.createElement("li");
        newElement.innerHTML = arrayWithNumbers[i];
        containerElement.append(newElement);
        newElement.classList.add("list-unstyled");
    }

    
});
