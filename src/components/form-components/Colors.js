import * as React from 'react'
import { useState } from 'react'
import { StyledSelect, Label } from '../style'

export default function Colors ({
  label,
  initialValue,
  isValid,
  onValueChange,
  colors
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
      <StyledSelect isValid={isValid} onChange={handleChange}>
        {colors.map(function (item, i) {
          return (
            <option value={value} key={`${i}-${item}`}>
              {item}
            </option>
          )
        })}
      </StyledSelect>
    </>
  )
}
