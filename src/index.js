const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {PORT} = require('./config/server.config');
const apiRouter  =  require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true  }));
app.use(bodyParser.text());

// If any requests comes and Routes starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message : 'Problem Service is Alive'})
});

// Last  Middleware , if any ERROR comes
app.use(errorHandler);

app.listen(PORT,async () =>{
    console.log(`Server Started at PORT ${PORT}`);
    await connectToDB();
    console.log("Successfuly Connected to DB");


});
