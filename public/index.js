//Declarando variables
const nameInput = document.querySelector("#cardDetails-name")
const cardInput = document.querySelector("#cardDetails-number")
const mmInput = document.querySelector("#cardDetails-date--mm")
const yyInput = document.querySelector("#cardDetails-date--yy")
const cvcInput = document.querySelector("#cardDetails-date--cvc")
const btn = document.querySelector("#btn")

const nameOutput = document.querySelector("#nameCard")
const cardOutput = document.querySelector("#numberCard")
const mmOutput = document.querySelector("#mmCard")
const yyOutput = document.querySelector("#yyCard")
const cvcOutput = document.querySelector("#cvc")

nameInput.addEventListener("input", ()=>{
    nameOutput.innerText = nameInput.value 
})
cardInput.addEventListener("input", ()=>{
    cardOutput.innerText = cardInput.value 
})
mmInput.addEventListener("input", ()=>{
    mmOutput.innerText = mmInput.value 
})
yyInput.addEventListener("input", ()=>{
    yyOutput.innerText = yyInput.value 
})
cvcInput.addEventListener("input", ()=>{
    cvcOutput.innerText = cvcInput.value 
})
btn.addEventListener("click", ()=>{
    location.reload()
})

// if(cvcInput > 0){
//     cvcInput.addEventListener("input", addData(cvcInput,cvcOutput))
// }

// function addData(input, output){
//     console.log("dfgdg");
//     output.innerText = input.value
// }



