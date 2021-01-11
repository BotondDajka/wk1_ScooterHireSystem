let john = {
    name: "John Doe",
    parents: [],
    childOf: function() {
        return this.parents.map(x => x.name + " | ");
    },
}

let johnJr = {
    name: "John Doe Jr",
    parents: [john],
    childOf: function() {
        return this.parents.map(x => x.name + " | ");
    },
}

let johnJrJr = {
    name: "John Doe Jr Jr",
    parents: [johnJr],
    childOf: function() {
        return this.parents.map(x => x.name + " | ");
    },
}


console.log(john.childOf())


