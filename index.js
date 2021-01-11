let john = {
    name: "John Doe",
    parents: [],
    childOf: function() {
        let parentsString = "";
        for (const parent in this.parents){
            parentsString += this.parents[parent].name + " " ;
        }
        return parentsString
    },
}


let johnJr = {
    name: "John Doe Jr",
    parents: [john],
    childOf: function() {
        let parentsString = "";
        for (const parent in this.parents){
            parentsString += this.parents[parent].name + " " ;
        }
        return parentsString
    },
}

let johnJrJr = {
    name: "John Doe Jr Jr",
    parents: [johnJr],
    childOf: function() {
        let parentsString = "";
        for (const parent in this.parents){
            parentsString += this.parents[parent].name + " " ;
        }
        return parentsString
    },
}


console.log(john.childOf())


