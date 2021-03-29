const inputsUser = document.querySelectorAll('.user')
const btnSend = document.querySelector(".requestRegister")

const infoButton = document.querySelector('.infoButton')
infoButton.addEventListener('click', () => {
  infoButton.classList.toggle('opened')

})

const inputConditions = {
  'username': {
    isValid: false
  },
  'password': {
    isValid: true
  },
  'confirmpassword': {
    isValid: true
  },
  'email': {
    isValid: false
  },
}

inputsUser.forEach(input => {
  input.addEventListener('keyup', (e) => {
    if ( input.classList[1] == 'username') {
      usernameValidation(e.target)

    }
    else if ( input.classList[1] == 'email' ) {
      emailValidation(e.target)

    }
  })
})

btnSend.addEventListener('click', () => {
  console.log('Sending info')

})

function usernameValidation(input) {
  if ( !input.value.length ) {
    input.classList.remove('valid')
    input.classList.remove('invalid')

    inputConditions['username'].isValid = false

  } else {
    const username = input.value.trim()
    const regExUsername = /^[a-zA-Z]{4,15}$/
    const validUsername = regExUsername.test(username)

    if ( !validUsername ) {
      input.classList.remove('valid')
      input.classList.add('invalid') 

      inputConditions['username'].isValid = false

  
    } else if ( validUsername ) {
      input.classList.add('valid')
      input.classList.remove('invalid')

      inputConditions['username'].isValid = true
  
    }
  }

  isUserValid()
}

function emailValidation(input) {
  const email = input.value

  if ( !input.value.length ) {
    input.classList.remove('valid')
    input.classList.remove('invalid')

    inputConditions['email'].isValid = false

  } else {
    const regExEmailValidator = /^([a-zA-Z0-9_\.\-])+\@((gmail)+\.)+([a-zA-Z0-9]{2,4}\.)?([a-zA-Z0-9]{2,4})$/
    const validEmail = regExEmailValidator.test(email)
  
    if ( !validEmail ) {
      // ! Invalid Email
      input.classList.remove('valid')
      input.classList.add('invalid') 

      inputConditions['email'].isValid = false

    } else {
      // * Valid Email
      input.classList.remove('invalid')
      input.classList.add('valid')

      inputConditions['email'].isValid = true
      
    }
  }
  
  isUserValid()
}

function passwordValidation() {


}

function isUserValid() {
  if ( inputConditions['username'].isValid && inputConditions['password'].isValid && inputConditions['confirmpassword'].isValid && inputConditions['email'].isValid ) {
    return btnSend.disabled = false
  }

  btnSend.disabled = true
}