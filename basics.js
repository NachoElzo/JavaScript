const prompt = require("prompt-sync")();

// SLICE + CONCATENATE
var name = prompt("Hello, enter you name: ")
//var messageCount = message.length
var firstL = name.slice(0,1)
var fToUpper = firstL.toUpperCase()
// display all the lenght of name
var rname = name.slice(1,name.length)
var rtoLower = rname.toLocaleLowerCase ()
console.log("Hello " + fToUpper + rtoLower)


//ARITHMETIC
var askDogAge = prompt ("Ingresa tu edad de perro para calcular tu edad humana ")
var humanAge = (askDogAge -2) *4 +21
console.log("tu edad humana es de: " + humanAge)

