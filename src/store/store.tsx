import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import employees from '../slices/slice'

export const store = configureStore({
  reducer: {employees,[apiSlice.reducerPath]: apiSlice.reducer},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
