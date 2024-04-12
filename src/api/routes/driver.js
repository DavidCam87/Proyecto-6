const { getDrivers, postDriver, updateDriver, deleteDriver } = require("../controllers/driver");

const driverRoutes = require("express").Router();

driverRoutes.get('/', getDrivers);
driverRoutes.post("/", postDriver);
driverRoutes.put("/:id", updateDriver);
driverRoutes.delete("/:id", deleteDriver);

module.exports = driverRoutes;