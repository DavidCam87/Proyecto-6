const { getCars, getCarsById, postCar, updateCar, deleteCar } = require("../controllers/car");

const carRoutes = require("express").Router();

carRoutes.get('/', getCars);
carRoutes.get('/:id', getCarsById);
carRoutes.post("/", postCar);
carRoutes.put("/:id", updateCar);
carRoutes.delete("/:id", deleteCar);

module.exports = carRoutes;