const h_Bag = require("../classes/h_bag.js");
const h_Person = require("../classes/h_person.js");
const h_Airport = require("../classes/h_airport.js");
const h_Plane = require("../classes/h_plane.js");

const airports = require("../index.js")


describe("check airplane index.js", ()=>{
    test("destination", () =>{
        expect(airports.airplane.destination.name).toEqual("The Magical Islands Int.Airport");
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



