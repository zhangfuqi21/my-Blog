import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    site: {},
    blogs: {},
  },
  reducers: {
    setSite(state, { payload }) {
      state.site = payload;
    },
    setBlogs(state, { payload }) {
      state.blogs = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.home,
      };
    });
  },
});
export const { setSite, setBlogs } = homeSlice.actions;
export default homeSlice.reducer;
