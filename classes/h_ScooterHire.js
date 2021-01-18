
/**
 * @class Static Main Object of the Scooter Hire System
 * @property {Array<Scooter>} allScooters List of every scooter
 * @property {Array<Scooter>} availableScooters List of available scooters
 * @property {Array<ChargingStation>} chargingStations List of Charging Stations
 * @property {Array<User>} userList List of registered users
 */
class ScooterHire {
    static allScooters = []; // Scooter
    
    static availableScooters = []; // Scooter
    static chargingStations = []; // ChargingStation

    static userList = []; // User

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
     * @description Method used to find a user form userList, returns User
     * @returns {User}
     */
    static getUser(userName){
        for (let i = 0; i < userList.length; i++){
            if (userName == this.userList[i].userName) {
                return userList[i]
            }
        }
    }

    /**
     * @param {string} serialNum scooter serial number
     * @description Method used to find a scooter from the scooter list
     * @returns {Scooter}
     */
    static getScooter(serialNum){
        for (let i = 0; i < allScooter.length; i++){
            if (serialNum == this.allScooters[i].serialNum) {
                return userList[i]
            }
        }
    }
}

module.exports = ScooterHire