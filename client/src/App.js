import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from "./components/Wrapper";
import Nav from './components/Nav';
import Home from './components/Home';
import About from "./components/About";
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
        <Wrapper>
          <Nav />
         <Route exact path={["/", "/home"]} component={Home} />
         <Route path="/about" component={About} />
        </Wrapper>
      </Router>
      <button onClick={() => setShow(true)}>Open Modal</button>
      <LoginModal onClose={() => setShow(false)} show={show} />
    </div>
  );
}

export default App;
