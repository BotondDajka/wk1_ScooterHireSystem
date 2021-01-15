const h_ScooterHire = require("./classes/h_ScooterHire")


console.log(h_ScooterHire.ScooterHire.allScooters.length)
console.log(h_ScooterHire.ScooterHire.allScooters)
console.log(h_ScooterHire.ScooterHire)
let myChargingStation = new h_ScooterHire.ChargingStation("My First Charing Station",5);


let myScooter1 = new h_ScooterHire.Scooter()
let myScooter2 = new h_ScooterHire.Scooter()
let myScooter3 = new h_ScooterHire.Scooter()


console.log("Scooter1 " + myScooter1.serialNum)
console.log("Scooter2 " + myScooter2.serialNum)

console.log("Scooter3 " + myScooter3.serialNum)
myScooter3.serialNum = "SN004"
console.log("Scooter3 after change " + myScooter3.serialNum)

let myScooter4 = new h_ScooterHire.Scooter()

console.log("Scooter4 " + myScooter4.serialNum + "<-- This should be unique too")





