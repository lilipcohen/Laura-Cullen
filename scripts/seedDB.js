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
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'Lord of the Flies',
    author: 'William Golding',
    description:
      'The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.',
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults",
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'The Punch Escrow',
    author: 'Tal M. Klein',
    description:
      "It's the year 2147. Advancements in nanotechnology have enabled us to control aging. We’ve genetically engineered mosquitoes to feast on carbon fumes instead of blood, ending air pollution. ",
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
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
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'Code: The Hidden Language of Computer Hardware and Software',
    author: 'Charles Petzold',
    description:
      'What do flashlights, the British invasion, black cats, and seesaws have to do with computers? In CODE, they show us the ingenious ways we manipulate language and invent new means of communicating with each other. ',
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'The Everything Store: Jeff Bezos and the Age of Amazon',
    author: 'Brad Stone',
    description:
      'The Everything Store will be the revealing, definitive biography of the company that placed one of the first and largest bets on the Internet and forever changed the way we shop and read.',
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'Total Recall: My Unbelievably True Life Story',
    author: 'Arnold Schwarzenegger',
    description:
      'In his signature larger-than-life style, Arnold Schwarzenegger’s Total Recall is a revealing self-portrait of his illustrious, controversial, and truly unique life. ',
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future',
    author: 'Ashlee Vance',
    description:
      "In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley's most exciting, unpredictable, and ambitious entrepreneurs - a real-life ",
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    description:
      "Based on more than 40 interviews with Jobs conducted over two years - as well as interviews with more than a hundred family members, friends, adversaries, competitors, ",
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  {
    title: 'Astrophysics for People in a Hurry',
    author: 'Neil deGrasse Tyson',
    description:
      "What is the nature of space and time? How do we fit within the universe? ",
    date: new Date(Date.now()),
    src: 'https://i.pinimg.com/474x/aa/82/78/aa82782d5f0c722ab7a91629d6e4792d.jpg',
    link: 'https://www.pexels.com/'
  },
  
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
