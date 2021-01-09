import React from "react";
import { render } from "react-dom";
import reducer, { initialState } from "./reducer";
import { StateProvider } from "./StateProvider";
import App from "./App";

render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
