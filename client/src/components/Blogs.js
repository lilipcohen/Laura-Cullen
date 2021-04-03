import React, { useState, useEffect } from 'react';
import DeleteBtn from './DeleteBtn';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from './Grid';
import { List, ListItem } from './List';
import { Input, TextArea, FormBtn } from './Form';
import '../styles/Blogs.css';
import { Parallax } from 'react-parallax';
import studio from '../images/studio.png';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [formObject, setFormObject] = useState({});

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

  // Deletes a blog from the database with a given id, then reloads
  function deleteBlog(id) {
    API.deleteBlog(id)
      .then(res => loadBlogs())
      .catch(err => console.log(err));
  }

  // Handles updating components state when user types into input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When form is submitted, use the API.saveBlog method to save the blog data
  // Then reload blogs from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      API.saveBlog({
        title: formObject.title,
        author: formObject.author,
        description: formObject.description,
      })
        .then(res => loadBlogs())
        .catch(err => console.log(err));
    }
  }

  return (
    <div>
      <Parallax bgImage={studio} strength={500}>
        <div style={{ height: 400 }}>
          <div className='about'>Blogs</div>
        </div>
      </Parallax>

      <Container style={{ marginTop: 50, paddingTop: 100 }}>
        <Row>
          <Col size='md-6'>
            <h1 style={{ height: 300, paddingTop: 120, paddingBottom: 20, textAlign: "center" }}>Add a blog</h1>
            <br/>

            <form>
              <Input
                onChange={handleInputChange}
                name='title'
                placeholder='Title (required)'
              />
              <Input
                onChange={handleInputChange}
                name='author'
                placeholder='Author (required)'
              />
              <Input
                onChange={handleInputChange}
                name='src'
                placeholder='Image link (required)'
              />
              <Input
                onChange={handleInputChange}
                name='link'
                placeholder='Article link (required)'
              />
              <TextArea
                onChange={handleInputChange}
                name='description'
                placeholder='Description (required)'
              />
              
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Submit Blog
              </FormBtn>
            </form>
          </Col>
          <Col size='md-6 sm-12'>
            
            <h1 style={{ paddingTop: 120, paddingBottom: 20, textAlign: "center" }}>Blog list
            </h1>
            
            {blogs.length ? (
              <List>
                {blogs.map(blog => (
                  <ListItem key={blog._id}>
                    <Link to={'/blogs/' + blog._id}>
                      <strong>
                        {blog.title} by {blog.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBlog(blog._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Blogs;
