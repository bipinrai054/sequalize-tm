const express = require('express');
const db = require('../config/database.js');
const Gig = require('../models/Gig.js');

const router = express.Router();

// get gigs
router.get('/', (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      res.send(gigs);
    })
    .catch((err) => console.log(err)),
);

// add a gig
router.get('/add', (req, res) => {
  const data = {
    title: 'Simple Wordpress Website',
    technologies: 'worpress,php, html, css',
    budget: '$1000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    contact_email: 'user2@gmail.com',
  };
  let { title, technologies, budget, description, contact_email } = data;

  Gig.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
  })
    .then((gig) => res.redirect('/gigs'))
    .catch((err) => console.log(err));
});
module.exports = router;
