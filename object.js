/* objects */
var person = {
	name: "John",
	age: 31,
	favColor: "green",
	height: 183
};

var age_a = person.age;
var age_b = person['age'];

document.write(age_a + " " + age_b + "<br />");

var course = {name: "JS", lessons: 41};
document.write(course.name.length);
//Outputs 2


