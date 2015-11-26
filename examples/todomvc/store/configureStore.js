import { createStore, compose } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {

  const createReduxStore = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
	
  const store = createReduxStore(createStore)(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
