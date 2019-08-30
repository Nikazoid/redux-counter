import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../action";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      {counter > 0 ? (
        <h4>Positive</h4>
      ) : counter < 0 ? (
        <h4>Negative</h4>
      ) : (
        <h4>Neutral</h4>
      )}
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrement(10));
        }}
      >
        -
      </button>
      {isLogged ? <h3>Secured Information</h3> : ""}
    </div>
  );
}

export default App;
