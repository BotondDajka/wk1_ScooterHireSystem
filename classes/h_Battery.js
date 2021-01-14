
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

module.exports = Battery;
