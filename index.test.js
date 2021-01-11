const airports = require("./index");

describe("check airplane", ()=>{

    test("destination", () =>{
        expect(airports.airplane.destination.name).toEqual("The Magical Islands Int.AirPort");
    });

    test("passangers", () =>{
        expect(airports.airplane.passengers).toEqual([airports.bobTheTraveler]);
    });

    test("Bobs Luggage", () =>{
        expect(airports.airplane.passengers[0].bags).toEqual([airports.mySmallBag, airports.myBigBag]);
        expect(airports.airplane.passengers[0].bags[0].weight).toEqual("2KG");
        expect(airports.airplane.passengers[0].bags[1].weight).toEqual("15KG");
    });

});