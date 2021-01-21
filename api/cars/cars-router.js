const express = require('express');
const Car = require('./cars-model');

const router = express.Router();

// curl -X GET http://localhost:5000/api/cars
router.get('/', async (req, res) => { 
    try {
        const cars = await Car.getAll();
        res.status(200).json(cars);
    } catch (err) {
        res.status(404).json({ errorMessage: 'Internal server error' });
    }
});

// router.get('/:id', (req, res) => {
//     //some code
// });

// "VIN" must be unique. 
// curl -d '{"VIN": 235234, "make": "Honda", "model": "Civic", "mileage": 123455}' -H 'Content-Type: application/json' -X POST http://localhost:5000/api/cars
router.post('/', async (req, res) => { 
    const car = req.body;
    try {
        const newCarId = await Car.insert(car);
        const newCar = await Car.getById(newCarId);
        res.status(201).json(newCar);
    } catch (err) {
        res.status(404).json({ errorMessage: 'Internal server error' });
    }
});

// router.delete('/:id', (req, res) => {
//     //some code
// });

// router.put('/:id', (req, res) => {
//     //some code
// });

module.exports = router;