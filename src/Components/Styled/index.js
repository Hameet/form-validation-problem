import styled from 'styled-components'

const FormBody = styled.form`
  background: #fff;
  padding: 1em 1.25em;
  border: solid 1px #ccc;
  border-radius: 0.25em;
`
const Label = styled.label``

const InputEmail = styled.input`
  font-family: sans-serif;
  font-size: 1em;
  border-radius: 0.25em;
  -webkit-appearance: none;
  background-color: ${function ({ test }) {
    console.log('log', test)
    return test ? 'red' : 'green'
  }}};
`
export { FormBody, Label, InputEmail }
