import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { store } from "./redux";
const container = document.getElementById("root")!;
const root = createRoot(container);
localStorage.setItem("theme", "light");

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
