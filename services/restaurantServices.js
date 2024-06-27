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
        if (restaurants.hasOwnProperty(info.addressRestaurant) == false){
            restaurants[info.addressRestaurant] = {};
            return ('restaurant list updated');
            } else {
            return ('Restaurant Address already exists')}
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