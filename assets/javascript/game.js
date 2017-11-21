

$("#G1").html("<img src=assets/images/cartman.png />");
$("#G2").html("<img src=assets/images/kyle.png />");
$("#G3").html("<img src=assets/images/kenny.png />");
$("#G4").html("<img src=assets/images/stan.png />");


var num = Math.floor((Math.random() * 100) + 1);


document.getElementById("targetScore").innerHTML = "Random Number " + num;



// cartman G1

var g1Num = Math.floor(Math.random() * ((10-1)+1) + 1);


document.getElementById("score").innerHTML = "Your Score " + g1Num;


// kyle G2

var g2Num = Math.floor(Math.random() * ((10-1)+1) + 1);


document.getElementById("score").innerHTML = "Your Score " + g2Num;

// kenny G3

var g3Num = Math.floor(Math.random() * ((10-1)+1) + 1);


document.getElementById("score").innerHTML = "Your Score " + g3Num;

// stan G4

var g4Num = Math.floor(Math.random() * ((10-1)+1) + 1);


document.getElementById("score").innerHTML = "Your Score " + g4Num;





