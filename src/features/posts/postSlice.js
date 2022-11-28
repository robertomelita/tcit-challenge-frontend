import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: [],
    exposedPosts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.allPosts = action.payload;
      state.exposedPosts = action.payload;
    },
    addPost: (state, action) => {
      state.exposedPosts.push(action.payload);
    },
    removePost: (state, action) => {
      const postFound = state.exposedPosts.find(
        (post) => post.id === action.payload.id
      );
      if (postFound)
        state.exposedPosts.splice(state.exposedPosts.indexOf(postFound), 1);
    },
    filterPosts: (state, action) => {
      const postsFiltered = state.allPosts.filter((post) =>
        post.name.includes(action.payload)
      );
      state.exposedPosts = postsFiltered;
    },
  },
});
export const { setPosts, addPost, removePost, filterPosts } = postSlice.actions;

export default postSlice.reducer;
