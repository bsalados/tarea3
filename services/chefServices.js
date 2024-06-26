const chefs = require('../libs/chefs');
const restaurants = require('../libs/restaurants');

class Chef {
    constructor(){}

    static getAll(){
        const myChefs = chefs;
        return myChefs;
    }

    static getOne(chefId){
        const chef = chefs[chefId];
        return chef;
    }

    static create(info){
        const subInfo = (({firstName, lastName, entryDate}) => ({firstName, lastName, entryDate}))(info);
        const chefsAmount =  (Object.keys(chefs)).length + 1;
        chefs[chefsAmount] = subInfo;
        return true;
    }

    static assignAddressRestaurant(chefId, addressRestaurant){
        chefs[chefId].addressRestaurant = addressRestaurant;
        const chefsAmount =  (Object.keys(restaurants[addressRestaurant].chefs)).length + 1;
        restaurants[addressRestaurant].chefs[chefsAmount] = chefs[chefId].firstName + ' ' + chefs[chefId].lastName 
        return true;
    }

    /*
    static udpateaddressRestaurantChef(chefId, addressRestaurant){
        chefs[chefId].addressRestaurant = addressRestaurant;
        return true;
    }*/
    

    static remove(chefId){
        delete chefs[chefId];
        return true;
    }

}

module.exports = Chef;