const h_Bag = require("../classes/h_bag.js");
const h_Airport = require("../classes/h_airport.js");
const h_Plane = require("../classes/h_plane.js");

/**
 * Represents the Person boarding the plane
 */
class Person {
    name;
    bags;
    /**
     * @constructor
     * @param {string} name 
     * @param {Array<Bag>} bags 
     */
    constructor(name, bags){
        if (!name || !bags){
            throw new Error("Person must have a name and array of Bag");
        }
        this.name = name;
        this.bags = bags;
    }
}
/**
 * Represents the type of Person (a Passenger) boarding the plane
 */
class Passenger extends Person{
    ticketNumber;

    /**
     * @constructor
     * @param {String} ticketNumber 
     * @param {String} name 
     * @param {Array<Bag>} bags 
     */
    constructor(ticketNumber, name, bags){
        super(name,bags);
        this.ticketNumber = ticketNumber;
    }
}

/**
 * Represents the type of Person (a Crewmember) boarding the plane
 */
class Crewmember extends Person{
    role;

    /**
     * @constructor
     * @param {String} role 
     * @param {String} name 
     * @param {Array<Bag>} bags 
     */
    constructor(role, name, bags){
        super(name,bags);
        this.role = role;
    }
}

module.exports = { Person, Passenger, Crewmember }