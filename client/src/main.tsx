import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { Provider } from "react-redux";
import store from "./store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer autoClose={1500} />
      <App />
    </Provider>
  </React.StrictMode>
);
