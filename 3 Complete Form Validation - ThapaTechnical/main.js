const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')

//add events
form.addEventListener('submit', (e) => {
  e.preventDefault()

  validate()
})

//utility functions for validation
const isEmail = (email) => {
  //@ at first
  var atSymbol = email.indexOf('@')
  if (atSymbol < 1) return false

  //. at last
  var dotSymbol = email.lastIndexOf('.')
  if (dotSymbol <= atSymbol + 2) return false
  if (dotSymbol === email.length - 1) return false
  return true
}

//actual validation
function validate() {
  const usernameVal = username.value.trim()
  const emailVal = email.value.trim()
  const phoneVal = phoneNumber.value.trim()
  const passwordVal = password.value.trim()
  const confirmPasswordVal = confirmPassword.value.trim()

  //validate username
  if (usernameVal === '') {
    setErrorMessage(username, 'username cannot be blank')
  } else if (usernameVal.length <= 2) {
    setErrorMessage(username, 'username min 3 char')
  } else {
    setSuccessMessage(username)
  }

  //validate email
  if (emailVal === '') {
    setErrorMessage(email, 'email cannot be blank')
  } else if (!isEmail(emailVal)) {
    setErrorMessage(email, 'not a valid email')
  } else {
    setSuccessMessage(email)
  }

  //validate phone number
  if (phoneVal === '') {
    setErrorMessage(phoneNumber, 'mobile number cannot be blank')
  } else if (phoneVal.length < 10) {
    setErrorMessage(phoneNumber, 'not a valid mobile number')
  } else {
    setSuccessMessage(phoneNumber)
  }

  //validate password
  if (passwordVal === '') {
    setErrorMessage(password, 'password cannot be blank')
  } else if (passwordVal.length < 6) {
    setErrorMessage(password, 'password must not be less than 6 characters')
  } else {
    setSuccessMessage(password)
  }

  //validate confirmation password
  if (confirmPasswordVal === '') {
    setErrorMessage(confirmPassword, 'password cannot be blank')
  } else if (confirmPasswordVal !== passwordVal) {
    setErrorMessage(confirmPassword, 'passwords do no match')
  } else {
    setSuccessMessage(confirmPassword)
  }
}

function setErrorMessage(inputField, message) {
  const formControl = inputField.parentElement
  if (formControl.classList.contains('success'))
    formControl.classList.replace('success', 'error')
  else formControl.classList.add('error')

  const small = formControl.querySelector('small')
  small.innerText = message
}

function setSuccessMessage(inputField) {
  const formControl = inputField.parentElement
  if (formControl.classList.contains('error'))
    formControl.classList.replace('error', 'success')
  else formControl.classList.add('success')
}
