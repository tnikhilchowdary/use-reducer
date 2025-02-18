import React, {useReducer} from "react";
import './App.css';

const intialState = 0;

const reducer = (state, action) => {
  switch(action.type){
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return intialState
    default:
      return state;
  }
}

function App() {
      const [count, dispatch] = useReducer(reducer, intialState);
  return (
    <div className="App">
      <h2>Count :{count}</h2>
      <button onClick={() => dispatch({type: "increment"})}>+</button>
      <button onClick={() => dispatch({type: "decrement"})}>-</button>
      <button onClick={() => dispatch({type: "reset"})}>0</button>
      

    </div>
  );
}

export default App;
