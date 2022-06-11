import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postsThunk";

const Posts = () => {
  const posts = useSelector((state) => state.posts.data);

  const dispatch = useDispatch();

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = () => {
    dispatch(fetchPosts());
  };

  return (
    <div className="posts__container">
      <h1 className="posts__app-title">
        How to Learn Redux Toolkit [DETAIL COURSE] - Code Courses
      </h1>
      {posts?.map((post) => (
        <div key={post.id} className="posts__item">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
