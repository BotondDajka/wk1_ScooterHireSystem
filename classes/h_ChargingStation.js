const ScooterHire = require("./h_ScooterHire")
//const ChargeStation = require("./h_ChargingStation")
const Scooter = require("./h_Scooter");



/**
 * @class ChargingStation object used to store ChargingStations Scooters are brought to
 * @extends ScooterHire
 * @property {string} name Name of charging station
 * @property {number} totalPlaces Number of total places the charging station has
 * @property {number} usedPlaces Number of places used up by scooters in the charging station
 * @property {Array<Scooter>} chargingScooters List of the scooters charging at the charging station
 * @property {Array<Scooter>} chargedScooters List of fully charged scooters at the charging station
 */
class ChargingStation {
    name; // string
    totalPlaces; // number
    usedPlaces; // number

    chargingScooters = []; // Scooter
    chargedScooters = []; // Scooter

    /**
     * 
     * @param {string} name Name of the charging stations
     * @param {number} totalPlaces Number of total places the charging station has
     * @param {number} usedPlaces Number of places used up by scooters in the charging station
     */
    constructor(name="NameUndefined", totalPlaces=1){
        this.name = name;
        this.totalPlaces = totalPlaces;
        this.usedPlaces = 0;

        ScooterHire.chargingStations.push(this);
    }

    /**
     * @param {Scooter} Scooter instance of Scooter
     * @description Method used to dock a Scooter to the charging station
     * @returns {void}
     */
    dockScooter(Scooter){
        Scooter.setChargingStation(this);
    }

    /**
     * @param {Scooter} Scooter instance of Scooter
     * @description Method used to undock a Scooter from the charging station
     * @returns {void}
     */
    undockScooter(Scooter){
        Scooter.removeChargingStation();
    }

    /**
     * @description Method used to get the number of free places at the charging station
     * @returns {number}
     */
    getNumberOfFreePlaces(){
        return this.totalPlaces - this.usedPlaces
    }
}

module.exports = ChargingStation;