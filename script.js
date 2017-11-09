// $(document).ready(function(){
//     $('body').append('Hello World');
//     $('h1').css('color', 'red');
//     $('h1').append('hello world');
//     $('ul:first').append('<li>Thing One</li>');
//     $('ul:first').append('<li>Thing two</li>');
// });

var hero = new Object();
hero.element = 'hero';
hero.x=250;
hero.y=460;

var LEFT_KEY=37;
var RIGHT_KEY=39;
var lastLoopRun=0;

var controller = new Object();

function toggleKey(keyCode, isPressed){
    if (keyCode==LEFT_KEY){
        controller.left=isPressed;
    }
    if(keyCode==RIGHT_KEY){
        controller.right=isPressed;
    }

console.log(keyCode);
}

function setPosition(sprite) {
    var e = document.getElementById(sprite.element);
    e.style.left = sprite.x + 'px';
    e.style.top = sprite.y + 'px';
}

function handleControls(){
    if (controller.left){
        hero.x -=5
    }
    if (controller.right){
        hero.x +=5
    }
}
function loop(){
    handleControls();
    if(newDate().getTime() - lastLoopRun > 40){
        lastLoopRun= new Date().getTime();
    }
    setTimeout('loop():', 2);
}
document.onkeydown = function(evt){
 toggleKey(evt.keyCode, true);
 };
 document.onkeyup = function(evt){
         toggleKey(evt.keyCode, false);
};

setPosition(hero);
loop();