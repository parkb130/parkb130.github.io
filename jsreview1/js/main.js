$("body").css
	("background-color", "blue");

for (var i=0; i < 100; i++) {
	$("body").append
	("<div class = 'dot'></div>");
}

var opacity = 0;

$(".dot").each(function() {
	$(this).css("opacity", opacity/100)
	opacity++;
});