const Car = require('../models/cars');
//* se va ha realizar un CRUD
//!Create
const postCar = async (req, res, next) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    return res.status(201).json(savedCar);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion Post")
  };
};

//!Read
const getCars = async (req, res, next) => {
  try {
    //Model.find()->encuentra TODOS los datos de dicha coleccion. en este caso Artist.find()
    const allCars = await Car.find().populate('driver');
    return res.status(200).json(allCars);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion Get")
  };
};

//!Update
const updateCar = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newCar = new Car(req.body);
    newCar._id = id;
    const updatedCar = await Car.findByIdAndUpdate(id, newCar, { new: true });
    return res.status(200).json(updatedCar);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion Update")
  };
};

//!Delete
const deleteCar = async (req, res, next) => {
  try {//saber cual es de alguna manera (id)
    //const { id } = req.params;               // otramanera, object destructuring de ES6
    const deletedCar = await Car.findByIdAndDelete(req.params.id);
    return res.status(200).json(deletedCar);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion Delete")
  };
}

const getCarsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const carsById = await Car.findById(id).populate('driver');
    return res.status(200).json(carsById);
  } catch (error) {
    return res.status(400).json("ha fallado la peticion GetById")
  };
};


module.exports = { getCars, postCar, updateCar, deleteCar, getCarsById };