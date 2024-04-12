const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema(
  {
    driver: { type: String, required: true },
    nationality: { type: String, required: true },
    age: { type: Number, required: true }
  },
  {
    timestamps: true,
    collection: 'drivers'
  }
);
//                               info      schrema     nombre collection(BBDD)
const Drivers = mongoose.model('drivers', driverSchema, "drivers");
module.exports = Drivers;