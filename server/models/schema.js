let mongoose = require('mongoose');
let {generateSeeding} = require('./seeding');


mongoose.connect('mongodb://127.0.0.1:27017/Frbo', { useNewUrlParser: true });

let Schema =  new mongoose.Schema({
  property_id: Number,
  review: Number,
  rating: Number,
  price: Number
});


let Frbo = mongoose.model('Frbo', Schema)

module.exports = {
  Frbo
};

