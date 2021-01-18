
/**
 * @class Battery object that stores the battery the Scooter is using
 * @property {number} chargeLevel the level of the battery charge 0-100
 * @property {boolean} isCharging state of the battery if its charging or not
 */
class Battery {
    chargeLevel; // number
    isCharging; // bool
    /**
     * @param {string} userName 
     */
    constructor(){
        this.isCharging = false;
        this.chargeLevel = 100
    }
    
    /**
     * @param {function} done callback function to call after done charging
     * @description Method to charge the battery
     * @returns {void}
     */
    async charge(done){
        this.isCharging = true;
        let addCharge = ()=>{
            if (this.chargeLevel < 100 && this.isCharging){
                this.chargeLevel += 5;
                setTimeout(addCharge, 200)
                console.log("Charging: "+this.chargeLevel+"%"); // debug
            }
            else{
                this.isCharging = false;
                done()
            }
        }
        addCharge();
    }

    /**
     * @description Method to check if battery is charged
     * @returns {boolean}
     */
    isCharged(){
        return (this.chargeLevel == 100)
    }

    /**
     * @description Method to get the charge level
     * @returns {number}
     */
    getCharge(){
        return this.chargeLevel   
    }

    /**
     * @param {number} time Time in minutes to use the scooter for
     * @description Method to use the battery
     * @returns {void}
     */
    use(time){
        this.chargeLevel -= time;

        this.chargeLevel = this.chargeLevel > 0 ? this.chargeLevel : 0;
    }
}

module.exports = Battery;
