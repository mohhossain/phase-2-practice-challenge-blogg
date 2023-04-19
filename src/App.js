import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      });
  }, []);

  function getNewPost(newPost) {
    setPosts([...posts, newPost]);
  }

  return (
    <div className="App">
      <Header></Header>

      <button onClick={() => setShowForm(!showForm)} className="show-form">
        {showForm ? "Hide Form" : "Show Form"}
      </button>
      {showForm ? <NewPostForm getNewPost={getNewPost}></NewPostForm> : null}

      <BlogPostContainer posts={posts}></BlogPostContainer>
    </div>
  );
}

export default App;
