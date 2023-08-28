import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// import { App } from "./V2/App";
// import { App } from "./V3/App";
// import { AppV2 } from "./V2/AppV2";
// import { AppV2 } from "./V4/AppV2";
// import { App } from "./V5Routing/App";
// import { App } from "./V6/App";
import { App } from "./V7_Authentication/App";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
