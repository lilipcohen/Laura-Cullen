import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Home from './components/Home';
import About from './components/About';
import Press from './components/Press';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Firebase from './components/Firebase';

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    Firebase.isInitialized().then((val) => {
      setFirebaseInitialized(val);
    });
  });
  return firebaseInitialized !== false ? (
    <div>
      <Router>
        <Wrapper>
          <Nav />
          <Route exact path={['/', '/home']} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/press" component={Press} />
        </Wrapper>
      </Router>
      <Footer />
    </div>
  ) : (
    <div id="loader"></div>
  );
}

export default App;
