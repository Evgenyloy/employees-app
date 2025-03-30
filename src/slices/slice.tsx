import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  tabs: "Все",
  input: "",
  popUpIsOpen: false,
  popUpFilter: "",
};

const slice = createSlice({
  name: "emploees",
  initialState,
  reducers: {
    setTab: (state, action: PayloadAction<string>) => {
      state.tabs = action.payload;
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    setPopUpIsOpen: (state, actions: PayloadAction<boolean>) => {
      state.popUpIsOpen = actions.payload;
    },
    setPopUpFilter: (state, action: PayloadAction<string>) => {
      state.popUpFilter = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const { setTab, setInput, setPopUpIsOpen, setPopUpFilter } = actions;
export default reducer;
