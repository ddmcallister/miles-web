(function() {

/*var width;
var height;
var largeHeader;
var canvas = true;*/ 
//var ctx;
var target;
var notes = [
{url: "../img/Music-dotnote.svg"},
{url: "../img/Music-sixteenthnote.svg"},
{url: "../img/Music-sixteenthnote.svg"},
{url: "../img/Music-sixteenthrest.svg"},
];
var animateHeader = true;
    
    //initHeader();
    addListeners();
    initAnimation();


function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById("trumpet-canvas");
        canvas.width = width;
        canvas.height = height;
        var ctx = canvas.getContext('2d');

        notes = [];
        for(var x = 0; x < 480; x++) {
            addNote(x*10);
        }

    }

 /*       function addNote(delay) {
        setTimeout(function() {
            var t = new Note();
            triangles.push(t);
            tweenTriangle(t);
        }, delay);
    }*/

        function initAnimation() {
        animate();
    }

    function tweenNote(note) {
    	var t = Math.random()*(2*Math.PI);
    	var x = (200+Math.random()*100)*Math.cos(t) + width*0.5;
        var y = (200+Math.random()*100)*Math.sin(t) + height*0.5-20;
        var time = 4+3*Math.random();

        TweenLite.to(note.pos, time, {x: x,
            y: y, ease:Circ.easeOut,
            onComplete: function() {
            	console.log("hey hey");
                note.init();
                tweenNote(note);
        }});
    }

        function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        //window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

        function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in notes) {
                notes[i].draw();
            }
        }
        -webkit-requestAnimationFrame(animate);
    }

    /*function Note() {
        var _this = this;

            (function() {
            _this.coords = [{},{},{}];
            _this.pos = {};
            init();
        })();

                function init() {
            _this.pos.x = width*0.5;
            _this.pos.y = height*0.5-20;
            _this.coords[0].x = -10+Math.random()*40;
            _this.coords[0].y = -10+Math.random()*40;
            _this.coords[1].x = -10+Math.random()*40;
            _this.coords[1].y = -10+Math.random()*40;
            _this.coords[2].x = -10+Math.random()*40;
            _this.coords[2].y = -10+Math.random()*40;
            _this.scale = 0.1+Math.random()*0.3;
            //_this.color = colors[Math.floor(Math.random()*colors.length)];
            setTimeout(function() { _this.alpha = 0.8; }, 10);
        }

                this.init = init;
    }*/

    })();


