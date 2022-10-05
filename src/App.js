import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import { useEffect, useState } from "react";

function App() {
  const [isFormButtonClicked, setIsFormButtonClicked] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/blogs")
      .then((res) => res.json())
      .then((blogposts) => setBlogPosts(blogposts));
  }, []);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  const addNewPost = (newPost) => {
    setBlogPosts([...blogPosts, newPost]);
  };

  const handleClick = () => {
    setIsFormButtonClicked(!isFormButtonClicked);
  };

  const filteredPosts = blogPosts.filter((post) => {
    return (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.author.toLowerCase().includes(search.toLowerCase()) ||
      post.article.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <div className="App">
      <Header onChange={onSearchChange}></Header>

      <button onClick={handleClick} className="show-form">
        Show Form
      </button>
      {isFormButtonClicked ? (
        <NewPostForm addNewPost={addNewPost}></NewPostForm>
      ) : null}

      <BlogPostContainer blogPosts={filteredPosts}></BlogPostContainer>
    </div>
  );
}

export default App;
