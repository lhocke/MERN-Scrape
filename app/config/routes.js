// Inclue the React library
var React = require("react");
// const App = require("../App")

// Include the react-router module
// import router from "react-router-dom";

// Include the Route component for displaying individual routes
import {Route} from "react-router-dom";

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
// var BrowserRouter = router.BrowserRouter;
import {BrowserRouter} from "react-router-dom";

// Reference the high-level components
import Main from "../components/Main";

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <BrowserRouter>

    <Main />

  </BrowserRouter>
);
