import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialSate = {
    counter: {
        value: 0
    },
    users: [],
    posts: [],
    comments: []
}

const reducer = (state = initialSate, action) => {

    switch (action.type) {
        case 'INC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + 1
                }
            }
        }
        case 'DEC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value - 1
                }
            }
        }

        case 'RES': {
            return {
                ...state,
                counter: {
                    value: state.counter.value = 0
                }
            }
        }
        case 'CUSTOM_INC': {
            return {
                ...state,
                counter: {
                    value: state.counter.value + action.payload
                }
            }
        }

        case 'USERS_LIST': {
            return {
                ...state,
                users: action.payload

            }
        }
        case 'POSTS_LIST': {
            return {
                ...state,
                posts: action.payload

            }
        }
        case 'COMMENTS_LIST': {
            return {
                ...state,
                comments: action.payload

            }
        }
        default:
            return state
    }
}

const store = createStore(reducer)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
