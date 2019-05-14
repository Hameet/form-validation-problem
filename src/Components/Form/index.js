import React from 'react'

import { FormBody, Label, InputEmail } from '../Styled'

var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/

const test = function (email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

const Form = () => {
  return (
    <div>
      <FormBody method='post' action=''>
        <h1>Fill out this awesome FormBody</h1>
        <div>
          <h3>Your details</h3>
          <p>
            <Label>Email</Label>
            <InputEmail test={test} type='text' id='email' name='email' />
          </p>
          <p>
            <label class='label' for='password'>
              Password
            </label>
            <input
              class='error'
              type='password'
              id='password'
              name='username'
            />
          </p>
        </div>

        <div>
          <h3>Your animal</h3>
          <p>
            <label class='label' for='colour'>
              Colour
            </label>
            <select name='colour' id='colour'>
              <option value=''>Choose colour</option>
              <option value='blue'>Blue</option>
              <option value='green'>Green</option>
              <option value='red'>Red</option>
              <option value='black'>Black</option>
              <option value='brown'>Brown</option>
            </select>
          </p>
          <p>
            <span class='label'>Animal</span>

            <input type='checkbox' name='animal' value='bear' id='bear' />
            <label for='bear'>Bear</label>

            <input type='checkbox' name='animal' value='tiger' id='tiger' />
            <label for='tiger'>Tiger</label>

            <input type='checkbox' name='animal' value='snake' id='snake' />
            <label for='snake'>Snake</label>

            <input type='checkbox' name='animal' value='donkey' id='donkey' />
            <label for='donkey'>Donkey</label>
          </p>
          <p>
            <label class='label' for='tiger_type'>
              Type of tiger
            </label>
            <input type='text' name='tiger_type' id='tiger_type' />
          </p>
        </div>
        <div>
          <p>
            <input type='submit' value='Create account' />
          </p>
        </div>
      </FormBody>
    </div>
  )
}

export default Form
