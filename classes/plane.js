
/**
 * Represents the Plane taking the passengers to a destination(Airport)
 */
class Plane {
    passengers = [];
    destination;
    /**
     * @constructor
     * @param {Airport} destination 
     */
    constructor(destination){
        if (!destination){
            throw new Error("Plane must have a destination");
        }
        this.destination = destination;
    }
    /**
     * Function to push to passengers Array
     * @function
     * @param {Person} Person 
     */
    board(Person) {
        this.passengers.push(Person);
    }
}


module.exports = { Plane }