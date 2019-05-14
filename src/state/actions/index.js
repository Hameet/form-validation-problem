import { SUBMIT_FORM, UPDATE_ANIMALS, UPDATE_FORM } from './form.constants'

const SUBMIT_FORM = 'SUBMIT_FORM'
const UPDATE_ANIMALS = 'UPDATE_ANIMALS'
const UPDATE_FORM = 'UPDATE_FORM'

function submitForm (errors) {
  return {
    type: SUBMIT_FORM,
    payload: {
      errors,
      success: errors.length === 0
    }
  }
}

function updateForm (e) {
  return {
    type: UPDATE_FORM,
    payload: {
      e
    }
  }
}

function updateAnimals (e) {
  return {
    type: UPDATE_ANIMALS,
    payload: {
      value: e.target.value
    }
  }
}

export { submitForm, updateAnimals, updateForm }
