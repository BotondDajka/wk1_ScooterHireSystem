class Bag {
    weight;
    constructor(weight){
        if (!weight){
            throw new Error("Bag must have a weight!");
        }
        this.weight = weight;
    }
}

class Person {
    name;
    bags;
    constructor(name, bags){
        if (!name || !bags){
            throw new Error("Person must have a name and array of Bag");
        }
        this.name = name;
        this.bags = bags;
    }
}

class Plane {
    passengers = [];
    destination;
    
    constructor(destination){
        if (!destination){
            throw new Error("Plane must have a destination");
        }
        this.destination = destination;
    }

    board(Person) {
        this.passengers.push(Person);
    }
}

class Airport {
    name;
    constructor(name){
        if (!name){
            throw new Error("Airport must have a name");
        }
        this.name = name;
    }
}

let mySmallBag = new Bag("2KG");
let myBigBag = new Bag("15KG");

let bobTheTraveler = new Person("Bob Bob",[mySmallBag,myBigBag]);

let airport = new Airport("The Magical Islands Int.AirPort");

let airplane = new Plane(airport);

airplane.board(bobTheTraveler);


module.exports = {Bag, Person, Plane, Airport, mySmallBag, myBigBag, bobTheTraveler, airport, airplane};