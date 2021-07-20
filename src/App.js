import "./App.css";
import FetchPost from "./components/FetchPost";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <PostForm></PostForm>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h3>Posts</h3>
          <Posts ></Posts>
        </div>
        <div className="col">
          <h3>Async Posts</h3>
          <FetchPost ></FetchPost>
        </div>
      </div>
    </div>
  );
}

export default App;
