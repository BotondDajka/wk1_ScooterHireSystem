const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

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

    getInfo(){
        return new Promise((resolve, reject) => {
            fs.readFile("./airports.json", (err, data) => {

                /* istanbul ignore next */
                if (err) return reject(err)

                const airports = JSON.parse(String(data))
                const [airport] = Object.keys(airports).filter(airportCode => airports[airportCode].iata === this.name).map(airportCode => airports[airportCode])
                resolve(airport)
            })
        })
    }
}


module.exports = { Airport }