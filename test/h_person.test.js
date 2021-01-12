const h_Bag = require("../classes/h_bag.js");
const h_Person = require("../classes/h_person.js");
const h_Airport = require("../classes/h_airport.js");
const h_Plane = require("../classes/h_plane.js");

const airports = require("../index.js")

describe("check headers", ()=>{
    test("person header", () =>{
        let myBag = new h_Bag.Bag("5KG");
        let mySecondBag = new h_Bag.Bag("15KG");
        let myPerson = new h_Person.Person("John",[myBag,mySecondBag]);

        expect(myPerson.name).toEqual("John");

        expect(myPerson.bags).toEqual([myBag,mySecondBag]);

        expect(myPerson.bags[0].weight).toEqual("5KG");
        expect(myPerson.bags[1].weight).toEqual("15KG");

        expect(() => {
            let fail = new h_Person.Person;
        }).toThrow("Person must have a name and array of Bag");

        const mike = new h_Person.Passenger("H78568", "Mike",[myBag,mySecondBag]);
        const captain = new h_Person.Crewmember("Captain", "George", [mySecondBag]);

        expect(mike.name).toEqual("Mike");
        expect(mike.ticketNumber).toEqual("H78568");
        expect(mike.bags).toEqual([myBag,mySecondBag]);
        expect(mike instanceof h_Person.Person).toBeTruthy();
        expect(captain instanceof h_Person.Person).toBeTruthy();
    });
});