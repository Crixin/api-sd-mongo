const express = require('express');
const mongoose = require('mongoose');
const bodyParser =  require('body-parser');

const app = express();

mongoose.connect("mongodb+srv://user:user@omnistack9-u7pfh.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
mongoose.set('useFindAndModify', false)

app.use(bodyParser.json())

app.use(require('./routes'));


app.listen(3000); 
