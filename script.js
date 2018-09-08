console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var inputs = document.getElementsByTagName('input')

    var invalidArray = []

    function getInputName(input) {
        switch (input.id) {
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

    function addErrorMessage(input) {
        var errorDiv = document.createElement('div')
        errorDiv.classList.add('input-hint')
        if (input.id.startsWith('car')) {
            errorDiv.style.marginBottom = 0;
            input.parentElement.parentElement.appendChild(errorDiv);

        } else {
            input.parentElement.appendChild(errorDiv);
        }
        errorDiv.innerText = getInputName(input) + " is a required field."
    }

    for (input of inputs) {
        input.parentElement.classList.remove('input-invalid', 'input-valid')
    }

    for (div of document.querySelectorAll('.input-hint')) {
        div.remove()
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
                validInput(input)

            }
        }
    }

    for (invalidInput of invalidArray) {
        addErrorMessage(invalidInput)
    }

    function validInput(input) {
        if (input.id === 'car-year') {
            var parsedNum = parseInt(input.value, 10)
            if (typeof parsedNum === 'number') {
                if (parsedNum > '1900') {
                    var currentYear = (new Date()).getFullYear() + 1
                    if (parsedNum <= currentYear + 1) {
                        input.parentElement.classList.add('input-valid')
                    } else {
                        input.parentElement.classList.add('input-invalid')
                        invalidArray.push(input)
                    }
                } else {
                    input.parentElement.classList.add('input-invalid')
                    invalidArray.push(input)
                }
            } else {
                input.parentElement.classList.add('input-invalid')
                invalidArray.push(input)
            }
        } else if (input.id === 'start-date') {
            var currentDate = new Date()
            var parkDate = new Date(input.value)
            if (parkDate.getTime() >= currentDate.getTime()) {
                input.parentElement.classList.add('input-valid')
            } else {
                input.parentElement.classList.add('input-invalid')
                invalidArray.push(input)
            }
        } else if (input.id === 'days') {
            var parsedDays = parseInt(input.value, 10)
            if (typeof parsedDays === 'number') {
                if (parsedDays >= '1' && parsedDays <= '30') {
                    input.parentElement.classList.add('input-valid')
                } else {
                    input.parentElement.classList.add('input-invalid')
                    invalidArray.push(input)
                }
            }
        } else if (input.id === 'cvv') {
            if (/\d{3}/.test(input.value)) {
                input.parentElement.classList.add('input-valid')
            } else {
                input.parentElement.classList.add('input-invalid')
                invalidArray.push(input)
            }
        } else {
            input.parentElement.classList.add('input-valid')
        }
    }
})