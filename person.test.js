const person = require("./person");

describe("person", ()=>{

    test("check names", () =>{
        expect(person.john.name).toEqual("John Doe")
        expect(person.johnJr.name).toEqual("John Doe Jr")
        expect(person.johnJrJr.name).toEqual("John Doe Jr Jr")
    });

    test("check parants", () =>{
        expect(person.john.parents).toEqual([])
        expect(person.johnJr.parents).toEqual([person.john])
        expect(person.johnJrJr.parents).toEqual([person.johnJr])
    });

    test("check childOf", () =>{
        expect(person.john.childOf()).toEqual([])
        expect(person.johnJr.childOf()).toEqual(["John Doe | "])
        expect(person.johnJrJr.childOf()).toEqual(["John Doe Jr | "])
    });

});