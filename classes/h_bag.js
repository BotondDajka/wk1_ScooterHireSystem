const h_Person = require("../classes/h_person.js");
const h_Airport = require("../classes/h_airport.js");
const h_Plane = require("../classes/h_plane.js");


/**
 * Represents the Bag taken as luggage on to the plane by
 */
class Bag {
    weight;
    /**
     * @constructor
     * @param {string} weight 
     */
    constructor(weight){
        if (!weight){
            throw new Error("Bag must have a weight!");
        }
        this.weight = weight;
    }
}


module.exports = { Bag }