const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/user', require('./routes/UserRoutes'));

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => console.log('connected to mongodb'));

app.listen(5000, () => console.log('server up and running on port 5000'));
