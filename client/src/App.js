import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import LoginModal from './components/LoginModal';
// import ModalButton from './components/ModalButton';

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
      <Router>
        <div>
          <Nav />
          <About />
        </div>
      </Router>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <LoginModal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
