const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const hotelsRoutes = require('./routes/hotels');

// Add headers
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/hotels', hotelsRoutes);

app.listen(3000, () => {
  console.log('Server listen ob port 3000');
});
