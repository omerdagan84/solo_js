// arrayes - zero indexed
var courses = new Array("HTML", "CSS", "JS"); 
var course = courses[0]; // HTML
courses[1] = "C++"; //Changes the second element 

var classes = new Array(3);
classes[0] = "HTML";
classes[1] = "CSS";
classes[2] = "JS";
classes[3] = 4;

document.write(classes[1]);
document.write(classes[3]);
/* an empty array can also be created  - and the elements are dynamically created
var classes = new Array();*/
/// the Math object
// does NOT need to be initialised
// has several prpoperties like PI an E 
// TODO find full list
document.write(Math.PI);
var number = Math.sqrt(4); 
document.write(number);

/* mini app to cacuate sqrt */
var n = prompt("Enter a number", "");
var answer = Math.sqrt(n);
alert("The square root of " + n + " is " + answer);
