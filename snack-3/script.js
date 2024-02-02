// Creo array vuoto
const arrayWithNumbers = [];

// Mi salvo elemento HTML Bottone
const ButtonInvio = document.getElementById("primary-button");

// Mi salvo elementi Input
const number1 = (document.getElementById("number-one").value);
const number2 = (document.getElementById("number-two").value);
const number3 = (document.getElementById("number-three").value);
const number4 = (document.getElementById("number-four").value);
const number5 = (document.getElementById("number-five").value);
const number6 = (document.getElementById("number-six").value);


// Apro un evnto al click

ButtonInvio.addEventListener("click", 
    function() {
        for (let i = 1; i <= 6; i++) {
            if (`${number${i}}}` % 2 !== 0 )

            arrayWithNumbers.push[`${number${i}}}`];

            console.log(arrayWithNumbers);
            
        }
        
        
    }
)
