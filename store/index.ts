import { Context, createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, compose, createStore, Store } from 'redux'
import { reducer, RootState } from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// create a makeStore function
const makeStore = (context: Context) =>
  createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export type AppStore = ReturnType<typeof makeStore>
// export an assembled wrapper
export const wrapper = createWrapper<Store<RootState>>(makeStore, { debug: true })
