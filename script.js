const formEl = document.querySelector('#form')
const usernameEl = document.getElementById('username')
const emailEl = document.getElementById('email')
const phoneEl = document.getElementById('phone')
const passwordEl = document.getElementById('password')
const confirmPassword = document.getElementById('repassword')

function showError(input,mesaj="Xeta bash verdi") {
    input.className += " is-invalid"
    const div = input.nextElementSibling
    console.log(div)
    div.innerText = mesaj
    div.className = "invalid-feedback bg-warning"

}

function showSuccess(qutu) {
    qutu.className = "form-control is-valid"
}

function checkEmail(elektronPoct) {
    const regularExpression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    regularExpression.test(elektronPoct.value.trim()) ?  showSuccess(elektronPoct) : showError(elektronPoct, "Elektron poct sehvdir")
    



}


function checkRequired(inputlar) {
    // Higher Order function
    inputlar.forEach(function(birInput) {
        if(birInput.value === '') {
            showError(birInput, `${birInput.id} sahesi teleb edilir`)
        }
        else {
            showSuccess(birInput)
        }
    })
}

function checkPhone(phoneNumber) {
const regularExpression = /^\+?\d{1,3}[-.\s]?\d{3,4}[-.\s]?\d{5}$/


   if(regularExpression.test(phoneNumber.value.trim())) {
    showSuccess(phoneNumber)
   }
   else {
    showError(phoneNumber, "Nomre standartlara uygun deyil")
   }    
}


function checkLength(input,minimum,maksimum) {
    if(input.value.length < minimum) {
        showError(input, `${input.id} en az ${minimum} simvoldan ibaret olmalidir`)
    }

    else if(input.value.length >maksimum ) {
        showError(input, `${input.id} en cox ${maksimum} simvoldan ibaret olmalidir` )
    }

    else {
        showSuccess(input)
    }
 }


function shifrelerBeraberliyiniYoxla(p1,p2) {
    if(p1.value !== p2.value) {
        showError(p2, "Shifreler uygun deyil!")
    }
}



formEl.addEventListener('submit', function(e) {
    e.preventDefault()
    checkRequired([usernameEl,emailEl,passwordEl,confirmPassword,phoneEl])
    checkEmail(emailEl)
    checkLength(usernameEl,4,10)
    checkLength(passwordEl,7,10)
    shifrelerBeraberliyiniYoxla(passwordEl,confirmPassword)
    checkPhone(phoneEl)
})



