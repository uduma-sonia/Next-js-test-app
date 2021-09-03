import React from "react";
import App from "next/app";
import "../styles/globals.css";
import "../styles/index.css";

import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    );
  }
}

const makestore = () => store;
export const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
