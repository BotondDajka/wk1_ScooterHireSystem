
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

module.exports = ScooterHire