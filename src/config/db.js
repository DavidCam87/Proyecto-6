const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('BBDD Conectada...😀😀');
  } catch (error) {
    console.error("Error al conectar a la base de datos😡😡:");
  };
};
module.exports = { connectDB };