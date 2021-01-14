
/**
 * @class Parent Object of the Scooter Hire System
 * @property {Array<Scooter>} allScooters List of every scooter
 * @property {Array<Scooter>} availableScooters List of available scooters
 * @property {Array<ChargeStation>} chargingStations List of Charging Stations
 * @property {Array<User>} userList List of registered users
 */
export class ScooterHire {
    static allScooters = [];
    static availableScooters = [];

    static chargingStations = [];

    static userList = []
    /**
     * @param {User} User instance of User
     * @description Method used to add new scooter to list of scooters
     * @returns {void}
     */
    addUser(User){
        this.userList.push(User);
    }

    /**
     * @param {Scooter} Scooter instance of Scooter
     * @description  Method used to add new scooter to list of scooters
     * @returns {void}
     */
    addScooter(Scooter){
        this.allScooters.push(Scooter);
    }

    /**
     * @param {string} userName
     * @description Method used to find a user form userList, returns U
     * @returns {User}
     */
    getUser(userName){
        for (let i = 0; i < userList.length; i++){
            if (userName == this.userList[i].userList) {
                return userList[i]
            }
        }
    }
}
