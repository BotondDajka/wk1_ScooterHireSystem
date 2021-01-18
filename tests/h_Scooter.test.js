const ChargingStation = require("../classes/h_ChargingStation");
const Battery = require("../classes/h_ChargingStation");
const Scooter = require("../classes/h_Scooter");
const ScooterHire = require("../classes/h_ScooterHire");


describe("Scooter Test", ()=>{
    test("Constructor Test", ()=>{
        const myScooter = new Scooter();

        expect(myScooter.isHired).toEqual(false);
        expect(myScooter.chargingStationAttachedTo).toEqual(null);
        expect(myScooter.hiredBy).toEqual(null);

        expect(myScooter.serialNum).toEqual("SN001");

        myScooter.serialNum = "SN002";

        const myScooter2 = new Scooter();

        expect(myScooter2.serialNum).toEqual("SN003");
    });

    test("useScooter Test", ()=>{
        const myScooter = new Scooter();

        expect(myScooter.battery.getCharge()).toEqual(100);

        myScooter.useScooter(50);

        expect(myScooter.battery.getCharge()).toEqual(50);
    });

    test("setChargingStation Test", ()=>{
        const myScooter = new Scooter();
        const myChargingStation = new ChargingStation();

        myScooter.setChargingStation(myChargingStation);

        expect(myScooter.chargingStationAttachedTo).toEqual(myChargingStation);
    });

    test("removeChargingStation Test",()=>{
        const myScooter = new Scooter();
        const myChargingStation = new ChargingStation();

        myScooter.setChargingStation(myChargingStation);

        expect(myScooter.chargingStationAttachedTo).toEqual(myChargingStation);

        myScooter.removeChargingStation();

        expect(myScooter.chargingStationAttachedTo).toEqual(null);
    });
});
