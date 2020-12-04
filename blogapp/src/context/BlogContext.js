import createDataContext from "./createDataContext";
import blogReducer from "../reducers/blogReducer";

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({
      type: "ADD_BLOGPOST",
    });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({
      type: "DELETE_BLOGPOST",
      payload: id,
    });
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
