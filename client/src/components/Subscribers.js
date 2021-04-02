import React, { useEffect, useState } from 'react';
import APIEmail from '../utils/APIEmail';

const Subscribers = () => {
  const [emails, setEmails] = useState([]);

  // Load all emails and store them with setEmails
  useEffect(() => {
    loadEmails();
  }, []);

  function loadEmails() {
    APIEmail.getEmails()
      .then((res) => setEmails(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h1>Newsletter</h1>
      {emails.length ? (
        <ul>
          {emails.map((email) => {
            return <li key={email._id}>{email.email}</li>;
          })}
        </ul>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  );
};

export default Subscribers;
