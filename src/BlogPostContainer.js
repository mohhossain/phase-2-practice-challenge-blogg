import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({ posts }) {
  const postsToRender = posts.map((post) => {
    // pass the post as a prop and a key
    return <BlogPost post={post} key={post.title}></BlogPost>;
  });
  return <div className="blog-container">{postsToRender}</div>;
}

export default BlogPostContainer;
