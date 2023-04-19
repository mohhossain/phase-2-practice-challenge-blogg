import React, { useState } from "react";

function BlogPost({ post }) {
  const [isRead, setIsRead] = useState(post.isRead);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{post.title}</h3>
          <button
            onClick={() => {
              console.log("Unread");
              setIsRead(!isRead);
            }}
            className="read-button"
          >
            {isRead ? "Unread" : "Read"}
          </button>
          {/* Conditionally change the button text on click from Read to Unread and vice-versa */}
        </div>
        <p>Author {post.author}</p>
      </div>

      <p>{post.article}</p>
    </div>
  );
}

export default BlogPost;
