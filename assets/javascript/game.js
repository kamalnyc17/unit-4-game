var minT = 19;
var maxT = 120;
var maxG = 1;
var minG = 12;
var targetNo;
var gemNo = [];
var userTotal = 0;
var totalWin = 0;
var totalLose = 0;
var myCount = 0;

/* uploading image files in an array */
var gemImage = [4];
gemImage[0] = "assets/images/crystal 1.jpg";
gemImage[1] = "assets/images/crystal 2.jpg";
gemImage[2] = "assets/images/crystal 3.jpg";
gemImage[3] = "assets/images/crystal 4.jpg";

/* function to reset screen */
var resetScreen = function() {
    userTotal = 0;
    $("#crystals").empty();
    $(".crystal-image").remove();
    $("img").remove();

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
        console.log( "initial gem value: " + imageCrystal.attr("data-crystalvalue"));
    }

    processData();
}

// this function will run the actual game
var processData = function() {
    
    /* checking to make sure user clicked on the gems */
    $(".crystal-image").on("click", function() {
    
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        userTotal += crystalValue;   
        
        $("#current-score").text(userTotal);
    
        if (userTotal === targetNo) {     
            totalWin++;       
            $("#Note").text("You Win!");
            $("#winN").text(totalWin);
            $("#current-score").text("0");
    
            // calling resetScree() in a recursive manner to initialize the screen and start a new game at the same time
            resetScreen();
        }
        
        else if (userTotal > targetNo) {   
            totalLose++;   
            $("#Note").text("You Lose!");
            $("#loseN").text(totalLose);
            $("#current-score").text("0");    
            
            // calling resetScree() in a recursive manner to initialize the screen and start a new game at the same time
            resetScreen();
        }
        
    });
}

/* script will execute after the DOM is loaded */    
$(document).ready(function() {
    resetScreen();
})
