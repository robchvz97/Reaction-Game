
document.getElementById("seconds").innerHTML = "0.00";

var totalFigures = 0;

function play(){
    var audio = document.getElementById("audio");
    audio.play();
}

var start = new Date().getTime();

function DrawFigures() {
    totalFigures += 1;
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    document.getElementById("seconds").innerHTML = timeTaken+" seconds.";

    var colors = ["red","blue","purple","black","white","orange"];
    var borderRadius = [0,50];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    var randomRadius = borderRadius[Math.floor(Math.random() * borderRadius.length)];

    var randomWidthandHeight = Math.floor(Math.random() * 120) + 15;
    var randomTop = Math.floor(Math.random() * 370) + 40;
    var randomLeft = Math.floor(Math.random() * 1210) +40;

    document.getElementById("figure").style.width = String(randomWidthandHeight)+"px";
    document.getElementById("figure").style.height =  String(randomWidthandHeight)+"px";
    document.getElementById("figure").style.backgroundColor = randomColor;
    document.getElementById("figure").style.top = String(randomTop)+"px";
    document.getElementById("figure").style.left = String(randomLeft)+"px";
    document.getElementById("figure").style.borderRadius = String(randomRadius)+"%";
   
    start = new Date().getTime();
    
}