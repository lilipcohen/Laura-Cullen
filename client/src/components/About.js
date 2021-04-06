import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/About.css';
import studio from '../images/studio.png';
import creativespace from '../images/creativespace.png';
import gaslight from '../images/gaslight.JPG';
import red from '../images/red.JPG';

const About = () => {
  return (
    <div>
      <Parallax bgImage={studio} strength={500}>
        <div style={{ height: 800 }}>
          <div className="about">About</div>
        </div>
      </Parallax>
      <Container>
        <Row className="aboutme">
          <Col lg={4}>
            <div className="name">
              Laura Cullen
              <hr></hr>
            </div>
          </Col>
          

          <Col lg={8}>
            <div className="about-desc">
              <p>
                Laura Cullen is a California-based contemporary artist residing
                in the vibrant art hub of Palm Desert. Her mixed medium works of
                abstract florals and dreamlike imagery are inspired by her own
                desire to overcome life’s inevitable, yet existential
                provocations. Her ethereal creations surprise each viewer with
                the evocative question: What if we unbridled ourselves in a
                space of adversity, and instead gave those yearnings a sanctuary
                of beauty and purpose?{' '}
              </p>

              <p>
                A self-taught painter, Laura has quickly gained recognition for
                her unique take on life’s obstacles, as well as her technical
                innovation in her use of mixed media. In 2017, American Art
                Collectors David Gersh and Robert Gersh acquired Laura Cullen’s
                works. In the same year, she became a member of the Los Angeles
                Art Association. By 2019, Laura gained status as an
                international artist when her work was featured in Tokyo’s 19th
                International Art Exchange at The National Art Center. There,
                Laura received the Gold Award of Excellence. Additionally, she
                is part of the International Artist Association as an IAA/USA
                member. Today, Laura continues to push her artistic boundaries
                with the purest expression of love.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Parallax bgImage={creativespace} strength={500}>
        <div style={{ height: 800 }}>
          <div className="poem">Poem</div>
        </div>
      </Parallax>

      <Container>
      <div className="poempage">
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>

        <img src={gaslight} alt="gaslight" className="gaslight" />
        <img src={red} alt="red" className="red" />
      </div>
      </Container>

      <div className="before-footer" style={{ height: '25vh' }}></div>
    </div>
  );
};

export default About;
