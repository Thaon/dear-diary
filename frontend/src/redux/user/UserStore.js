import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";

export const userStore = configureStore({
  reducer: { user: UserReducer },
});
