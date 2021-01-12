const h_Bag = require("../classes/bag.js");
const h_Person = require("../classes/person.js");
const h_Airport = require("../classes/airport.js");
const h_Plane = require("../classes/plane.js");

const airports = require("../index.js")


describe("check headers", ()=>{
    test("plane header", () =>{
        let myAirport = new h_Airport.Airport("My Little Airport");
        let myPlane = new h_Plane.Plane(myAirport);
        
        expect(myPlane.destination).toEqual(myAirport);

        expect(myPlane.destination.name).toEqual("My Little Airport");

        expect(() => {
            let fail = new h_Plane.Plane();
        }).toThrow("Plane must have a destination");
    });
});