const express = require('express');
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const db = require('./app/models/sequelize');


const bodyParser = require('body-parser');
const passport = require('passport')
const pass = require('./app/middleware/passport')
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require('./app/routes/routes');
app.use('/', routes)


const logger = require('./app/logger/logger');
app.use(require("./app/middleware/response"));
app.use(require("./app/middleware/error").handleJoiErrors);
app.use(require("./app/middleware/error").handleErrors);



const port = 9000;
app.listen(port,()=>{
    console.log(`listining port ${port}...`)
});

