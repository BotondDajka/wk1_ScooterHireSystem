const h_Bag = require("../classes/h_bag.js");
const h_Person = require("../classes/h_person.js");
const h_Airport = require("../classes/h_airport.js");
const h_Plane = require("../classes/h_plane.js");

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

        const smallBag = new h_Bag.Bag("1KG");

        const captain = new h_Person.Crewmember("Captain", "George",[smallBag])
        const betty = new h_Person.Crewmember("Flight Atendant", "Betty",[smallBag])
        const rebeca = new h_Person.Crewmember("Flight Atendant", "Rebeca",[smallBag])

        myPlane.setCrew([captain,betty,rebeca]);

    });
});