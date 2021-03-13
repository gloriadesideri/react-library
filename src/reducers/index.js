import {combineReducers} from "redux";
import searchReducer from './searchReducer'
import indexReducer from "./indexReducer";

export default combineReducers({
    books: searchReducer,
    index:indexReducer
})
