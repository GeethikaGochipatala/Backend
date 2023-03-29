const express = require("express");
const mongoose = require("mongoose");
const app = express()
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017/loans", {
    useNewUrlParser: true, useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Successfuly connected")
    }
})

app.listen(3000, () => {
    console.log("on port 3000!!!")
})

