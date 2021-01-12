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