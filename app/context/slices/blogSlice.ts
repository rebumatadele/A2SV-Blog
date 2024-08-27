import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyBlogElement } from "@/types/blog-control.interface";

// Define the initial state type
interface BlogState {
  blogs: MyBlogElement[]; // Change to an array of MyBlogElement
}

// Define the initial state with the appropriate type
const initialState: BlogState = {
  blogs: [], // Initialize with an empty array of MyBlogElement
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    // Set blog data
    setBlogs(state, action: PayloadAction<MyBlogElement[]>) {
      state.blogs = action.payload; // Directly set the blogs state to the payload
      console.log("it is stored: ", action.payload); // Log the data array
    },
  },
});

export const blogActions = blogSlice.actions;
export default blogSlice; // Ensure to export the reducer
