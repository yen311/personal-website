import { configureStore } from "@reduxjs/toolkit";
import skillSlice from "./skillSlice";

const store = configureStore({
  reducer: { skill: skillSlice.reducer },
});

export default store;
