const reducer = (state, action) => {
  switch (action.type) {
    case "increase_counter":
      return { ...state, count: state.count + action.payload };
    case "decrease_counter":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default reducer;
