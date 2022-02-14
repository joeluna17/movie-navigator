import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { CounterReducer } from './features/counter'
import  { MovieReducer } from './features/movies'
import thunk from 'redux-thunk';

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  count: CounterReducer,
  movies: MovieReducer
})

const middleware = [thunk];

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(...middleware))
)

export default store
