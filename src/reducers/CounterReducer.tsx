export type CounterState = {
  count: number;
};

type Action = { type: "INCREMENT" } | { type: "DECREMENT" };

export function counterReducer(state: CounterState, action: Action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    default:
      return state;
  }
}
