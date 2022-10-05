import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({ blogPosts }) {
  return (
    <div className="blog-container">
      {blogPosts.map((post) => {
        return <BlogPost key={post.id} post={post}></BlogPost>;
      })}
    </div>
  );
}

export default BlogPostContainer;
