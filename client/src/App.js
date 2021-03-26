import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/Nav';
import LoginModal from './components/LoginModal';
// import ModalButton from './components/ModalButton';

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Router>
        <div>
          <Nav />
        </div>
      </Router>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <LoginModal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
