const Battery = require("../classes/h_Battery");

describe("Battery Test", ()=>{

    test("Constructor test", ()=>{
        const myBattery = new Battery()

        expect(myBattery.isCharging).toEqual(false);
        expect(myBattery.chargeLevel).toEqual(100);
    });

    test("Charge Test", async ()=>{
        const myBattery = new Battery()

        myBattery.chargeLevel = 0;
        expect(myBattery.chargeLevel).toEqual(0);
        myBattery.charge(()=>{
            expect(myBattery.chargeLevel).toEqual(100);
            expect(myBattery.isCharging).toEqual(false);
        });

        expect(myBattery.isCharging).toEqual(true);
        expect(myBattery.chargeLevel).toEqual(5);
    });

    test("Charge Test Part 2", ()=>{
        const myBattery = new Battery();

        myBattery.charge(()=>{
            expect(myBattery.isCharging).toEqual(false);
        });
    });

    test("isCharged Test", ()=>{
        const myBattery = new Battery()
        expect(myBattery.isCharged()).toEqual(true);
        myBattery.chargeLevel = 0;
        expect(myBattery.isCharged()).toEqual(false);
    });

    test("getCharge Test", ()=>{
        const myBattery = new Battery()
        expect(myBattery.getCharge()).toEqual(100);
        myBattery.chargeLevel = 50;
        expect(myBattery.getCharge()).toEqual(50);
    });

    test("Use battery Test", ()=>{
        const myBattery = new Battery()
        expect(myBattery.getCharge()).toEqual(100);

        myBattery.use(5);
        expect(myBattery.getCharge()).toEqual(95);

        myBattery.use(100);
        expect(myBattery.getCharge()).toEqual(0);
    });

});