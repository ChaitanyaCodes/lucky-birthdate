const birthdateInput = document.querySelector("#birthdate");
const luckyNumberInput = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const resultArea = document.querySelector(".result");
const messageArea = document.querySelector("#message-area");
const imageArea = document.querySelector(".img");



checkBtn.addEventListener("click", handleCheck);

function handleCheck(){
    
    if(resultArea.childNodes[3]){
        resultArea.removeChild(resultArea.childNodes[3]);
    }

    if(birthdateInput.value && luckyNumberInput.value){
        let sum = getSumOfDigits(birthdateInput.value);
        
        if(sum % luckyNumberInput.value){
            showMessage("Ooh Noo!!! Your birthday is not lucky!")
            setImage("./imgs/unlucky.svg", "unlucky");
        }else{
            showMessage("Ooh wow!!! Your birthday is lucky!");
            setImage("./imgs/lucky.svg", "lucky");
        }

    }else{
        showMessage("Please enter all the field.")
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

function setImage(imgPath, alt){
    let imageElem = document.createElement('img');
    imageElem.src = imgPath; 
    imageElem.alt = alt;
    resultArea.appendChild(imageElem);
}