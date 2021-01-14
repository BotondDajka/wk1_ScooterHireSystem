import ScooterHire from "../classes"


/**
 * @class ChargingStation object used to store ChargingStations Scooters are brought to
 * @extends ChargingStation
 * @property {string} name Name of charging station
 * @property {number} totalPlaces Number of total places the charging station has
 * @property {number} usedPlaces Number of places used up by scooters in the charging station
 * @property {Array<Scooter>} chargingScooters List of the scooters charging at the charging station
 * @property {Array<Scooter>} chargedScooters List of fully charged scooters at the charging station
 */
export class ChargingStation extends ScooterHire {
    name = "Name_Undefined";
    totalPlaces = 1;
    usedPlaces = 0;

    chargingScooters = [];
    chargedScooters = [];


    static userList = []
    /**
     * @param {Scooter} Scooter instance of Scooter
     * @description Method used to dock a Scooter to the charging station
     * @returns {void}
     */
    dockScooter(Scooter){

    }

    /**
     * @param {Scooter} Scooter instance of Scooter
     * @description Method used to undock a Scooter from the charging station
     * @returns {void}
     */
    undockScooter(Scooter){

    }

    /**
     * @description Method used to get the number of free places at the charging station
     * @returns {number}
     */
    getNumberOfFreePlaces(){

    }

}