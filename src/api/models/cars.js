const mongoose = require('mongoose');

const carSchema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true },
    driver: { type: mongoose.Types.ObjectId, required: false, ref: "drivers" }
  },
  {
    timestamps: true,
    collection: 'cars'
  }
);
//                               info      schrema     nombre collection(BBDD)
const Cars = mongoose.model('cars', carSchema, "cars");
module.exports = Cars;
