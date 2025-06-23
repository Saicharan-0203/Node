const express = require('express');
const router = express.Router();

const Task = require('../models/Task');


router.post('/', async (req, res) => {

      const task = await Task.query().insert(req.body);
      res.json(task);})

      

module.exports = router;      