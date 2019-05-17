const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
// require('dotenv').config();
// require('../vars');

// dotenv.config();
console.log(process.env.MapboxAccessToken)

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/app', (req, res, next) => res.sendFile(path.join(__dirname, '../public', 'main.js')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../public', 'index.html')));

app.use(express.static(path.join(__dirname, '../public')));

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
