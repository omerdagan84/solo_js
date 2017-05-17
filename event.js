function show() {
//	alert("Hi there");

	var x = document.getElementById('show');
	x.innerHTML = Date();
}

window.onload = function () {
	var x = document.getElementById('test');
	x.onclick = function() {
	var par = document.getElementById('show');
		par.innerHTML = "test";
	}
}
