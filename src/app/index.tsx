import React from "react";
import ReactDOM from "react-dom";

import { MyThemeProvider } from "ui-kit";

import { App } from "./App";

ReactDOM.render(
    <MyThemeProvider>
        <App />
    </MyThemeProvider>,
    document.getElementById("root")
);
