require('dotenv').config(); //This method is used to send all the environment variables to the Process(which tracks the current working of OS).
const express = require('express');
const mongoose = require('mongoose');
const app = express();      //Creating an application
const HoldingsModel  = require('./model/HoldingsModel.js'); 
const PositionsModel  = require('./model/PositionsModel.js');
const OrdersModel  = require('./model/OrdersModel.js');

const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3002; 
const MONGO_URL = process.env.MONGO_URL; 

app.use(cors());
app.use(bodyParser.json());

app.listen(PORT, () =>              //Starting an application 
{   
    console.log(`Application is running on port ${process.env.PORT || 3002}`);  
    mongoose.connect(MONGO_URL).then(() => {
        console.log("Connected to MongoDB");
    })
});

app.get('/allHoldings',async(req, res)=>{
    let allHoldings = await HoldingsModel.find({})
    res.json(allHoldings)
    // res.json(allHoldingData);
});

app.get('/allPositions',async(req, res)=>{
    const allPositionsData = await PositionsModel.find({});
    res.json(allPositionsData);
})

app.post('/newOrder',async(req, res)=>{
    const newOrder = new OrdersModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode,
    })
    newOrder.save().then(()=>{
        console.log(`Data save in orders`)
    });
})