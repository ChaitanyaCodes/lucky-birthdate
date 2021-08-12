const birthdateInput = document.querySelector("#birthdate");
const luckyNumberInput = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const resultArea = document.querySelector(".result");
const messageArea = document.querySelector("#message-area");

console.log(messageArea);

checkBtn.addEventListener("click", handleCheck);

function handleCheck(){
    if(birthdateInput.value && luckyNumberInput.value){
        let sum = getSumOfDigits(birthdateInput.value);
        
        if(sum % luckyNumberInput.value){
            console.log("not lucky");
            showMessage("not lucky")
        }else{
            console.log("lucky")
            showMessage("lucky")
        }

    }else{
        console.log("not present")
        // code to show when one of the input fields are not field.
    }
    
}

function getSumOfDigits(birthDate){
    let dateDigits = birthDate.split("-");
    let sumOfDigits = 0;
    dateDigits.forEach( dateElement => {
        
        for(let index = 0; index < dateElement.length; index++){
            sumOfDigits += Number(dateElement[index])
        }

    });

    return sumOfDigits;
}

function showMessage(msg){
    messageArea.innerText = msg;
}