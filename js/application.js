window.onload = function() {
	alert("hey hey");
	var note = document.getElementById("test_note");
	TweenLite.to(note, 2, {rotation:"-360", transformOrigin:"0% 100%"});

 }