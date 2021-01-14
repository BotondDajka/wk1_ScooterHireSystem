/**
 * @class Parent Object of the Scooter Hire System
 */
class ScooterHire {
    /**@property {Array<Scooter>} allScooters List of every scooter*/
    static allScooters = [];
    /**@property {Array<Scooter>} availableScooters List of available scooters*/
    static availableScooters = [];

    /**@property {Array<ChargeStation>} chargingStations List of Charging Stations */
    static chargingStations = [];

    /**@property {Array<User>} userList List of registered users */
    static userList = [];

    /**
     * @method 
     * @name addUser  
     * @param {User} User instance of User
     * @description Method used to add new scooter to list of scooters
     */
    addUser(User){
        this.userList.push(User);
    }

    /**
     * @method 
     * @name addScooter
     * @param {Scooter} Scooter instance of Scooter
     * @description  Method used to add new scooter to list of scooters
     */
    addScooter(Scooter){
        this.allScooters.push(Scooter);
    }

    /**
     * @method
     * @name 
     */


}