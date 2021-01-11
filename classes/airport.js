/**
 * Represents the Airport where Planes go to
 */
class Airport {
    name;
    /**
     * @constructor
     * @param {string} name 
     */
    constructor(name){
        if (!name){
            throw new Error("Airport must have a name");
        }
        this.name = name;
    }
}

module.exports = { Airport }