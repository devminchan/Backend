const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
  customer_id : String,
  superman_id: String,
  items: String,
  status: Number,
  status: Number,
  registered_date: String,
  place: String,
  finished_date: Date,
  estimated_price : Number
});

module.exports = mongoose.model('Order',Order);
