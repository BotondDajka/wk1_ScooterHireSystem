
/**
 * @class Static Main Object of the Scooter Hire System
 * @property {Array<Scooter>} allScooters List of every scooter
 * @property {Array<Scooter>} availableScooters List of available scooters
 * @property {Array<ChargingStation>} chargingStations List of Charging Stations
 * @property {Array<User>} userList List of registered users
 */
class ScooterHire {
    static name="test"
    static allScooters = [];
    
    static availableScooters = [];
    static chargingStations = [];

    static userList = [];

    /**
     * @param {User} User instance of User
     * @description Method used to add new scooter to list of scooters
     * @returns {void}
     */
    static addUser(User){
        this.userList.push(User);
    }

    /**
     * @param {Scooter} Scooter instance of Scooter
     * @description  Method used to add new scooter to list of scooters
     * @returns {void}
     */
    static addScooter(Scooter){
        this.allScooters.push(Scooter);
    }

    /**
     * @param {string} userName username of the user
     * @description Method used to find a user form userList, returns U
     * @returns {User}
     */
    static getUser(userName){
        for (let i = 0; i < userList.length; i++){
            if (userName == this.userList[i].userList) {
                return userList[i]
            }
        }
    }
}



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
    name;
    totalPlaces;
    usedPlaces;

    chargingScooters = [];
    chargedScooters = [];

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
        return this.totalPlaces - this.usedPlaces
    }
}




/**
 * @class Scooter object that stores the scooters at the Scooter Hire
 * @property {string} serialNum Serial number of the scooter
 * @property {boolean} isHired state of the scooter if its hired or not
 * @property {boolean} isCharging state of the scooter if its charging or not
 * @property {ChargingStation|null} chargingStationAttachedTo the instance of the charging station the scooter is attached to while charging and being docked
 * @property {Battery} battery the instance of the battery the scooter contains
 * @property {User|null} hiredBy the istance of the user who hired the scooter
 */
class Scooter {
    serialNum;
    isHired;

    isCharging;
    chargingStationAttachedTo;

    battery;
    hiredBy;

    constructor(){
        this.isHired = false;

        this.isCharging = false;
        this.chargingStationAttachedTo = null;

        this.hiredBy = null;

        // Makes sure there is no scooter with the same serial number
        let tempNum = ScooterHire.allScooters.length + 1 ;
        for(let i = 0; i < ScooterHire.allScooters.length; i++){
            if (ScooterHire.allScooters[i].serialNum == ("SN00"+tempNum)){
                tempNum+=1
            }
        }
        this.serialNum = "SN00"+ tempNum;
        //this.battery = new Battery();



        ScooterHire.allScooters.push(this);
    }

    /**
     * @param {number} time number of ms to use the scooter for (not the renting time)
     * @description Method used to use the scooter which drains the battery
     * @returns {void}
     */
    useScooter(time){
        
    }
}

/**
 * @class Battery object that stores the battery the Scooter is using
 * @property {string} userName List of every scooter
 * @property {Scooter|null} availableScooters List of available scooters
 */
class Battery {
    chargeLevel;
    /**
     * @param {string} userName 
     */
    constructor(){
        this.chargeLevel = 100
    }
    
    /**
     * @description Method to charge the battery
     * @returns {void}
     */
    charge(){

    }

    /**
     * @description Method to check if battery is charged
     * @returns {boolean}
     */
    isCharged(){
        if (this.chargeLevel == 100){
            return true
        }
        else{
            return false
        }
            
    }

    /**
     * @description Method to get the charge level
     * @returns {number}
     */
    getCharge(){
        return this.chargeLevel   
    }
}

module.exports = { ScooterHire, User, ChargingStation, Scooter, Battery }