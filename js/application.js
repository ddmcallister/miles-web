/*window.onload = function() {

    var width, height, largeHeader, canvas, ctx, target, animateHeader = true;

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById("trumpet-canvas");
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');


        }
}

	var note = document.getElementById("test_note");
    var notes = [
        {url: "../img/Music-dotnote.svg"},
        {url: "../img/Music-sixteenthnote.svg"},
        {url: "../img/Music-sixteenthnote.svg"},
        {url: "../img/Music-sixteenthrest.svg"},
        ];

    for (i=0; i<notes.length; i++) {
        note.background = notes(i);
    }*/

function main() {
var open = false;

$(".cn-button").click(function() {
    $(".cn-wrapper").toggleClass('opened-nav');

    if(!open) {
      this.innerHTML = "Close";
    }
    else{
      this.innerHTML = "Menu";
    }
    open = !open;

    function closeWrapper(){
    $(".cn-wrapper").removeClass('opened-nav');
  }
});

}

$(document).ready(main);