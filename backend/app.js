const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user')


const app = express();
mongoose.connect("mongodb+srv://websiteTemplate:VWzNe96XYToIbFlx@cluster-4aepj.mongodb.net/websiteTemplate?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('database connected successfully');
    })
    .catch((err) => {
        console.log('batabase connection failed', err);
    })


app.use(bodyParser.json());

// const a ='VWzNe96XYToIbFlx';

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET , POST, PATCH, PUT, DELETE, OPTIONS");
    next();
});


app.use("/api/user", userRoutes);

module.exports = app;
