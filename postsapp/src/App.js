import "./App.css";
import { useState } from "react";
import axios from "axios";
import Post from "./Components/Post";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [btn, setBtn] = useState(true);

  const handlePosts = async () => {
    if (btn) {
      try {
        setLoading(false);
        let res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(res.data);
        setData(res.data);
        setLoading(true);
      } catch (e) {
        console.log(e);
      }
    } else {
      setData([]);
    }
    setBtn(!btn);
  };
  if (!loading) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div className="App" data-testid="app">
      {btn ? (
        <button onClick={() => handlePosts()}>GET POSTS</button>
      ) : (
        <button onClick={() => handlePosts()}>DELETE POSTS</button>
      )}
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {data.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </div>
  );
}

export default App;
