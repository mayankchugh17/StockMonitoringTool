const { Schema } = require('mongoose');
const OrderSchema = Schema({
    name: String,
    qty: Number,
    price: Number,
    mode: String        //Buy or Sell
});

module.exports = OrderSchema;