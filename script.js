console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()
// debugger
function getInputName(input){
    switch(input.Id) {
        case "name":
            return "Name"
        case "car-year":
            return "Year"
        case "car-make":
            return "Make"
        case "car-model":
            return "Model"
        case "start-date":
            return "Start date"
        case "days":
            return "Number of days"
        case "credit-card":
            return "Credit card number"
        case "cvv":
            return "CVV"
        case "expiration":
            return "Expiration date"
    }
}

function addErrorMessage(invalidArray){
    for (invalidInput of invalidArray){
        addErrorMessage(invalidInput) 
            errorDiv.innerText (getInputName (invalidInput) + " is a required field.")
    }
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('input-hint')
    errorDiv.innerText = errorMsgs.join("| ")
    input.parentElement.appendChild(errorDiv);
}

    var inputs = document.getElementsByTagName('input')

    var invalidArray = []

    for (input of inputs) {
        input.parentElement.classList.remove('input-invalid', 'input-valid')
    }

    for (input of inputs) {
        if (input.value === '') {
            if (input.parentElement.classList.contains('input-valid')) {
                input.parentElement.classList.add('input-invalid')
                input.parentElement.classList.remove('input-valid')
                invalidArray.push(input)
            } else {
                input.parentElement.classList.add('input-invalid')
                invalidArray.push(input)
            }
        } else {
            if (!input.parentElement.classList.contains('input-invalid')) {
                input.parentElement.classList.add('input-valid')
            }
        }
    }

    
    errorMessage(input)

console.log(invalidArray)
})