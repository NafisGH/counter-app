let button = document.querySelector('.btnPlus')
let buttonReset = document.querySelector('.btnReset')
let counterText = document.querySelector('.counter')
// const initialValue = 0
// let counter = initialValue;
let counter = 0

button.addEventListener('click', function () {
    counter += 1
    counterText.innerText = counter
})

buttonReset.addEventListener('click', function () {
    counter = 0
    counterText.innerText = counter    
})