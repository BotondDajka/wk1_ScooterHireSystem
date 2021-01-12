const h_Bag = require("./classes/h_bag.js");
const h_Person = require("./classes/h_person.js");
const h_Airport = require("./classes/h_airport.js");
const h_Plane = require("./classes/h_plane.js");


let mySmallBag = new h_Bag.Bag("2KG");
let myBigBag = new h_Bag.Bag("15KG");

let bobTheTraveler = new h_Person.Person("Bob Bob",[mySmallBag,myBigBag]);

let airport = new h_Airport.Airport("The Magical Islands Int.Airport");

let airplane = new h_Plane.Plane(airport);

airplane.board(bobTheTraveler);


module.exports = { mySmallBag, myBigBag, bobTheTraveler, airport, airplane };