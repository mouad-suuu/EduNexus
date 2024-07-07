"use server";

import Post from "@/models/Post";

const addPost = async (post) => {
  const title = post.get("title");
  const description = post.get("description");

  const newPost = new Post({ title, description });
  return newPost.save();
};

const getPosts = async () => {
  return Post.find();
};

export { addPost, getPosts };
