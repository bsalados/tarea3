const restaurants = require('../libs/restaurants');

class Restaurant {
    constructor(){}

    static getAll(){
        const allRestaurants = restaurants;
        return allRestaurants;
    }

    static getOne(addressRestaurant){
        const restaurant = restaurants[addressRestaurant];
        return restaurant;
    }

    static create(info){
        const restaurantsAmount =  (Object.keys(restaurants)).length + 1;
        restaurants[info.addressRestaurant] = {};
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