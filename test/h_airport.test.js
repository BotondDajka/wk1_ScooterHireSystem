const h_Bag = require("../classes/h_bag.js");
const h_Person = require("../classes/h_person.js");
const h_Airport = require("../classes/h_airport.js");
const h_Plane = require("../classes/h_plane.js");

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


               // expect(async () => {
        //     const airport2 = await airportNotInJson.getInfo().catch(err => {throw err})
        // }).toThrow("Airport name not found within file"); 

        //await airportNotInJson.getInfo()
        // expect( async () => {
        //     await airportNotInJson.getInfo()
        // }).reject.toThrow("Airport name not found within file");
    })
    test("airport that doesnt exist", async () => {
        const airportNotInJson = new h_Airport.Airport("Easter Island")

        //await expect(airportNotInJson.getInfo()).rejects.toThrow("Airport name not found within file");
        //const result = await airportNotInJson.getInfo().reject

        await expect(airportNotInJson.getInfo()).rejects.toBeInstanceOf(Error);

    })
});