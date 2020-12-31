function handleCreateUserRequest(request) {
  try {
    createUser(request);
  } catch (error) {
    logError(error.message);
  }
}

function createUser(input) {
  validateInput(input);
  saveUser(input);
}

function validateInput({ email, password }) {
  validateEmail(email)
  validatePassword(password)
}

function validateEmail(email) {
  if (!stringMatchesEmailPattern(email)) {
    throwBadRequestError(`${email} is not a valid email`)
  }
}

function stringMatchesEmailPattern(email) {
  return isValidString(email) && email.includes('@')
}

function validatePassword(password) {
  if (!isValidString(password)) {
    throwBadRequestError(`${password} is not a valid string`)
  }
}

function isValidString(possibleString) {
  if (typeof possibleString !== 'string') {
    return false
  }

  return possibleString.trim().length > 0
}

function saveUser(input) {
  database.insert(input);
}

function throwBadRequestError(message) {
  const error = new Error(message)
  error.status = 400
  throw error
}

function logError(message) {
  console.log(message);
}
