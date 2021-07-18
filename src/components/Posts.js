import React from "react";
import Post from "./Post";

export default ({ posts }) => {
  if (!posts.length) {
    return <p className="text-center"> You dont have posts</p>;
  }
  return posts.map((post) => <Post post={post} key={post}></Post>);
};
