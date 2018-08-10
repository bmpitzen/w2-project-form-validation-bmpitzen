console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function (event) {
event.preventDefault()

var inputs = document.getElementsByTagName('input')

for (input of inputs) {
    input.parentElement.classList.remove('input-invalid','input-valid')
}

for (input of inputs) {
    if (input.value === '') {
        if(input.parentElement.classList.contains('input-valid')){
            input.parentElement.classList.add('input-invalid')
            input.parentElement.classList.remove('input-valid')
        } else {
            input.parentElement.classList.add('input-invalid')
        }
    } else {
        if(!input.parentElement.classList.contains('input-invalid')){
            input.parentElement.classList.add('input-valid')
        }
    }
}

})