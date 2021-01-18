const ChargingStation = require("../classes/h_ChargingStation");
const Battery = require("../classes/h_ChargingStation");
const Scooter = require("../classes/h_Scooter");
const ScooterHire = require("../classes/h_ScooterHire");
const User = require("../classes/h_User");


describe("ScooterHire Test", ()=>{
    test("Static State Test", ()=>{
        expect(ScooterHire.allScooters).toEqual([]);
        expect(ScooterHire.availableScooters).toEqual([]);
        expect(ScooterHire.chargingStations).toEqual([]);
        expect(ScooterHire.userList).toEqual([]);

        const myScooter = new Scooter();
        expect(ScooterHire.allScooters).toEqual([myScooter]);

        const myUser = new User("bob");
        expect(ScooterHire.userList).toEqual([myUser]);
    });

    test("static addUser Test", () => {
        const myUser = new User("bob55");
        ScooterHire.addUser(myUser);
    });

    test("static getUser Test", () => {
        const otherUser = new User("1");
        const otherUser2 = new User("2");
        const myUser = new User("me");
        const otherUser3 = new User("3");

        expect(ScooterHire.getUser("me")).toEqual(myUser);
    });

    test("static getScooter Test", () => {
        const otherScooter = new Scooter();
        const otherScooter2 = new Scooter();
        const otherScooter3 = new Scooter();
        const myScooter = new Scooter();
        const otherScooter4 = new Scooter();
        const otherScooter5 = new Scooter();

        expect(ScooterHire.getScooter(myScooter.serialNum)).toEqual(myScooter);
    });
});