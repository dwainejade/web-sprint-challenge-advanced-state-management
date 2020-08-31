import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import App from "./components/App";
import "./index.css";
import reducer from './reducers/reducer';


const store = createStore(reducer, applyMiddleware(thunk, logger))


ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
        <App />
        </React.StrictMode>
    </Provider>, 
    document.getElementById("root")
);
