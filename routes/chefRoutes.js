const express = require('express');
const router = express.Router();
const chefServices = require('../services/chefServices');
const { localMw } = require('../middlewares/exampleMW');

router.get('/', (req, res) => {
    const chefs = chefServices.getAll()
    res.status(200).json({
        chefs,
        message: 'Here is the chef list'
    });
});

router.get('/:id',
    localMw,
    (req, res) => {
    const chefId = req.params.id;
    const chef = chefServices.getOne(chefId);
    res.status(200).json({
        chef,
        message: 'Here is the chef list'
    });
});

router.post('/', (req, res) => {
    const info = req.body;
    const message = chefServices.create(info);
    res.status(201).json({
        message: message
    });
});

router.patch('/assign-address-restaurant/:id', (req, res) => {
    const { id } = req.params;
    const { addressRestaurant } = req.body;
    const message = chefServices.assignAddressRestaurant(id, addressRestaurant);
    res.status(200).json({
        message: message
    });
});

router.patch('/change-address-restaurant/:id', (req, res) => {
    const { id } = req.params;
    const { addressRestaurant } = req.body;
    const message = chefServices.changeAddressRestaurant(id, addressRestaurant);
    res.status(200).json({
        message: message
    });
});

router.patch('/update-address-restaurant/:id', (req, res) => {
    const { id } = req.params;
    const { addressRestaurant } = req.body.addressRestaurant;
    chefServices.updateAddressRestaurant(id, addressRestaurant)
    res.status(200).json({
        message: 'chef updated'
    });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    chefServices.remove(id);
    res.status(200).json({
        message: 'chef deleted'
    });
});

module.exports = router;