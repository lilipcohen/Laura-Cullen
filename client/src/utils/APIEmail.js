import axios from 'axios';

export default {
  // Gets all emails
  getEmails: function () {
    return axios.get('/api/subscribers');
  },
  // Gets the emails with the given id
  getEmailsId: function (id) {
    return axios.get('/api/subscribers/' + id);
  },
  // Deletes the emails with the given id
  deleteEmails: function (id) {
    return axios.delete('/api/subscribers/' + id);
  },
  // Saves a emails to the database
  saveEmails: function (emailData) {
    return axios.post('/api/subscribers', emailData);
  },
};
