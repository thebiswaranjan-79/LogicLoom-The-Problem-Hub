const express = require('express');
const bodyParser = require('body-parser');

const {PORT} = require('./config/server.config');
const apiRouter  =  require('./routes');
const NotFoundError = require('./errors/NotFoundError');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true  }));
app.use(bodyParser.text());

// If any requests comes and Routes starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({message : 'Problem Service is Alive'})
});

app.listen(PORT, () =>{
    console.log(`Server Started at PORT ${PORT}`);

    try {
        throw new NotFoundError({});

    } catch (error) {
        // Log the Error 
        console.log("Something Went Wrong");
    } finally{
      
        console.log("Executed Finally");
    }
});
