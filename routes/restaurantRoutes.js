const express = require('express');
const router = express.Router();
const restaurantServices = require('../services/restaurantServices');
const { localMw } = require('../middlewares/exampleMW');

router.get('/', (req, res) => {
    const restaurants = restaurantServices.getAll()
    res.status(200).json({
        restaurants,
        message: 'Here is the restaurant list'
    });
});

router.get('/:restaurant',
    localMw,
    (req, res) => {
    const addressRestaurant = req.params.restaurant;
    const restaurant = restaurantServices.getOne(addressRestaurant);
    res.status(200).json({
        restaurant,
        message: 'Here is the chef list in ' + addressRestaurant
    });
});

router.post('/', (req, res) => {
    const info = req.body;
    restaurantServices.create(info);
    res.status(201).json({
        message: 'restaurant list updated'
    });
});
/*
router.patch('/update-name/:id', (req, res) => {
    const { id } = req.params;
    const { firstName } = req.body;
    clientServices.updateFirstName(id, firstName)
    res.status(200).json({
        message: 'client updated'
    });
});
*/
router.delete('/:restaurant', (req, res) => {
    const { restaurant } = req.params;
    restaurantServices.remove(restaurant);
    res.status(200).json({
        message: 'restaurant deleted'
    });
});

module.exports = router;