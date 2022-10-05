import React, { useState } from "react";

function BlogPost({ post }) {
  //we create a state to hold true/false value
  const [isRead, setIsRead] = useState(true);
  const [data, setData] = useState(post);

  const handleClick = () => {
    //on button click we change the state from true -> false or false -> true
    setIsRead(!isRead);

    fetch(`http://localhost:3000/blogs/${post.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        isRead: isRead,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  };
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{post.title}</h3>
          <button onClick={handleClick} className="read-button">
            {/* based on the true/false value of our state we will render read or unread.  */}
            {/* If the value is true we render unread, if the value is false we render read. */}
            {data.isRead ? "Unread" : "Read"}
          </button>
          {/* Conditionally change the button text on click from Read to Unread and vice-versa */}
        </div>
        <p> {post.author}</p>
      </div>

      <p>{post.article}</p>
    </div>
  );
}

export default BlogPost;
