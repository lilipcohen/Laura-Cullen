import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
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
