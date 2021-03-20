const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');


const app = express();
app.use(bodyParser);


mongoose.connect('mongodb://localhost/react-shopping-cart-db', {
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true,
})