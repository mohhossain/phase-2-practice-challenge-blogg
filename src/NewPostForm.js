import React, { useState } from "react";

function NewPostForm({ getNewPost }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [article, setArticle] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    const newPost = {
      title,
      author,
      article,
      isRead: false,
    };

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: {
        "content-type": "Application/json",
      },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getNewPost(data);
      });
  }

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          value={title}
        ></input>
        <input
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          placeholder="Author"
          value={author}
        ></input>
        <textarea
          onChange={(e) => setArticle(e.target.value)}
          rows="10"
          cols="60"
          placeholder="Write your post"
          value={article}
        ></textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewPostForm;
