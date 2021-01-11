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

module.exports = { Person }