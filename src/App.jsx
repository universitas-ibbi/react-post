import { useState, useEffect } from "react";
import Post from "./components/Post";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [cari, setCari] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
        setFilteredPosts(data.posts);
      });
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.title.toLowerCase().includes(cari.toLowerCase())
      )
    );
  }, [cari]);

  return (
    <div className="container pt-3">
      <div className="row g-2">
        <input
          type="text"
          className="form-control"
          onChange={(event) => setCari(event.target.value)}
        />
        {filteredPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
