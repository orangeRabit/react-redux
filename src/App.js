import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

const NestedChild = () => {
    const counter = useSelector((state) => {
        return state.counter.value
    })
    const dispatch = useDispatch()

    return (
        <header className="App-header">
            <h1>{counter}</h1>
            <button onClick={() => {
                console.log(counter);
                dispatch({type: 'INC'})
            }
            }>INC
            </button>

            <button onClick={() => {
                console.log(counter);
                dispatch({type: 'DEC'})
            }
            }>DEC
            </button>

            <button onClick={() => {

                dispatch({type: 'RES'})
            }
            }>RESSET
            </button>
            <hr/>
            <input id='customNum' type="text"/>
            <button onClick={() => {
                console.log(counter);
                dispatch({
                    type: 'CUSTOM_INC',
                    payload: parseInt(document.getElementById('customNum').value)
                })
            }
            }>CUSTOM INC
            </button>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    )
}

function App() {
    return (
        <div className="App">
            <NestedChild/>
        </div>
    );
}

export default App;
