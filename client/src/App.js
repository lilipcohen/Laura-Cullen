import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import About from "./components/About";

function App() {
return (
  <Router>
    <div>
      {/* <Nav /> */}
      <About />
    </div>
  </Router>
)

}
  

export default App;
