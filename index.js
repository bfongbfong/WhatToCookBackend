const express = require('express');
require('dotenv').config();


const mongoose = require('mongoose');
// const config = require('config'); // taken from rz
// const cors = require('cors'); // taken from rz, not sure what it does

// const authorization = require('./middleware/authorization');

const autocompleteIngredientSearchRoutes = require('./routes/autocompleteIngredientSearch');

const app = express();

mongoose.connect('mongodb://localhost:27017/whattocook', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!");
    })
    .catch((err) => {
        console.log("OH NO MONGO CONNECTION ERROR!!!");
        console.log(err)
    })

// const User = require('./models/user');

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("HI WELCOME TO what to cook");
})

app.use('/autocompleteIngredientSearch', autocompleteIngredientSearchRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    return res.status(404).json({ errorMessage: '404 NOT FOUND.' });
});

app.listen(3000, () => {
    console.log("serving app on localhost:3000")
})