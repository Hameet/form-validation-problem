import * as React from 'react'
import { useState } from 'react'
import { StyledInput, Label } from '../style'

export default function Input ({
  label,
  initialValue,
  isValid,
  onValueChange,
  type
}) {
  const [value, setValue] = useState(initialValue)

  const handleChange = e => {
    const { value } = e.target
    setValue(value)
    onValueChange(value)
  }

  return (
    <>
      <Label>{label}</Label>
      <StyledInput
        type={type}
        isValid={isValid}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}
