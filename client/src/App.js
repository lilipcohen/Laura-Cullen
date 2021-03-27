<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Nav from "./components/Nav";
import About from "./components/About";
=======
import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LoginModal from './components/LoginModal';
// import ModalButton from './components/ModalButton';
>>>>>>> main

function App() {
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setShow({
      ...show,
      [name]: value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
<<<<<<< HEAD
      {/* <Nav /> */}
      <About />
=======
      <Router>
        <div>
          <Nav />
        </div>
      </Router>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <LoginModal onClose={() => setShow(false)} show={show} />
>>>>>>> main
    </div>
  );
}

export default App;
