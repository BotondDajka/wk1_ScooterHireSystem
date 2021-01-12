const h_Bag = require("../classes/bag.js");
const h_Person = require("../classes/person.js");
const h_Airport = require("../classes/airport.js");
const h_Plane = require("../classes/plane.js");

const airports = require("../index.js")


describe("check headers", ()=>{
    test("bag header", () =>{
        let myBag = new h_Bag.Bag("5KG");

        expect(myBag.weight).toEqual("5KG");

        expect(() => {
            let fail = new h_Bag.Bag();
        }).toThrow("Bag must have a weight!");
    });
});