const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/api/user', require('./routes/UserRoutes'));
app.use('/api/product', require('./routes/ProductRoutes'));
app.use('/api/order', require('./routes/OrderRoutes'));

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose
  .connect(
    'mongodb+srv://johnkallstrom:friXion05PILOT@topstylecluster-duooe.mongodb.net/test?retryWrites=true&w=majority'
  )
  .then(() => console.log('connected to mongodb'));

app.listen(5000, () => console.log('server up and running on port 5000'));
