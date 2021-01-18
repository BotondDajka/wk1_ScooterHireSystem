const ScooterHire = require("./h_ScooterHire")
const ChargingStation = require("./h_ChargingStation");
const Scooter = require("./h_Scooter");
//const User = require("./h_User");
const Battery = require("./h_Battery");
const { chargingStations } = require("./h_ScooterHire");

/**
 * @class User object that stores the registered users
 * @property {string} userName List of every scooter
 * @property {Scooter|null} availableScooters List of available scooters
 */
class User {
    userName; // string
    hiredScooter;  // Scooter
    
    /**
     * @param {string} userName 
     */
    constructor(userName){
        if (!userName) throw new Error("Username of User can not be empty");
        userName = userName.replace(/ /g,"");
        if (userName=="") throw new Error("Username of User can not be empty");

        // Throws error if username is not unique
        for(let i = 0; i < ScooterHire.userList.length; i++){
            if (userName == ScooterHire.userList[i].userName){
                throw new Error("Username of User must be unique");
            }
        }

        this.userName = userName;
        ScooterHire.addUser(this); // Illigal OOP thing but OOP in JS is already illegal so ¯\_(ツ)_/¯
    }
    
    /**
     * @description Method to return scooter the user has rented
     * @returns {void}
     */
    returnScooter(){
        this.hiredScooter.hiredBy = null;
        this.hiredScooter.isHired = false;
        this.hiredScooter = null;
    }

    /**
     * @param {Scooter} Scooter Intsance of a scooter to set
     * @description Method to set rented scooter to the user
     * @returns {void}
     */
    setHiredScooter(Scooter){
        Scooter.isHired = true;
        Scooter.hiredBy = this;

        this.hiredScooter = Scooter
    }

    /**
     * @param {string} stationName
     * @description Method used to get an available scooter at a given station
     * @returns {Scooter}
     */
    getScooterAtStation(stationName){
        for (let i = 0; i < ScooterHire.chargingStations.length; i++){
            if (stationName == ScooterHire.chargingStations[i].name){
                for (let i2 = 0; i2 < ScooterHire.chargingStations[i].dockedScooters.length; i2++){
                    if (ScooterHire.chargingStations[i].dockedScooters[i2].isHired == false){
                        return ScooterHire.chargingStations[i].dockedScooters[i2];
                    }
                }
                return null;
            }
        }
        throw new Error(`Given station \"${stationName}\"doesn't exist`);
    }
}

module.exports = User;
