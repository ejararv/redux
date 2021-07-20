import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import { appReducer } from "../redux/appReducer";
import Post from "./Post";
import { Spinner } from "react-bootstrap";


export default () => {

  const dispatch = useDispatch()
  const posts = useSelector(state => state.posts.fetchedPosts )
  const loading = useSelector(state => state.app.loading)

  if (loading) {
    return <Spinner animation="grow" />
  }

  if (!posts.length ) {
    return <button
    onClick={() => dispatch(fetchPosts())}
    className="btn">Add</button>;
  }
  return posts.map((post) => <Post post={post} key={post.id}></Post>);
};
