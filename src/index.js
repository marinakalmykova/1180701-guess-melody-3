import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  ERRORS_COUNT: 10
};

ReactDOM.render(
    <App
      errorsCount={Settings.ERRORS_COUNT}
    />,
    document.querySelector(`#root`)
);
