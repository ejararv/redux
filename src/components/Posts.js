import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center"> You dont have posts</p>;
  }
  return syncPosts.map((post) => <Post post={post} key={post.id}></Post>);
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(Posts);
//High level function connect (it will return Posts component with other functions)
