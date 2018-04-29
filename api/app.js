const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const hotelsRoutes = require('./routes/hotels');

app.set('json space', 4);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/hotels', hotelsRoutes);

app.listen(3000, () => {
  console.log('Server listen ob port 3000');
});
