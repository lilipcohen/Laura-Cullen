import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Press from './pages/Press';
import Subscribers from './components/Subscribers';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import Firebase from './components/Firebase';
import Blogs from './components/Blogs';
// import Detail from './pages/Detail';
// import NoMatch from './pages/NoMatch';

function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false);
  useEffect(() => {
    Firebase.isInitialized().then(val => {
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
          <Route path="/gallery" component={Gallery} />
          <Route path="/press" component={Press} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/subscribers" component={Subscribers} />
        </Wrapper>
      </Router>
      <Footer />
    </div>
  ) : (
    <div id='loader'></div>
  );
}

export default App;
