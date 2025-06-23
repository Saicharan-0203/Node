const express = require('express');
const router = express.Router();
const Team = require('../models/Team');


router.post('/', async (req, res) => {

      const team = await Team.query().insert(req.body);
      res.json(team);})


module.exports = router;      