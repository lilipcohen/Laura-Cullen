import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Col, Row } from 'react-bootstrap';
import '../styles/Home.css';
import artstudio from '../images/artstudio.png';
import artspace from '../images/artspace.png';
import gaslight from '../images/gaslight.JPG';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';

const Home = () => {
  return (
    <div>
      <Parallax bgImage={artstudio} strength={500}>
        <div style={{ height: 800 }}>
          <div className="title">Laura Cullen</div>
        </div>
      </Parallax>

      <div className="summary">
        <h1>
          Laura Cullen has long combined abstract florals and dreamlike imagery,
          inspired by one of life's powerfully evocative question:
        </h1>
        <h2>
          What if we unbridled ourselves in a space of adversity, and instead
          gave those yearnings a sanctuary of beauty and purpose?
        </h2>
        <div className="icon">♦︎</div>
      </div>

      <Parallax bgImage={gaslight} strength={500}>
        <div style={{ height: 800 }}>
          <div className="title">Recent Work</div>
        </div>
      </Parallax>

      <Container className="recent-work">
        <Row>
          <Col xs={4}>
            <div className="recent">
              <h2>Gaslight</h2>
            </div>
          </Col>

          <Col xs={8}>
            <hr></hr>
          </Col>

          <Col xs={4} />
          <Col xs={8}>
            <div className="recent-desc">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Duis aute
                <br></br>irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non
              </p>
            </div>
            <button>View</button>
          </Col>
        </Row>
      </Container>

      <Parallax bgImage={artspace} strength={500}>
        <div style={{ height: 800 }}>
          <div className="upcoming">
            Upcoming Exhibitions, Publications and Announcements
          </div>
        </div>
      </Parallax>

      <Container>
        <Row>
          <Col>
            <img src={img1} alt="img1" />
            <h3>Gaslight</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Col>
          <Col>
            <img src={img2} alt="img2" />
            <h3>Tokyo's 19th International Art Exchange</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Col>
          <Col>
            <img src={img3} alt="img3" />
            <h3>Gold Award of Excellence</h3>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
