require('dotenv').config(); //This method is used to send all the environment variables to the Process(which tracks the current working of OS).
const express = require('express');
const mongoose = require('mongoose');
const app = express();      //Creating an application

const PORT = process.env.PORT || 3002; 
const MONGO_URL = process.env.MONGO_URL; 

app.listen(PORT, () =>              //Starting an application 
{   
    console.log(`Application is running on port ${process.env.PORT || 3002}`);  
    mongoose.connect(MONGO_URL).then(() => {
        console.log("Connected to MongoDB");
    })
}) 