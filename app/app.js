import React from "react";
import {render} from "react-dom";
import Main from "./components/Main";
// var Routes = require("./config/routes")
import {BrowserRouter} from "react-router-dom"

render(
  (<BrowserRouter>
    <Main/>
    </BrowserRouter>
  ), document.getElementById("app"));