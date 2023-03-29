const express = require("express")
const mongoose = require("mongoose");
const app = express()
var routes = require('./routes/route');
mongoose.set('strictQuery', false);
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const authrouteRouter = require('./auth/authroute')
const mongoURI = "mongodb://localhost:27017/codestorage"

const cors = require('cors');
app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));
app.listen(8000, function check(err) {
    if (err)
        console.log("error")
    else
        console.log("started")
});

app.use('/user', authrouteRouter)
mongoose.connect(mongoURI)
mongoose.connection.on('open', () => {
    console.log('database connected')

})

app.use(express.json());
app.use(routes);
