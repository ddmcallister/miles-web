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