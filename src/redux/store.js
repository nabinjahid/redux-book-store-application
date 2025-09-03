import { thunk } from "redux-thunk"; // use named import
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
