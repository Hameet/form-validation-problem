import styled from 'styled-components'

const StyledInput = styled.input`
  display: block;
  border-color: ${props => (props.isValid ? 'green' : 'red')};
  border-width: 5px;
`

const StyledSelect = styled.select`
  color: ${function (props) {
    // console.log(props, "props");
    return props.isValid ? 'black' : 'red'
  }};
`

const StyledOption = styled.option`
  font-weight: bold;
`

const StyledError = styled.p`
  color: #ff392e;
`

const StyledAnimalName = styled.p`
  color: ${function (props) {
    // console.log(props, "props");
    return props.isValid ? 'black' : 'red'
  }};
`

const Body = styled.body`
  font-family: sans-serif;
  line-height: 1.5;
  color: #333;
  background: #ddd;
  margin: 2em;
`
const Form = styled.form`
  background: #fff;
  padding: 1em 1.25em;
  border: solid 1px #ccc;
  border-radius: 0.25em;
`
const Label = styled.label`
  vertical-align: middle;
`

export {
  Body,
  Form,
  Label,
  StyledInput,
  StyledError,
  StyledSelect,
  StyledOption,
  StyledAnimalName
}
