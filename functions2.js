//COMPARES IF THE ITEMS IS ON THE LIST

const prompt = require("prompt-sync")();

/*
var userr = prompt("Hola, escribe tu usuario ");
var guests = ['jose', 'pedro', 'alejandro', 'alicia', 'solange'];

function login() {
    if (guests.includes(userr)) {
        console.log("bienvenido " + userr);
        return userr;
    }
    else {
        console.log(userr + " you are not in the guest list");
    }

}
login()
*/


//INCLUDES ITEMS TO A LIST AND EXCLUDE MULTIPLES OF X
/*var list = []
var add = 0;

function addItems() {
    console.log("la lista contiene: " + list);
    add++;
    if (add %3 === 0 && add %5 === 0 ){
        list.push("FIZZBUZZ")

    }
    else if (add % 3 === 0) {
        list.push("fizz");
    }
    else if
        (add % 5 === 0)
        list.push("buzz");

    else {
        list.push(add)
    }



}

addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()
addItems()

*/

//GET RANDOM ELEMENT FROM A LIST


var friends = ['Solange', 'Alicia', 'Jose', 'Francisco', 'Javier', 'Carlos', 'Matias',
'Marcelo', 'Juan', 'Luis', 'Daniel', 'Daniela', 'Rolando', 'Arturo']

function getRandomeFriend (){
    var fLenght = friends.length;
    var frandom = Math.floor(Math.random()*fLenght)
    var randomPosition = friends[frandom];
    console.log ("The choose person is: " + randomPosition);

}

getRandomeFriend()