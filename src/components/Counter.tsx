import { useReducer } from "react";

import { counterReducer, type CounterState } from "../reducers/CounterReducer";

const initialState: CounterState = {
  count: 0,
};

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <p>{state.count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
export default Counter;
