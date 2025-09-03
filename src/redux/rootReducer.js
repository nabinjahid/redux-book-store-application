import {combineReducers} from "redux"
import bookReducer from "./books/booksReducer"
import filterReducer from './filter/filterReducer'


const rootReducer = combineReducers({
    bookReducer : bookReducer,
    filter : filterReducer
})
export default rootReducer