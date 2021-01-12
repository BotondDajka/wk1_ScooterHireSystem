const h_Bag = require("../classes/bag.js");
const h_Person = require("../classes/person.js");
const h_Airport = require("../classes/airport.js");
const h_Plane = require("../classes/plane.js");

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

    });
});