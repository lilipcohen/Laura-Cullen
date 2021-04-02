const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lauracullen');

const emailSeed = [
  {
    email: 'hotstuff69@hotmail.com',
    date: new Date(Date.now()),
  },
  {
    email: 'pantydropepr69@hotmail.com',
    date: new Date(Date.now()),
  },
];

db.Email.remove({})
  .then(() => db.Email.collection.insertMany(emailSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
