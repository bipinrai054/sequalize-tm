import express from 'express';
import db from '../config/database.js';
import Gig from '../models/Gig.js';

const router = express.Router();

router.get('/', (req, res) =>
  Gig.findAll()
    .then((gigs) => {
      console.log(gigs);
      res.sendStatus(200);
    })
    .catch((err) => console.log(err)),
);

export default router;
