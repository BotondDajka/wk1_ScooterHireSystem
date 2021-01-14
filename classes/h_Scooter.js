const ScooterHire = require("./h_ScooterHire")
//const Battery = require("./h_Battery");

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

module.exports = Scooter;
