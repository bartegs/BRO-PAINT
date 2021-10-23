import * as React from "react";
import * as ReactDOM from "react-dom";

import "./scss/index.scss";

import App from "./react/App";
import { LoginContextProvider } from "./react/contexts";

ReactDOM.render(
  <LoginContextProvider>
    <App />
  </LoginContextProvider>,

  document.querySelector("#root")
);
