const express = require('express');
const mainRouter = express.Router();
const clientsRouter = require('./clientRoutes');
const restaurantsRouter = require('./restaurantRoutes');

const connectRoutes = app => {
    app.use('/api/v1', mainRouter);
    mainRouter.use('/clients',clientsRouter)
    mainRouter.use('/restaurants',restaurantsRouter)
}

module.exports = connectRoutes;