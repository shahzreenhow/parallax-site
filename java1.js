var container = document.getElementById("container");

var layerOne = document.getElementById("layerOne");

var mouseX = 0;
var mouseY = 0;

var centerScreen = (3000/2) - (3000/2);


window.addEventListener("mousemove", onMouseMove);

function onMouseMove (event) {
    console.log (event.pageX);

    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY;

    layerOne.style.left = (-mouseX * 0.08) + centerScreen +"px" ;
    layerTwo.style.left = (-mouseX * 0.07) + centerScreen +"px" ;
    layerThree.style.left = (-mouseX * 0.06) + centerScreen +"px" ;
    layerFour.style.left = (-mouseX * 0.05) + centerScreen +"px" ;
    layerFive.style.left = (-mouseX * 0.04) + centerScreen +"px" ;
    layerSix.style.left = (-mouseX * 0.03) + centerScreen +"px" ;
    layerSeven.style.left = (-mouseX * 0.02) + centerScreen +"px" ;
}