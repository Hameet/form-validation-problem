import * as React from 'react'
import { useState } from 'react'
import { StyledAnimalName } from '../../style'

export default function Animals ({ initialValue, onValueChange, isValid }) {
  const [animals, setAnimals] = useState(initialValue)

  const handleChange = e => {
    const { checked, value } = e.target
    const updatedAnimals = animals.map(animal => {
      return animal.name === value ? { ...animal, checked } : animal
    })

    setAnimals(updatedAnimals)
    onValueChange(updatedAnimals)
  }

  return (
    <StyledAnimalName isValid={isValid}>
      Animals
      {animals.map((animal, i) => (
        <label key={`${i}-${animal.name}`}>
          <input
            type='checkbox'
            value={animal.name}
            checked={animal.checked}
            onChange={handleChange}
          />
          {animal.name}
        </label>
      ))}
    </StyledAnimalName>
  )
}
