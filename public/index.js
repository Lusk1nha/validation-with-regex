const inputsUser = document.querySelectorAll('.user')
const btnSend = document.querySelector(".requestRegister")

const inputConditions = {
  'text': /^[a-zA-Z]{4,15}$/,
  'password': /(?=.*([\W_].*){6})(?=.*([A-Z].*){5})(?=.*(\-.*){2})/,
  'email': /^([a-zA-Z0-9_\.\-])+\@((gmail)+\.)+([a-zA-Z0-9]{2,4}\.)?([a-zA-Z0-9]{2,4})$/,
}

inputsUser.forEach(input => {
  input.addEventListener('keyup', (e) => {
    validation(e.target)
  })
})

function validation(input) {
  if ( !input.value.length ) {
    input.classList.remove('valid')
    input.classList.remove('invalid')

  } else {
    const inputValue = input.value.trim()
    const regExCondition = inputConditions[input.type]
    const testInput = regExCondition.test(inputValue)

    if ( !testInput ) showError(input)
    else removeError(input)
    
  }

  validInputs()
}

function showError(input) {
  const error = document.querySelector(`.error.${input.type}`)

  input.classList.remove('valid')
  input.classList.add('invalid')

  error.hidden = false
}

function removeError(input) {
  const error = document.querySelector(`.error.${input.type}`)

  input.classList.add('valid')
  input.classList.remove('invalid')

  error.hidden = true

}

function validInputs() {
  const valids = document.querySelectorAll('.valid').length

  if ( valids == 3 ) btnSend.disabled = false
  else btnSend.disabled = true
}