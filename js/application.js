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
	var moveDisp = $(".disp").attr('id');


	var currentImgFor = $("#mainImg").attr('src');
	var forwA = currentImgFor.replace(/^.*[\\\/]/, '');
	var forwB = forwA.replace(".jpg", '');
	var all = forwB.replace("img", '');
	if(forwB == 17){
			forwB = 0;
			var img = document.getElementById('mainImg');
			img.src = 'img/0.jpg';
		}
	else {
		forwB++;
		newVar = "img/" + forwB + ".jpg";
		var img = document.getElementById('mainImg');
		img.src = newVar;
	}
});

$("#back").click(function() {
	var currentImgBack = $("#mainImg").attr('src');
	var backA = currentImgBack.replace(/^.*[\\\/]/, '');
	var backB = backA.replace(".jpg", '');
	var all = backB.replace("img", '');
	if(backB == 0){
		backB = 17;
		var img = document.getElementById('mainImg');
		img.src = 'img/17.jpg';
	}
	else {
		backB--;
		newVar = "img/" + backB + ".jpg";
		var img = document.getElementById('mainImg');
		img.src = newVar;	
	}

	

});

$(window).load(function() {
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
   
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });
});

}



$(document).ready(main);