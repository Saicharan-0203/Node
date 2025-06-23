require('dotenv').config();
const express = require('express');
const { Model } = require('objection');
const Knex = require('knex');
const knexConfig = require('./db/knexfile').development;

const authRoutes = require('./routes/auth');

const knex = Knex(knexConfig);
Model.knex(knex);

const app = express();
app.use(express.json());


app.use('/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
