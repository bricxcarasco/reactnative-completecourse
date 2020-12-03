import React, { useState } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };

  const data = {
    blogPosts,
    addBlogPost,
  };

  return <BlogContext.Provider value={data}>{children}</BlogContext.Provider>;
};

export default BlogContext;
