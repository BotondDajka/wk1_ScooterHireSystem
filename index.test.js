const h_Bag = require("./classes/bag.js");
const h_Person = require("./classes/person.js");
const h_Airport = require("./classes/airport.js");
const h_Plane = require("./classes/plane.js");

const airports = require("./index.js")


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


describe("check headers", ()=>{

    test("airport header", () =>{
        let myAirport = new h_Airport.Airport("My Little Airport");
        
        expect(myAirport.name).toEqual("My Little Airport");
    });

    test("bag header", () =>{
        let myBag = new h_Bag.Bag("5KG");

        expect(myBag.weight).toEqual("5KG");
    });

    test("person header", () =>{
        let myBag = new h_Bag.Bag("5KG");
        let mySecondBag = new h_Bag.Bag("15KG");
        let myPerson = new h_Person.Person("John",[myBag,mySecondBag]);

        expect(myPerson.name).toEqual("John");

        expect(myPerson.bags).toEqual([myBag,mySecondBag]);

        expect(myPerson.bags[0].weight).toEqual("5KG");
        expect(myPerson.bags[1].weight).toEqual("15KG");
    });

    test("plane header", () =>{
        let myAirport = new h_Airport.Airport("My Little Airport");
        let myPlane = new h_Plane.Plane(myAirport);
        
        expect(myPlane.destination).toEqual(myAirport);

        expect(myPlane.destination.name).toEqual("My Little Airport");
    });

});