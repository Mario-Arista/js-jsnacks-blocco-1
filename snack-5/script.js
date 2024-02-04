// registro il valore dell'input
const InputNumberElement = document.getElementById("number-user");


//  Bottone
const buttonInvio = document.getElementById("button-invio");


// registro input con click 
buttonInvio.addEventListener("click",
    function() {

        let sum = 0;

        const numberValue = Number(InputNumberElement.value);

        for (let i = 1; i <= numberValue; i++) {

            sum += i * i * i;
            
        }


        // Metto output in pagina
        const outputElement = document.getElementById("result");
        outputElement.innerHTML = sum;
        outputElement.classList.remove("d-none");
        document.querySelector("h2").classList.remove("d-none");
    }
);

