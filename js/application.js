function main() {

var open = false;

$("#cn-button").click(function() {
    $("div#cn-wrapper").toggleClass("opened-nav");
    if(!open) {
      this.innerHTML = "Close";
    }
    else{
      this.innerHTML = "Menu";
    }
    open = !open;
});

$(".vid-select").click(function() {
	$("#vid-blank").addClass("hide");
	$(".vids").addClass("hide");
	var geteyedee = $(this).attr('id');
	var vidStep2 = geteyedee + "_on";
	var vidStep3 = document.getElementById(vidStep2);
	$(vidStep3).removeClass("hide");

});

$(".thumbnail").click(function() {
	if ($(this).attr('src') !== $("#mainImg").attr('src')) {
		var imgClick = $(this).attr('src');
		$("#mainImg").attr('src', imgClick);
	}
});

$("#forward").click(function() {
	var currentImg = $("#mainImg").attr('src');
	console.log(currentImg);

			var ba = currentImg.replace(/^.*[\\\/]/, '');
			var r = ba.replace(".jpg", '');
			var all = r.replace("img", '');
			if(r == 17){
     				r = 0;
     				var img = document.getElementById('mainImg');
     				img.src = 'img/0.jpg';
     			}
			else {
					r++;
					newVar = "img/" + r + ".jpg";
					var img = document.getElementById('mainImg');
					img.src = newVar;}



});


}



$(document).ready(main);