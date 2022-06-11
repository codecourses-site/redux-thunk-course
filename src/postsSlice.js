import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./postsThunk";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default postsSlice.reducer;
