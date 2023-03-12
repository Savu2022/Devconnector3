import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducers";
const initialState = {};
const middleware = [thunk];
const store = createStore(rootReducers,
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware))
);

//root reducer : index.js from reducer folder will hold the details about our all reducers

//app initial state :{}
//middleware / thunk : 

// createStore : it is  the method that help us to create the store for our react redux application.

export default store;
