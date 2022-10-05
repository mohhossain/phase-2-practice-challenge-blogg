import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {
  const [isFormButtonClicked, setIsFormButtonClicked] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((blogposts) => setBlogPosts(blogposts));
  }, []);

  const addNewPost = (newPost) => {
    setBlogPosts([...blogPosts, newPost]);
  };

  const handleClick = () => {
    setIsFormButtonClicked(!isFormButtonClicked);
  };
  return (
    <div className="App">
      <Header></Header>

      <button onClick={handleClick} className="show-form">
        Show Form
      </button>
      {isFormButtonClicked ? (
        <NewPostForm addNewPost={addNewPost}></NewPostForm>
      ) : null}

      <BlogPostContainer blogPosts={blogPosts}></BlogPostContainer>
    </div>
  );
}

export default App;
