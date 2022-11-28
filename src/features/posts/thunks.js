import axios from "axios";
import { addPost, setPosts, removePost } from "./postSlice";

// const API = 'http://192.168.1.136:3000';
const API = "http://localhost:3000";

export const getPosts = () => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(`${API}/posts`);

    dispatch(setPosts(data));
  };
};

export const createPost = (post) => {
  return async (dispatch, getState) => {
    const { data } = await axios.post(`${API}/posts`, post);

    dispatch(addPost(data));
  };
};

export const deletePost = (id) => {
  return async (dispatch, getState) => {
    const { data } = await axios.delete(`${API}/posts/${id}`);

    dispatch(removePost(data));
  };
};
