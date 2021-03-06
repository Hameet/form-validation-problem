import * as React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'gatsby'

import {
  validateEmail,
  validatePassword,
  validateColor,
  validateAnimals,
  validateTiger,
  checkValid
} from '../../utilities'

import Input from './Input'
import Animals from './Animals'
import Colors from './Colors'
import { StyledError, Button, StyledForm, Styledhr, Styledh1 } from '../style'

import { initialState } from './State'

export default function Form () {
  // Here we define the values and assign them to the UseState hook
  const [formValues, setFormValues] = useState(initialState)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    email: { value: emailValue, valid: isEmailValid },
    password: { value: passwordValue, valid: isPasswordValid },
    colors: { value: colorValue, valid: isColorValid },
    animals: { value: animalsValue, valid: isAnimalValid },
    tigerName: { value: tigerValue, valid: isTigerValid }
  } = formValues

  // This function takes all the inputs for the values defined above
  // and assigns them to the hook and runs the validation function on each value
  // This fn is called when the form submits

  const handleSubmit = e => {
    e.preventDefault()
    const updatedFormValues = {
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
    }
    setFormValues(updatedFormValues)
    // set isSubmitting based on whether the entire form is valid
    // could change this state to isFormValid...
    setIsSubmitting(checkValid(updatedFormValues))
  }

  // This is the second handle function which is assigned to each component of the form
  // It handles the individual inputs of the components and is called during each individual comp submition
  const handleValueChange = input => value => {
    return setFormValues({
      ...formValues,
      [input]: {
        ...formValues[input],
        value
      }
    })
  }

  useEffect(
    () => {
      isSubmitting && alert('YAY! You have entered a valid form')
      // after running the effect set isSubmitting to false so the alert
      // doesn't run until we click submit again
      setIsSubmitting(false)
      // you can pass a second argument to useEffect
      // this is an array of values that determine when the effect should run
      // only when these values change
    },
    [isSubmitting]
  )

  return (
    <>
      <StyledForm
        method='post'
        action={<Link to='/page-2/'>Go to page 2</Link>}
        onSubmit={handleSubmit}
      >
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
          <StyledError>
            Your password must be at least 8 characters.
          </StyledError>
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
        <Button onClick={() => useEffect} type='submit'>
          Create Account
        </Button>
      </StyledForm>
    </>
  )
}
