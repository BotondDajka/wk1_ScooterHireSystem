function childOf(){
    return this.parents.map(x => x.name + " | ");
}

let john = {
    name: "John Doe",
    parents: [],
    childOf: childOf
}


let johnJr = {
    name: "John Doe Jr",
    parents: [john],
    childOf: childOf
}

let johnJrJr = {
    name: "John Doe Jr Jr",
    parents: [johnJr],
    childOf: childOf
}

module.exports = {john, johnJr, johnJrJr}

console.log(john.childOf())


