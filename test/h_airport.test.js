const h_Bag = require("../classes/bag.js");
const h_Person = require("../classes/person.js");
const h_Airport = require("../classes/airport.js");
const h_Plane = require("../classes/plane.js");

const airports = require("../index.js")


describe("check headers", ()=>{
    test("airport header", () =>{
        let myAirport = new h_Airport.Airport("My Little Airport");
        
        expect(myAirport.name).toEqual("My Little Airport");

        expect(() => {
            let fail = new h_Airport.Airport();
        }).toThrow("Airport must have a name");
    });
});

describe("async stuff", () => {
    test("airports have a city", async () => {
        const CDG = new h_Airport.Airport("CDG")
        const airport = await CDG.getInfo()
        expect(airport.city).toEqual("Paris")
    })
});