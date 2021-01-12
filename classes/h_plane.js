const h_Bag = require("../classes/h_bag.js");
const h_Person = require("../classes/h_person.js");
const h_Airport = require("../classes/h_airport.js");


/**
 * Represents the Plane taking the passengers to a destination(Airport)
 */
class Plane {
    passengers = [];
    crew = []
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
     * @param {Passengers} Passengers 
     */
    board(Passengers) {
        this.passengers.push(Passengers);
    }
    /**
     * Function to set the crew of the Plane
     * @param {Array<Crewmember>} crew 
     */
    setCrew(crew){
        this.crew = crew
    }
}


module.exports = { Plane }