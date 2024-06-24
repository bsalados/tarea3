const restaurants = require('../libs/restaurants');

class Restaurant {
    constructor(){}

    static getAll(){
        const allRestaurants = restaurants;
        return allRestaurants;
    }

    static getOne(restaurantId){
        const restaurant = restaurants[restaurantId];
        return restaurant;
    }

    static create(info){
        const restaurantsAmount =  (Object.keys(restaurants)).length + 1;
        restaurants[restaurantsAmount] = info;
        return true;
    }

    /*static updateFirstName(clientId, firstName){
        clients[clientId].firstName = firstName;
        return true;
    }*/

    static remove(restaurantId){
        delete restaurants[restaurantId];
        return true;
    }

}

module.exports = Restaurant;