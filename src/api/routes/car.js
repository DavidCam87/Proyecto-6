const { getCars, getCarsById, postCar, updateCar, deleteCar } = require("../controllers/car");
const carRoutes = require("express").Router();

carRoutes.get('/:id', getCarsById);
carRoutes.put("/:id", updateCar);
carRoutes.delete("/:id", deleteCar);
carRoutes.post("/", postCar);
carRoutes.get('/', getCars);

module.exports = carRoutes;