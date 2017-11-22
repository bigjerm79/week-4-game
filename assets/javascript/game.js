

$("#SP1").html("<img src=assets/images/cartman.png />");
$("#SP2").html("<img src=assets/images/kyle.png />");
$("#SP3").html("<img src=assets/images/kenny.png />");
$("#SP4").html("<img src=assets/images/stan.png />");


var targetNum = Math.floor((Math.random() * 100) + 1);


document.getElementById("targetScore").innerHTML = "Random Number " + targetNum;


var wins = 0;
var losses = 0;
var urscore =0;



$(document)
      // alert('button clicked');

    var G1 = Math.floor(Math.random() * (10-1) + 1);
    var G2 = Math.floor(Math.random() * (10-1) + 1);
    var G3 = Math.floor(Math.random() * (10-1) + 1);
    var G4 = Math.floor(Math.random() * (10-1) + 1);

    console.log(G1);
    console.log(G2);
    console.log(G3);
    console.log(G4);

$('.children').on("click", function() {
	var who = $(this).attr('id')

	if (who === "SP1") {
		urscore = urscore + G1;

  $("#score").html("Your Score " + urscore);	

		
		
     } else if (who === "SP2") {
     	urscore = urscore + G2;
  
  $("#score").html("Your Score " + urscore);

     } else if (who === "SP3") {
     	urscore = urscore + G3;
  
  $("#score").html("Your Score " + urscore);

     } else if (who === "SP4") {
     	urscore = urscore + G4;
  
  $("#score").html("Your Score " + urscore);

    }
})
	
 // function checkScore() {
 //        if (urscore < targetNum) {
 //            return;
 //        } else if
 //                (urscore === targetNum) {
 //                	wins++;

 //            $('#win').html("WINS: " +wins); 

	//          }   	
           

       

    
    



// cartman G1

// var g1Num = Math.floor(Math.random() * ((10-1)+1) + 1);

// console.log(g1Num)
// document.getElementById("score").innerHTML = "Your Score " + g1Num;


// kyle G2

// var g2Num = Math.floor(Math.random() * ((10-1)+1) + 1);


// document.getElementById("score").innerHTML = "Your Score " + g2Num;

// kenny G3

// var g3Num = Math.floor(Math.random() * ((10-1)+1) + 1);


// document.getElementById("score").innerHTML = "Your Score " + g3Num;

// stan G4

// var g4Num = Math.floor(Math.random() * ((10-1)+1) + 1);


// document.getElementById("score").innerHTML = "Your Score " + g4Num;


 



// });



