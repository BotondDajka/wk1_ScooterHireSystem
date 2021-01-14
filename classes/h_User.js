const ScooterHire = require("./h_ScooterHire")
const ChargingStation = require("./h_ChargingStation");
const Scooter = require("./h_Scooter");
//const User = require("./h_User");
const Battery = require("./h_Battery");

/**
 * @class User object that stores the registered users
 * @property {string} userName List of every scooter
 * @property {Scooter|null} availableScooters List of available scooters
 */
class User {
    userName;
    hiredScooter;
    
    /**
     * @param {string} userName 
     */
    constructor(userName){
        this.userName = userName;
        ScooterHire.addUser(this);
    }
    
    /**
     * @description Method to return scooter the user has rented
     * @returns {void}
     */
    returnScooter(){

    }

    /**
     * @param {Scooter} Scooter Intsance of a scooter to set
     * @description Method to set rented scooter to the user
     * @returns {void}
     */
    setHiredScooter(Scooter){
        this.hiredScooter = Scooter
    }

    /**
     * @param {string} stationName
     * @description Method used to get an available scooter at a given station
     * @returns {Scooter}
     */
    getScooterAtStation(stationName){
        
    }
}

module.exports = User;
