const ChargingStation = require("../classes/h_ChargingStation");
const Battery = require("../classes/h_ChargingStation");
const Scooter = require("../classes/h_Scooter");
const ScooterHire = require("../classes/h_ScooterHire");

describe("Charging Station Test",()=>{
    test("Constructor Test", ()=>{
        const myChargingStation = new ChargingStation();
        expect(myChargingStation.name).toEqual("NameUndefined");
        expect(myChargingStation.totalPlaces).toEqual(1);

        expect(ScooterHire.chargingStations[0]).toEqual(myChargingStation);

        const myChargingStation2 = new ChargingStation("Test", 5);
        expect(myChargingStation2.name).toEqual("Test");
        expect(myChargingStation2.totalPlaces).toEqual(5);        
    });

    test("dockScooter Test", ()=>{
        const myChargingStation = new ChargingStation();
        const myScooter = new Scooter();

        myChargingStation.dockScooter(myScooter);

        expect(myChargingStation.dockedScooters[0]).toEqual(myScooter);
        expect(myScooter.chargingStationAttachedTo).toEqual(myChargingStation);

        expect(()=>{
            myChargingStation.dockScooter(myScooter)
        }).toThrow(Error("Can't dock scooter to station if its full"));
    });

    test("undockScooter Test", ()=>{
        const myChargingStation = new ChargingStation();
        const myScooter = new Scooter();

        myChargingStation.dockScooter(myScooter);

        expect(myChargingStation.dockedScooters[0]).toEqual(myScooter);
        expect(myScooter.chargingStationAttachedTo).toEqual(myChargingStation);

        myChargingStation.undockScooter(myScooter);

        expect(myChargingStation.dockedScooters[0]).toEqual(undefined);
        expect(myScooter.chargingStationAttachedTo).toEqual(null);
    });

    test("getNumberOfFreePlaces Test", ()=>{
        const myChargingStation = new ChargingStation("Test", 5);
        const myScooter = new Scooter();

        expect(myChargingStation.getNumberOfFreePlaces()).toEqual(5);

        myChargingStation.dockScooter(myScooter);

        expect(myChargingStation.getNumberOfFreePlaces()).toEqual(4);
    });
});