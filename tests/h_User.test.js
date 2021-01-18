const ChargingStation = require("../classes/h_ChargingStation");
const Battery = require("../classes/h_ChargingStation");
const Scooter = require("../classes/h_Scooter");
const ScooterHire = require("../classes/h_ScooterHire");
const User = require("../classes/h_User");

describe("User Test", () => {
    test("constructor Test", () => {
        const myUser = new User("bob");
        expect(myUser.userName).toEqual("bob");
        
        expect(() => {
            const myUser2 = new User();
        }).toThrow("Username of User can not be empty");

        expect(() => {
            const myUser2 = new User("    ");
        }).toThrow("Username of User can not be empty");


        expect(() => {
            const myUser2 = new User("bob");
            const myUser3 = new User("bob2");
            const myUser4 = new User("bob");
        }).toThrow("Username of User must be unique");
    });

    test("setHiredScooter Test", () => {
        const myUser = new User("bobby");
        const myScooter = new Scooter();

        myUser.setHiredScooter(myScooter);

        expect(myUser.hiredScooter).toEqual(myScooter);
        expect(myUser.hiredScooter.hiredBy).toEqual(myUser);
        expect(myUser.hiredScooter.isHired).toEqual(true);
    });

    test("setHiredScooter Test", () => {
        const myUser = new User("bobby595");
        const myScooter = new Scooter();

        myUser.setHiredScooter(myScooter);

        expect(myUser.hiredScooter).toEqual(myScooter);
        expect(myUser.hiredScooter.hiredBy).toEqual(myUser);
        expect(myUser.hiredScooter.isHired).toEqual(true);

        myUser.returnScooter();

        expect(myUser.hiredScooter).toEqual(null);
        expect(myScooter.hiredBy).toEqual(null);
        expect(myScooter.isHired).toEqual(false);
    });

    test("getScooterAtStation Test", () => {
        const myStation = new ChargingStation("lon01",5);
        const myUser = new User("bigBobby55");
        const myScooter = new Scooter();

        myStation.dockScooter(myScooter)

        expect(myUser.getScooterAtStation("lon01")).toEqual(myScooter);

        expect(() => {
            expect(myUser.getScooterAtStation("lon05")).toEqual(myScooter);
        }).toThrow("Given station \"lon05\"doesn't exist");

    });

    test("getScooterAtStation no scooters Test", () => {
        const myStation = new ChargingStation("lon03",5);
        const myUser = new User("BigBobby12");
        expect(myUser.getScooterAtStation("lon03")).toEqual(null);
    });

    test("getScooterAtStation scooters all hired Test", () => {
        const myStation = new ChargingStation("lon099",5);
        const myScooter = new Scooter();
        const myUser = new User("BigBobby12323");

        myStation.dockScooter(myScooter);

        myStation.dockedScooters[0].isHired = true;

        expect(myUser.getScooterAtStation("lon099")).toEqual(null);
    });

    test("getScooterAtStation station doesnt exist Test", () => {
        const myStation = new ChargingStation("lon02",5);
        const myUser = new User("bigBobby545");
        expect(() => {
            myUser.getScooterAtStation("lon05");
        }).toThrow("Given station \"lon05\"doesn't exist");
        
    });
});