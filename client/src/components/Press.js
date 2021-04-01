import React from 'react';
import { Parallax } from 'react-parallax';
import { Container, Col, Row } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import faker from 'faker';
import studio from '../images/studio.png';
import '../styles/Press.css';

const Press = () => {
  return (
    <div>
      <Parallax bgImage={studio} strength={500}>
        <div style={{ height: 700 }}>
          <div className='about'>Press</div>
        </div>
      </Parallax>

      <div className='ui special cards container blog'>
        <div className='card'>
          <div class='blurring dimmable image'>
            <div class='ui dimmer'>
              <div class='content'>
                <div class='center'>
                  <button class='ui button'>See Article</button>
                </div>
              </div>
            </div>
            <img src={faker.image.nature()} alt='article cover photo' />
          </div>
          
          <div className='content'>
          <a className="header">People Mag</a>
            <div className='meta'>
              <span className='date'>Written on June 2020</span>
            </div>
            <div className='description'>
              Laura is the best artist in all the land.
            </div>
            <button className='ui button'>Full Article</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Press;
