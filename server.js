const express=require("express")
const mongoose=require("mongoose");
const app=express()
var routes=require('./routes/route');
mongoose.set('strictQuery', false);


const cors=require('cors');
app.use(cors(
    {
        origin:"http://localhost:4200"
    }
));
app.listen(8000,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});



mongoose.connect("mongodb://localhost:27017/data",{useNewUrlParser: true,  useUnifiedTopology: true },
 function checkDB(error)
{
    if(error)
    {
        console.log("error");
    }
    else
    {
        console.log("DB Connected");
    }0
});

 



 


app.use(express.json());
app.use(routes);
