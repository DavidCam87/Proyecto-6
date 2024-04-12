const Driver = require('../models/driver');
//* se va ha realizar un CRUD
const postDriver = async (req, res, next) => {
  try {
    const newDriver = new Driver(req.body);
    const savedDriver = await newDriver.save();
    return res.status(201).json(savedDriver);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion Post");
  };
};
const getDrivers = async (req, res, next) => {
  try {
    //Model.find()->encuentra TODOS los datos de dicha coleccion. en este caso Artist.find()
    const allDrivers = await Driver.find();
    return res.status(200).json(allDrivers);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion Get");
  };
};
const updateDriver = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newDriver = new Driver(req.body);
    newDriver._id = id;
    const updateDriver = await Driver.findByIdAndUpdate(id, newDriver, { new: true });
    return res.status(200).json(updateDriver);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion Update");
  };
};

const deleteDriver = async (req, res, next) => {
  try {//saber cual es de alguna manera (id)
    //const { id } = req.params;               // otramanera, object destructuring de ES6
    const deletedDriver = await Driver.findByIdAndDelete(req.params.id);
    return res.status(200).json(deletedDriver);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion Delete");
  };
};

module.exports = { getDrivers, postDriver, updateDriver, deleteDriver };