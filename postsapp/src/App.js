import "./App.css";
function App() {
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
      </div>
    </div>
  );
}

export default App;
