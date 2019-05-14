import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import { rootReducer } from '../reducer'

function configureStore () {
  return createStore(rootReducer, devToolsEnhancer())
}

export { configureStore }
