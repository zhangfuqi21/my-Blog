import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import homeReducer from "./modules/home";

const store = configureStore({
  reducer: { home: homeReducer },
});
// const wrapper = createWrapper(makeStore);
export default store;
export type IAPPDispatch = typeof store.dispatch;
export type IAPPState = ReturnType<typeof store.getState>;
