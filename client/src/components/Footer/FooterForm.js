import react, { useEffect, useState } from 'react';
import APIEmail from '../../utils/APIEmail';

const FooterForm = (props) => {
  const [formObject, setFormObject] = useState({});
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    loadEmails();
  }, []);

  function loadEmails() {
    APIEmail.getEmails()
      .then((res) => setEmails(res.data))
      .catch((err) => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.email) {
      APIEmail.saveEmails({
        email: formObject.email,
      })
        .then((res) => (window.location.href = '/home'))
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="col-md-6 item text">
      <h3>Subscribe</h3>
      <form className="footer-dark">
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleInputChange}
        />
        <br></br>
        <input
          disabled={!formObject.email}
          onClick={handleFormSubmit}
          className="submit"
          type="submit"
          value="Stay Updated"
        />
      </form>
    </div>
  );
};

export default FooterForm;
