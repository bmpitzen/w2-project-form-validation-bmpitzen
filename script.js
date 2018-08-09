console.log('Add validation!');
document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    // clearError()

// var name = document.getElementById('name').value.trim()

// if (name === ''){
//     document.getElementById('name-field').classList.add ('input-invalid')
// } else {
//    document.getElementById('name-field').classList.add ('input-valid')
// }


// var test = document.getElementsByClassName('input-field')[3].getElementsByTagName('input')[0].value.trim()
// var testParent = document.getElementsByClassName('input-field')[3]
// if (test === ''){
//     testParent.classList.add ('input-invalid')
// } else {
//     testParent.classList.add ('input-valid')
// }
var fields = document.getElementsByClassName('input-field')

for (i of fields){
    debugger
    var input = i.getElementsByTagName('input')[0].value.trim()
    console.log (input)
    
    if (input === ''){
        i.classList.add ('input-invalid')
        
    } else {
        i.classList.add ('input-valid')
    }
}

})




// Define Functions Bellow Here

// function showEmptyError (){
//     var errorDiv = document.getElementsByClassName('input-field')
//     errorDiv.classList.add('invalid-input')
// }


