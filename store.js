import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./slices/navSlice";

export default configureStore({
  reducer: {
    nav: navReducer,
  },
});
