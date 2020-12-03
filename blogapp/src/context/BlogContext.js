import createDataContext from "./createDataContext";

import blogReducer from "../reducers/blogReducer";

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({
      type: "ADD_BLOGPOST",
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost },
  []
);
