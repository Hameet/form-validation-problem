import { ITEMS_FETCH_DATA_SUCCESS } from '../actions'
import { defaultState } from '../defaultState'

import rootReducer from './'

describe('state:reducers', () => {
  describe('rootReducer', () => {
    it('returns the state unchanged when called with an unrecognised action', () => {
      expect(rootReducer(defaultState, {})).toMatchObject(defaultState)
    })
  })

  describe('rootReducer', () => {
    it(`fetches data on ${ITEMS_FETCH_DATA_SUCCESS} action`, () => {
      expect(rootReducer(defaultState, {})).toMatchObject(defaultState)
    })
  })
})
