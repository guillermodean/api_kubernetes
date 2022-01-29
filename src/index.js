const express = require('express')
const path = require('path')
const cors = require('cors');

const database = require('./database')
const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', require('./routes/index.js'));


app.listen(4500)
console.log('server on port',4500);