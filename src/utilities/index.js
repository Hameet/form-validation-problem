export function validateEmail (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function validatePassword (password) {
  return password.length > 8
}

export function logger (value) {
  console.log(value)
}

export function validateColor (colors) {
  console.log('animals', colors[0] !== 'Select Color')
  return colors[0] !== 'Select Color'
}

export function validateAnimals (animals) {
  const selectedAnimals = animals.filter(animal => animal.checked)

  return selectedAnimals.length >= 2
}

export function validateTiger (animals, tigerValue) {
  const Tiger = animals.filter(animal => animal.name === 'Tiger')
  console.log('tiger', !(Tiger[0].checked && tigerValue === ''))
  return !(Tiger[0].checked && tigerValue === '')
}

export const checkValid = formValues => {
  const updated = Object.values(formValues)
  return updated.filter(x => x.valid === true).length > 4
}
