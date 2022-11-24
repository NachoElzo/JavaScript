//how to acces to elements in the DOM
//console.log (document.firstElementChild.lastElementChild);

//How to select an elemet by taganme and change the style
document.getElementsByTagName("li")[2].style.color = "red";
//How to get the lenght of an array 
console.log("The total count of the list elemetns are: " + document.getElementsByTagName("li").length)
//Get element by Id
document.getElementById("cbox2").click()
//Get by class name
console.log("The elements with the class liElement are: " + document.getElementsByClassName(".liElement"))
//how to change the text
document.querySelector("h3").innerHTML = "<em>I CAN CHANGE ALL THE H3 TAGS WITH JS</em>"
//convined selectors (selecting class + ancletag)
console.log("the value of the object  obtained with convined selectors are: " + document.querySelector(".liElement a"))
//Geting all the elements
console.log("the value of the object  obtained with convined selectors are: " + document.querySelectorAll("#li .liElement"))
//changing font size
document.querySelector("p").style.fontSize = "3rem"
//changing background color of an object
document.querySelector("button").style.backgroundColor = "red";
//changing the class from css 
document.querySelector("#bhidden").classList.add("buttonHidden")
//How to get the text from an object
console.log("i get from the h3 header the following text: " + document.querySelector("h3").textContent)
//How to change attributes of an object
document.querySelector("#googleLink").setAttribute("href", "http://www.yahoo.com")