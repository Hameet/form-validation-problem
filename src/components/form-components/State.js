export const initialState = {
  email: {
    value: '',
    valid: true
  },
  password: {
    value: '',
    valid: true
  },
  colors: {
    value: ['Select Color', 'Violet', 'Red', 'Yellow', 'Black'],
    valid: true
  },
  animals: {
    value: [
      {
        name: 'Bear',
        checked: false
      },
      { name: 'Sam', checked: false },
      { name: 'Snake', checked: false },
      { name: 'Tiger', checked: false }
    ],
    valid: true
  },
  tigerName: {
    value: '',
    valid: true
  },
  Formvalid: {
    valid: true
  }
}
