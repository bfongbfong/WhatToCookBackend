const express = require('express');
// const path = require('path');
// const cookieParser = require('cookie-parser');
// const logger = require('morgan');
// const createError = require('http-errors');
// require('dotenv').config();

// const userRoutes = require('./routes/users');
// const shiftRoutes = require('./routes/shifts');
// const groupRoutes = require('./routes/groups');
// const hospitalRoutes = require('./routes/hospitals');

// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const config = require('config'); // taken from rz
// const cors = require('cors'); // taken from rz, not sure what it does

// const authorization = require('./middleware/authorization');

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

// app.use('/users', userRoutes);
// app.use('/shifts', shiftRoutes);
// app.use('/groups', groupRoutes);
// app.use('/hospitals', hospitalRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    return res.status(404).json({ errorMessage: '404 NOT FOUND.' });
});

app.listen(3000, () => {
    console.log("serving app on localhost:3000")
})