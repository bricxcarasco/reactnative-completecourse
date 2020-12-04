const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999).toString(),
          title: `Blog Post ${state.length + 1}`,
        },
      ];
    case "EDIT_BLOGPOST":
      return [...state, { title: action.payload }];
    case "DELETE_BLOGPOST":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
