const express = require('express');
const mongoose = require('mongoose')
const userRouter = require('./Routes/user')
const app = express();

mongoose.connect("mongodb+srv://sudhakar:sudhakar@cluster0.eo0n8qn.mongodb.net/?retryWrites=true&w=majority",
() => {
    console.log("Connected to Database");
});


app.use('/',userRouter);
app.get ('*',(req,res) =>{
    res.send("Page Not Found");
})

const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log("Server is up at 5000");
})