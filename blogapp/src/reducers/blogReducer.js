const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [...state, { title: `Blog Post ${state.length + 1}` }];
    case "EDIT_BLOGPOST":
      return [...state, { title: action.payload }];
    case "DELETE_BLOGPOST":
      return [...state, { title: action.payload }];
    default:
      return state;
  }
};

export default reducer;
