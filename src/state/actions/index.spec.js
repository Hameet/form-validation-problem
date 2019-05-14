import {
  itemsIsLoading,
  fetchPrices,
  itemsHasErrored,
  ITEMS_HAS_ERRORED,
  ITEMS_IS_LOADING,
  ITEMS_FETCH_DATA_SUCCESS
} from './'

describe('state:actions', () => {
  describe('item has errord', () => {
    it(`creates a ${ITEMS_HAS_ERRORED} action`, () => {
      expect(itemsHasErrored()).toMatchObject({
        type: ITEMS_HAS_ERRORED
      })
    })
  })

  describe('item has loaded', () => {
    it(`creates a ${ITEMS_IS_LOADING} action`, () => {
      expect(itemsIsLoading()).toMatchObject({
        type: ITEMS_IS_LOADING
      })
    })
  })

  describe('item has errord', () => {
    it(`creates a ${ITEMS_FETCH_DATA_SUCCESS} action`, () => {
      expect(fetchPrices()).toMatchObject({
        type: ITEMS_FETCH_DATA_SUCCESS
      })
    })
  })
})
