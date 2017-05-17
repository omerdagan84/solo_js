var t = setInterval(move, 50); 

// starting position
var pos = 0; 
var dir = 1;
//our box element
var box = document.getElementById("box");
var boxtext = document.getElementById("boxtext");

function move() {
	if (pos >= 150 ) {
		dir = -1;
		boxtext.innerHTML = "left";
	} else if (pos < 0) {
		dir = 1;
		boxtext.innerHTML = "right";
	}


	pos += dir;
	box.style.left = pos+"px"; //px = pixels
}
