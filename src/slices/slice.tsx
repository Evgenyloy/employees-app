import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const slice = createSlice({
  name: "emploees",
  initialState,
  reducers: {
    bal: () => {},
  },
});

const { reducer, actions } = slice;
export default reducer;
