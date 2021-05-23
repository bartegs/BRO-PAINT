import "../index.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";

function Temp(): JSX.Element {
  return <div className="black-text">Temp</div>;
}

ReactDOM.render(<Temp />, document.querySelector("#root"));
