const h_Bag = require("../classes/h_bag.js");
const h_Person = require("../classes/h_person.js");
const h_Airport = require("../classes/h_airport.js");
const h_Plane = require("../classes/h_plane.js");

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