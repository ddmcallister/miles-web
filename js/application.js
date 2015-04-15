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

}

$(document).ready(main);