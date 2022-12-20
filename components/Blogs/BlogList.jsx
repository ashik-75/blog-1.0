import React from "react";
import Blog from "./Blog";

function BlogList() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((blog) => (
        <Blog key={blog} blog={blog} />
      ))}
    </div>
  );
}

export default BlogList;
