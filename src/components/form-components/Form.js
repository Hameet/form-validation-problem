import * as React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles.css'

import {
  validateEmail,
  validatePassword,
  validateColor,
  validateAnimals,
  validateTiger
} from './utilities'
import Input from './components/Input'
import Animals from './components/Input/animals'
import Select from './components/Input/select'
import { StyledError } from './style'

const initialState = {
  email: {
    value: '',
    valid: true
  },
  password: {
    value: '',
    valid: true
  },
  colors: {
    value: ['Select Color', 'Violet', 'Red', 'Yellow', 'Black'],
    valid: true
  },
  animals: {
    value: [
      {
        name: 'Bear',
        checked: false
      },
      { name: 'Sam', checked: false },
      { name: 'Snake', checked: false },
      { name: 'Tiger', checked: false }
    ],
    valid: true
  },
  tigerName: {
    value: '',
    valid: true
  }
}

export default function App () {
  const [formValues, setFormValues] = useState(initialState)

  const {
    email: { value: emailValue, valid: isEmailValid },
    password: { value: passwordValue, valid: isPasswordValid },
    colors: { value: colorValue, valid: isColorValid },
    animals: { value: animalsValue, valid: isAnimalValid },
    tigerName: { value: tigerValue, valid: isTigerValid }
  } = formValues

  const handleSubmit = e => {
    e.preventDefault()
    setFormValues({
      ...formValues,
      email: {
        ...formValues.email,
        valid: validateEmail(emailValue)
      },
      password: {
        ...formValues.password,
        valid: validatePassword(passwordValue)
      },
      colors: {
        ...formValues.colors,
        valid: validateColor(colorValue)
      },
      animals: {
        ...formValues.animals,
        valid: validateAnimals(animalsValue)
      },
      tigerName: {
        ...formValues.tigerName,
        valid: validateTiger(animalsValue, tigerValue)
      }
    })
  }

  const handleValueChange = input => value => {
    return setFormValues({
      ...formValues,
      [input]: {
        ...formValues[input],
        value
      }
    })
  }
  // console.log("tigername", formValues.tigerName);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type='text'
          label='Email'
          isValid={isEmailValid}
          initialValue={emailValue}
          onValueChange={handleValueChange('email')}
        />
        <Input
          type='password'
          label='Password'
          isValid={isPasswordValid}
          initialValue={passwordValue}
          onValueChange={handleValueChange('password')}
        />
        <Select
          type='colors'
          label='Colors'
          colors={initialState.colors.value}
          isValid={isColorValid}
          initialValue={colorValue}
          onValueChange={handleValueChange('colors')}
        />
        <Animals
          initialValue={animalsValue}
          isValid={isAnimalValid}
          onValueChange={handleValueChange('animals')}
        />
        <Input
          type='text'
          label='TigerName'
          isValid={isTigerValid}
          initialValue={tigerValue}
          onValueChange={handleValueChange('tigerName')}
        />
        <button type='submit'>Submit</button>
      </form>
      {!isEmailValid && <StyledError>Your email is not valid.</StyledError>}
      {!isPasswordValid && (
        <StyledError>Your password is not valid.</StyledError>
      )}
      {!isColorValid && <StyledError>Please enter a color.</StyledError>}
      {!isAnimalValid && <StyledError>Select 2 animals.</StyledError>}
      {!isTigerValid && <StyledError>Please enter name of tiger.</StyledError>}
    </>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
