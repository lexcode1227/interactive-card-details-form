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
    const cardDetail = document.querySelector("#cardDetail")
    cardDetail.innerHTML = ""
    const cardDETAILS = document.createElement("div")
    const img = document.createElement("object")
    img.data = "/interactive-card-details-form/assets/icon-complete.svg"
    img.setAttribute("width", "100")
    img.setAttribute("height", "100")
    const h1 = document.createElement("h1")
    const h1Text = document.createTextNode("THANK YOU!")
    const h2 = document.createElement("h2")
    const h2Text = document.createTextNode("We’ve added your card details")
    const button = document.createElement("button")
    const buttonText = document.createTextNode("Continue")

    button.appendChild(buttonText)
    button.classList.add("btn")
    button.setAttribute("id", "btnFin")
    h2.appendChild(h2Text)
    h2.classList.add("h2Text")
    h1.appendChild(h1Text)
    h1.classList.add("h1Text")

    cardDETAILS.append(img,h1,h2,button)
    cardDETAILS.classList.add("cardDetails", "textCenter")
    cardDetail.append(cardDETAILS)
    cardDetail.setAttribute("id", "cardDetail")
    const btnFin = document.querySelector("#btnFin")
    btnFin.addEventListener("click", ()=>{
    location.reload()})
})




