require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

//DB
const conns = require('./db');
conns()

//middlewares
app.use(express.json())
app.use(cors());

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`))