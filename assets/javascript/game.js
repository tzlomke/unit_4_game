// Global Variables
var wins = 0;
var losses = 0;

// Game Function
function game() {

    // Sets Score to 0
    var score = 0;

    // Resets Counter Text
    $("#counter").text(score);

    // Random Target Number
    var targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);

    // Writes Random Target Number to DOM
    $("#random-number").text(targetNumber);
    
    // Crystals Random Value
    crystal1 = Math.floor(Math.random() * (12) + 1);
    crystal2 = Math.floor(Math.random() * (12) + 1);
    crystal3 = Math.floor(Math.random() * (12) + 1);
    crystal4 = Math.floor(Math.random() * (12) + 1);

    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    // Click Events
        // Adds crystal value to score
        // Writes new score amount to DOM
        // .off("click") gets rid of old event listener
    $("#crystal-1").off("click").on("click", function() {
        score += crystal1;
        $("#counter").text(score);
        return false;
    })

    $("#crystal-2").off("click").on("click", function() {
        score += crystal2;
        $("#counter").text(score);
        return false;
    })

    $("#crystal-3").off("click").on("click", function() {
        score += crystal3;
        $("#counter").text(score);
        return false;
    })

    $("#crystal-4").off("click").on("click", function() {
        score += crystal4;
        $("#counter").text(score);
        return false;
    })

    // Win & Loss Checker
    $(".crystals").on("click", function() {
        if (score === targetNumber) {
            wins++;
            $("#win").text(wins);
            $("#result-message").text("You won!");
            game();
        } else if (score >= targetNumber) {
            losses++;
            $("#result-message").text("You lost!");
            $("#loss").text(losses);
            game();
        }
    })  
}

// Starts Game on Page Load
game()