import * as React from 'react'
import { useState } from 'react'

import {
  validateEmail,
  validatePassword,
  validateColor,
  validateAnimals,
  validateTiger
} from '../../utilities'

import Input from './Input'
import Animals from './Animals'
import Colors from './Colors'
import { StyledError, Button, StyledForm, Styledhr, Styledh1 } from '../style'

import { initialState } from './State'

export default function Form () {
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

  return (
    <>
      {/* <Body> */}
      <StyledForm onSubmit={handleSubmit}>
        <Styledh1>Fill out this awesome form</Styledh1>
        <Input
          type='text'
          label='Email'
          isValid={isEmailValid}
          initialValue={emailValue}
          onValueChange={handleValueChange('email')}
        />
        {!isEmailValid && <StyledError>Your email is not valid.</StyledError>}
        <Input
          type='password'
          label='Password'
          isValid={isPasswordValid}
          initialValue={passwordValue}
          onValueChange={handleValueChange('password')}
        />
        {!isPasswordValid && (
          <StyledError>Your password is not valid.</StyledError>
        )}
        <Styledhr />
        <Colors
          type='colors'
          label='Colors'
          colors={initialState.colors.value}
          isValid={isColorValid}
          initialValue={colorValue}
          onValueChange={handleValueChange('colors')}
        />
        {!isColorValid && <StyledError>Please select a color.</StyledError>}
        <Animals
          label='Your animal'
          initialValue={animalsValue}
          isValid={isAnimalValid}
          onValueChange={handleValueChange('animals')}
        />
        {!isAnimalValid && <StyledError>Select 2 animals.</StyledError>}
        <Input
          type='text'
          label='Type of Tiger'
          isValid={isTigerValid}
          initialValue={tigerValue}
          onValueChange={handleValueChange('tigerName')}
        />
        {!isTigerValid && (
          <StyledError>Please enter name of tiger.</StyledError>
        )}
        <Button type='submit'>Create Account</Button>
      </StyledForm>
      {/* </Body> */}
    </>
  )
}
