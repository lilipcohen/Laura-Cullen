import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { List, ListItem } from './List';
import faker from 'faker';
import studio from '../images/studio.png';
import '../styles/Press.css';
import PressCard from '../components/PressCard'

const Press = () => {
  const [blogs, setBlogs] = useState([]);

  // Load all blogs and store them with setBlogs
  useEffect(() => {
    loadBlogs();
  }, []);

  // Loads all blogs and sets them to blogs
  function loadBlogs() {
    API.getBlogs()
      .then(res => {
        setBlogs(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <Parallax bgImage={studio} strength={500}>
        <div style={{ height: 400 }}>
          <div className='about'>Press</div>
        </div>
      </Parallax>

    
      {blogs.length ? (
        <div className='ui special cards container blog'>
                {blogs.map(blog => (
                 
                    <PressCard 
                     link={blog.link}
                      src={blog.src}
                      date={blog.date}
                      description={blog.description}
                      title={blog.title}
                      author={blog.author}
                    />
                ))}
              </div>
            ) : (
              <h3>No Results to Display</h3>
            )}
    </div>
  );
};

export default Press;
