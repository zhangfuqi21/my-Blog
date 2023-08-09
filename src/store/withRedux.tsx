"use client";
import { Provider } from "react-redux";

/* Instruments */
import store from "@/store/index";

export const WithRedux = (props: React.PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
