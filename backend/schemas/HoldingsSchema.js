const { Schema } = require('mongoose');
const HoldingsSchema = new Schema({
    name:String,
    quantity:Number,
    avg:Number,
    price:Number,
    net:String,
    day:String
});

module.exports = HoldingsSchema;