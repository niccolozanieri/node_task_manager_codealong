const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require("./db/connect");


// middleware 

app.use(express.json());

// routes 

app.get('/', (req, res) => {
    res.send("<h1>Home page</h1>");
})

const tasks = require('./routes/tasks');

app.use('/api/v1/tasks', tasks);

const PORT = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {console.log(`Server listening on port ${PORT}...`)});
    } catch (error) {
        console.log(error);
    }
}

start();