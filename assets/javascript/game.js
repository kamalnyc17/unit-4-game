var minT = 19;
var maxT = 120;
var maxG = 1;
var minG = 12;
var targetNo;
var gemNo = [];
var userTotal = 0;
var totalWin = 0;
var totalLose = 0;

/* uploading image files in an array */
var gemImage = [4];
gemImage[0] = "assets/images/crystal 1.jpg";
gemImage[1] = "assets/images/crystal 2.jpg";
gemImage[2] = "assets/images/crystal 3.jpg";
gemImage[3] = "assets/images/crystal 4.jpg";

/* user define function */
var resetScreen = function() {
    /* generating the random number */
    targetNo = Math.floor(Math.random() * (maxT - minT + 1)) + minT;
    $("#random-no-select").text(targetNo);

    /* gerating number for the gems */
    for(var i=0; i<4; i++){
        gemNo[i] = Math.floor(Math.random() * (maxG - minG + 1)) + minG;
        
        var imageCrystal = $("<img>");
        imageCrystal.addClass("crystal-image");
        imageCrystal.attr("src", gemImage[i] );
        imageCrystal.attr("data-crystalvalue", gemNo[i]);

        $("#crystals").append(imageCrystal);
    }

  }
  
/* script will execute after the DOM is loaded */
$(document).ready(function() {

    resetScreen();

    /* catching the on click event */
    $(".crystal-image").on("click", function() {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
    
        userTotal += crystalValue;    
    
        $("#current-score").text(userTotal);

        if (userTotal === targetNo) {     
            totalWin++;       
            $("#Note").text("You Win!");
            $("#winN").text(totalWin);
        }
    
        else if (userTotal >= targetNo) {   
            totalLose++;   
            $("#Note").text("You Lose!");
            $("#loseN").text(totalLose);
        }
    
      });

      
})