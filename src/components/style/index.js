import styled from 'styled-components'

const StyledInput = styled.input`
  display: block;
  border-color: ${props => (props.isValid ? ' #555' : 'red')};

  // border: solid 2px;
  padding: 0.5em 0.5em;
  // color: #555;
  width: 16em;
`

const StyledSelect = styled.select`
  color: ${function (props) {
    return props.isValid ? 'black' : 'red'
  }};
  font-size: 1em;
  border-radius: 0.25em;
  -webkit-appearance: none;
  width: 17em;
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
  // color: #333;
  background: #ddd;

  overflow: hidden;

  padding: 0;
  height: 100vh;
  overflow-y: none;
`
const StyledForm = styled.form`
  background: #fff;
  padding: 1em 1.25em;
  border: solid 1px #ccc;
  border-radius: 0.25em;
  margin: 2em;
`
const Label = styled.label`
  vertical-align: middle;
  width: 10em;
  display: inline-block;
  font-weight: bold;
`
const Button = styled.button`
  margin-top: 5em;
  outline: none;
  border-color: #0b77db;
  box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
  border: solid 1px transparent;
  background: #0b77db;
  color: #fff;
  font-size: 0.875em;
  padding: 0.5em 1em;
  cursor: pointer;
  :hover {
    background: #3c9aa7;
  }
  :focus {
    background: #3d6eac;
  }
`
const Styledh1 = styled.h1`
  color: #576774;
`
const Styledhr = styled.hr`
  margin: 20px 0;
  border: 1px solid;
`

export {
  Body,
  StyledForm,
  Styledh1,
  Label,
  Button,
  StyledInput,
  StyledError,
  StyledSelect,
  StyledOption,
  StyledAnimalName,
  Styledhr
}
