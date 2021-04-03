import React, { useState, useEffect } from "react";
import "./style.css";
import API from "../../utils/API";

function PressCard({ link, src, title, date, description, author }) {

  return (

    <div className='card'>
          <div class='blurring dimmable image'>
            <div class='ui dimmer'>
              <div class='content'>
                <div class='center'>
                  <a href={link} class='ui button'>See Article</a>
                </div>
              </div>
            </div>
            <img src={src} alt='article cover photo' />
          </div>

          <div className='content'>
            <a className="header">{title} by {author}</a> 
            <div className='meta'>
              <span className='date'>{date}</span>
            </div>
            <div className='description'>
              {description}
            </div>
            <a className='ui button' href={link}>See Article</a>
          </div>
        </div>

  );
}

export default PressCard;