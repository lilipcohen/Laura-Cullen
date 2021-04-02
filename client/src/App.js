import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import Press from './components/Press';
import Subscribers from './components/Subscribers';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import Firebase from './components/Firebase';
import Blogs from './pages/Blogs';
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
          <Route path="/subscribers" component={Subscribers} />
          <Route exact path={'/blogs'}>
              <Blogs />
            </Route>
        </Wrapper>
      </Router>
      <Footer />
    </div>
  ) : (
    <div id='loader'></div>
  );
}

export default App;
