require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

// routes 
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

//DB
const conns = require('./db');
conns()

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(cors());

//routes using
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes)

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`))