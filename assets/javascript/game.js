// Global Variables
var score = 0;
var total = 0;
var wins = 0;
var losses = 0;
var targetNumber;
var crystal1;
var crystal2;
var crystal3;
var crystal4;



// New Game Function
function newGame() {
    total = 0;

    // Random Number
    targetNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    
    // Crystals Random Value
    crystal1 = Math.floor(Math.random() * (12) + 1);
    crystal2 = Math.floor(Math.random() * (12) + 1);
    crystal3 = Math.floor(Math.random() * (12) + 1);
    crystal4 = Math.floor(Math.random() * (12) + 1);

    console.log(targetNumber);
    console.log(crystal1);
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);

    // Write targetNumber to DOM
    $("#random-number").text(targetNumber);

    // Click Events
        // Adds crystal value to score
        // Writes new score amount to DOM
    $("#crystal-1").on("click", function() {
        score += crystal1;
        $("#counter").text(score);
    })

    $("#crystal-2").on("click", function() {
        score += crystal2;
        $("#counter").text(score);
    })

    $("#crystal-3").on("click", function() {
        score += crystal3;
        $("#counter").text(score);
    })

    $("#crystal-4").on("click", function() {
        score += crystal4;
        $("#counter").text(score);
    })

    // Win & Loss Checker
        // Writes wins to DOM
        // Triggers New Game and keeps win count
    if (score === targetNumber) {
        wins++;
        $("#win").text(wins);
        newGame();
    } else if (score > targetNumber) {
        losses++;
        $("#loss").text(losses);
        newGame();
    }

    
}

newGame()
