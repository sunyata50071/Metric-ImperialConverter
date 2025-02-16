const convertButton = document.getElementById("conversion-button")
const inputEl = document.getElementById("number-to-convert")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const weightEl = document.getElementById("mass-el")

const metresToFeet = 3.281
const litresToGallons = 0.264
const kilosToPounds = 2.204

convertButton.addEventListener("click", function() {
    let userInput = inputEl.value
    const metresToFtResult = userInput * metresToFeet
    const litresToGallResult = userInput * litresToGallons
    const kiloToPoundsResult = userInput * kilosToPounds
    const feetToMetres = userInput / metresToFeet
    const gallonsToFeet = userInput / litresToGallons
    const poundsToKilos = userInput / kilosToPounds
    lengthEl.textContent = `${userInput} m = ${metresToFtResult.toFixed(3)} ft
    | ${userInput} ft = ${feetToMetres.toFixed(3)} m`
    volumeEl.textContent = `${userInput} L = ${litresToGallResult.toFixed(3)} gal
    | ${userInput} gal = ${gallonsToFeet.toFixed(3)} L`
    weightEl.textContent = `${userInput} kg = ${kiloToPoundsResult.toFixed(3)} lb
    | ${userInput} lb = ${poundsToKilos.toFixed(3)} kg`
})
