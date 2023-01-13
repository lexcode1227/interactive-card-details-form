//Declarando variables
const nameInput = document.querySelector("#cardDetails-name")
const cardInput = document.querySelector("#cardDetails-number")
const mmInput = document.querySelector("#cardDetails-date--mm")
const yyInput = document.querySelector("#cardDetails-date--yy")
const cvcInput = document.querySelector("#cardDetails-date--cvc")
const btn = document.querySelector("#Btn")

const nameOutput = document.querySelector("#nameCard")
const cardOutput = document.querySelector("#numberCard")
const mmOutput = document.querySelector("#mmCard")
const yyOutput = document.querySelector("#yyCard")
const cvcOutput = document.querySelector("#cvc")
const year = new Date().getFullYear().toString().substr(-2)

const errorCardName = document.querySelector("#cardDetails-name--error")
const errorCardNumber = document.querySelector("#cardDetails-number--error")
const errorCardMm = document.querySelector("#cardDetails-datemm--error")
const errorCardYy = document.querySelector("#cardDetails-dateyy--error")
const errorCardCvc = document.querySelector("#cardDetails-datecvc--error")

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
    let ok = true
    if(nameInput.value.length < 2 || nameInput.value.length > 25 ){
        errorCardName.innerText = "Card name invalid"
        console.log("Card name invalid")
        return ok = false
    } else {
        errorCardName.innerText = ""
    }
    if (cardInput.value.length == 16){
        ok = true
        errorCardNumber.innerText = ""
    } else {
        errorCardNumber.innerText = "Card number invalid"
        console.log("Card number invalid");
        ok = false
    }
    if (cvcInput.value.length == 3){
        ok = true
        errorCardCvc.innerText = ""
    } else {
        errorCardCvc.innerText = "Card cvc invalid"
        console.log("Card cvc invalid");
        ok = false
    }  
    if(mmInput.value < 1 || mmInput.value > 12) {
        errorCardMm.innerText = "Card month invalid"
        console.log("Card month invalid");
        ok = false
    } else {
        errorCardMm.innerText = ""
    }
    if(yyInput.value < year){
        errorCardYy.innerText = "Card year invalid"
        console.log("Card year invalid");
        ok = false
    } else {
        errorCardYy.innerText = ""
    }
      
    if(ok == true){
        const cardDetails = document.querySelector("#cardDETAILS")
        const thankYou = document.querySelector("#thankYou")
        cardDetails.classList.add("inactive")
        thankYou.classList.remove("inactive")
    }
})
const btnFin = document.querySelector("#btnFin")
btnFin.addEventListener("click", ()=>{
    location.reload()
    })
