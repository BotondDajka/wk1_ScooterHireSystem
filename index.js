const ChargingStation = require("./classes/h_ChargingStation")
const ScooterHire = require("./classes/h_ScooterHire")
const Scooter = require("./classes/h_Scooter.js")

const myHire = new ScooterHire();

console.log(ScooterHire.allScooters.length)
console.log(ScooterHire.allScooters)
console.log(ScooterHire)
// let myChargingStation = new ChargingStation("My First Charing Station",5);


let myScooter1 = new Scooter()
let myScooter2 = new Scooter()
let myScooter3 = new Scooter()


console.log("Scooter1 " + myScooter1.serialNum)
console.log("Scooter2 " + myScooter2.serialNum)

console.log("Scooter3 " + myScooter3.serialNum)
myScooter3.serialNum = "SN004"
console.log("Scooter3 after change " + myScooter3.serialNum)

let myScooter4 = new Scooter()

console.log("Scooter4 " + myScooter4.serialNum + "<-- This should be unique too")



    // myScooter1.battery.chargeLevel = 0;
    // myScooter1.battery.charge(()=>{});

    const readline = require('readline');


    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question(">", (answer)=>{
        console.log(answer+answer)
    });



