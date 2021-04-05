const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Blogs collection and inserts the blogs below

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/lauracullen');

const blogSeed = [
  {
    title: 'The Dead Zone',
    author: 'Stephen King',
    description:
      'A number-one national best seller about a man who wakes up from a five-year coma able to see people\'s futures and the terrible fate awaiting mankind in The Dead Zone - a "compulsive page-turner" (The Atlanta Journal-Constitution). ',
    date: new Date(Date.now()),
    src: 'https://www.carmelcalifornia.com/webart/listings/168.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    description:
      'The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.',
    date: new Date(Date.now()),
    src: 'https://0merchant.com/wp-content/uploads/2018/industry/art-dealers-and-art-gallery-merchant-account.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults",
    date: new Date(Date.now()),
    src: 'https://www.carmelcalifornia.com/webart/listings/203.jpg'
  },
  {
    title: 'The Punch Escrow',
    author: 'Tal M. Klein',
    description:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. ",
    date: new Date(Date.now()),
    src: 'https://www.xamou-art.com/wp-content/uploads/2012/04/louisiana-gallery-300x250.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    description:
      "Harry Potter has no idea how famous he is. ",
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'Coraline',
    author: 'Neil Gaiman',
    description:
      "When Coraline steps through a door to find another house strangely similar to her own (only better), things seem marvelous.",
    date: new Date(Date.now()),
    src: 'https://cdn.generalliabilityinsure.com/images/artgalleryinsurance.jpg?w=360&dpr=2.6'
  }
  
];

db.Blog.remove({})
  .then(() => db.Blog.collection.insertMany(blogSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  