const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() => {
    console.log('successs connected to the db')
}).catch(err => {
    console.log('Could not connect to the db');
    process.exit();
})


app.get('/', (req, res) => {
    res.json({"message": "welcome to application"})
})

require('./app/routes/todo.routes')(app);

app.listen(7000, function() {
    console.log('listening on 7000 port');
})