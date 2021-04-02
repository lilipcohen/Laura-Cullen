import React, { useState, useEffect } from 'react';
import DeleteBtn from '../components/DeleteBtn';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { List, ListItem } from '../components/List';
import { Input, TextArea, FormBtn } from '../components/Form';

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
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  };

  // Deletes a blog from teh database with a given id, then reloads
  function deleteBlog(id) {
      API.deleteBlog(id)
      .then(res => loadBlogs())
      .catch(err => console.log(err));
  }

  // Handles updating components state when user types into input field
  function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
  };

  // When form is submitted, use the API.saveBlog method to save the blog data
  // Then reload blogs from the database
  function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.title && formObject.author) {
          API.saveBlog({
              title: formObject.title,
              author: formObject.author,
              description: formObject.description
          })
          .then(res => loadBlogs())
          .catch(err => console.log(err));
      }
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Press</h1>
          </Jumbotron>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              placeholder="Title (required)"
            />
            <Input
              onChange={handleInputChange}
              name="author"
              placeholder="Author (required)"
            />
            <TextArea
              onChange={handleInputChange}
              name="description"
              placeholder="Description (Optional)"
            />
            <FormBtn
              disabled={!(formObject.author && formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Blog
            </FormBtn>
          </form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Blog list</h1>
          </Jumbotron>
          {blogs.length ? (
            <List>
              {blogs.map(blog => (
                <ListItem key={blog._id}>
                  <Link to={"/blogs/" + blog._id}>
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
  );
}


export default Blogs;
