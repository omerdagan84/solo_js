/* objects */
var person_lit = {
	name: "John",
	age: 31,
	favColor: "green",
	height: 183
};

var age_a = person_lit.age;
var age_b = person_lit['age'];

document.write(age_a + " " + age_b + "<br />");

//object constructor example
function person(name, age) {
	this.name = name;
	this.age = age;
}

var person_a = new person("John", 21);
var person_b = new person("Amy", 22);

document.write("IS THIS WORKING");

document.write(person_a.name);   
document.write(person_b.name);   
var course = {
	name: "JS", 
	lessons: 41
};

document.write(course.name.length);
//Outputs 2

