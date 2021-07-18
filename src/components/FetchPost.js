import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.length) {
    return <button className="btn">Add</button>;
  }
  return posts.map((post) => <Post post={post} key={post}></Post>);
};
