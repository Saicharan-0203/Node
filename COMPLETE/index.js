require('dotenv').config();
const express = require('express');
require('./db/init'); 

const notifyRoute = require('./routes/user');
const taskRoute = require('./routes/task');
const teamRouter = require('./routes/team');
const app = express();
app.use(express.json());

app.use('/user', notifyRoute);
app.use('/task', taskRoute);
app.use('/team', teamRouter);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
