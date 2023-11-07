require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const User = require('./models/matrix')

const app = express();

app.use(helmet());
app.use(cors());



const userrouter = require('./routes/user');


const port = process.env.PORT;
const dbpassword = process.env.PASSWORD

app.use('/user', userrouter);


mongoose.connect(`mongodb+srv://bcae208924402018:Surya%402001@cluster0.ieth7oj.mongodb.net/matrixapp?retryWrites=true&w=majority1`)
    .then(result => {
        console.log(`Connected ! on ${port}`);
        app.listen(port);
    })
    .catch(err => console.log(err));


