const express = require('express');
const port = 3000;
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser')

require('./config/db')

//log request
app.use(morgan('tiny'))

//parse request
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', require('./routes/router'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
