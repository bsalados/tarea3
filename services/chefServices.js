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
        const chefsAmount =  (Object.keys(chefs)).length + 1
        for(let i = 1; i <= chefsAmount - 1; i++){
            if (chefs[i].firstName == info.firstName && chefs[i].lastName == info.lastName){
                    return ('client already exists')
                } else if(i == (chefsAmount-1 )){
                    const subInfo = (({firstName, lastName, entryDate}) => ({firstName, lastName, entryDate}))(info);
                    chefs[chefsAmount] = subInfo;
                    return ('client has been saved');
                } 
        }
    }

    static assignAddressRestaurant(chefId, addressRestaurant){
        if (chefs[chefId].hasOwnProperty('addressRestaurant')){
            return ('client already has an addressRestaurant')
        } else {        
            chefs[chefId].addressRestaurant = addressRestaurant;
            const chefsAmount =  (Object.keys(restaurants[addressRestaurant].chefs)).length + 1;
            restaurants[addressRestaurant].chefs[chefsAmount] = chefs[chefId].firstName + ' ' + chefs[chefId].lastName 
            return ('chefs info updated');
        }
    }

    static changeAddressRestaurant(chefId, addressRestaurant){
        if (!chefs[chefId].hasOwnProperty('addressRestaurant')){
            return ('client has not been assigned to a restaurant yet')
        } else {    
            const originalAddress = chefs[chefId].addressRestaurant    
            chefs[chefId].addressRestaurant = addressRestaurant;
            const chefsAmount =  (Object.keys(restaurants[addressRestaurant].chefs)).length + 1;
            restaurants[addressRestaurant].chefs[chefsAmount] = chefs[chefId].firstName + ' ' + chefs[chefId].lastName
            delete restaurants[originalAddress].chefs[Object.values(restaurants[originalAddress].chefs).
            indexOf(chefs[chefId].firstName + ' ' + chefs[chefId].lastName) + 1]
            return ('chefs info updated');
        }
    }
    

    static remove(chefId){
        delete chefs[chefId];
        return true;
    }

}

module.exports = Chef;