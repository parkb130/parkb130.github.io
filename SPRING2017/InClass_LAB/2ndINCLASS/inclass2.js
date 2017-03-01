var names = [
	"brendon"
	"hello"
	"world"
];

function get_a_name(whichone) {
	var result = names[random_round(0,names.length)];
	return [result, Math.floor(Math.random()*100), "hello"];

	console.log("this will never happen")
}


function random_round(min, max) {
	var range = max - min
	var offset = min;
	return Math.floor(Math.random()*range + offset);
}








function bogus(whichone) {
	var result = names[whichone];
}