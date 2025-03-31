import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployee } from "../types/types";

interface EmployeesState {
  tabs: string;
  input: string;
  popUpIsOpen: boolean;
  popUpSort: string;
  employeeProfile: IEmployee | null; // Явно указываем тип
}

const initialState: EmployeesState = {
  tabs: "Все",
  input: "",
  popUpIsOpen: false,
  popUpSort: "",
  employeeProfile: null,
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
    setPopUpSort: (state, action: PayloadAction<string>) => {
      state.popUpSort = action.payload;
    },
    setEmployeeProfile: (state, action: PayloadAction<IEmployee>) => {
      state.employeeProfile = action.payload;
    },
  },
});

const { reducer, actions } = slice;
export const {
  setTab,
  setInput,
  setPopUpIsOpen,
  setPopUpSort,
  setEmployeeProfile,
} = actions;
export default reducer;
