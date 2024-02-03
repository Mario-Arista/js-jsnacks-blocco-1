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
    
    // Mi salvo i valori degli Input
    const number1 = (document.getElementById("number-one").value);
    const number2 = (document.getElementById("number-two").value);
    const number3 = (document.getElementById("number-three").value);
    const number4 = (document.getElementById("number-four").value);
    const number5 = (document.getElementById("number-five").value);
    const number6 = (document.getElementById("number-six").value);
    
    // Controllo se ogni numero è dispari e lo aggiungo all'array
    // Non ho trovato un modo per usare un FOR
    if (number1 % 2 !== 0) arrayWithNumbers.push(number1);
    if (number2 % 2 !== 0) arrayWithNumbers.push(number2);
    if (number3 % 2 !== 0) arrayWithNumbers.push(number3);
    if (number4 % 2 !== 0) arrayWithNumbers.push(number4);
    if (number5 % 2 !== 0) arrayWithNumbers.push(number5);
    if (number6 % 2 !== 0) arrayWithNumbers.push(number6);


    // Metto in pagina i numeri dispari
    const ResultsOutput = document.getElementById("results");

    console.log(arrayWithNumbers);
    for (let i = 0; i < arrayWithNumbers.length; i++ ) {

        const newElement = document.createElement("li");
        containerElement.append(newElement);
        newElement.innerHTML = arrayWithNumbers[i];
        newElement.classList.add("list-unstyled");
    }
});
