import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <About />
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
