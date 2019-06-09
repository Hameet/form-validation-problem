import * as React from 'react'
import { useState } from 'react'
import { StyledInput } from '../../style'

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
      <label>{label}</label>
      <StyledInput
        type={type}
        isValid={isValid}
        value={value}
        onChange={handleChange}
      />
    </>
  )
}
