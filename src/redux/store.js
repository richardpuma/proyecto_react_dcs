import { createStore, combineReducers, applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {postReducer, ProductReducer} from "./reducers"
export default createStore(
  combineReducers({postReducer, ProductReducer}),
  composeWithDevTools(applyMiddleware(thunk))
)
