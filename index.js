const arrayImages = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

function diceThrow(dicePlayer){
    var randomNumber = Math.round((Math.random() * 5));
    dicePlayer.setAttribute("src", arrayImages[randomNumber]);
    return randomNumber;
}

function findWinner(player1Points, player2Points){
    var heading = document.querySelector("h1");
    if (player1Points > player2Points){
        heading.textContent = "🚩 Player 1 wins";
    }
    else if (player1Points < player2Points){
        heading.textContent = "Player 2 wins 🚩";
    }
    else {
        heading.textContent = "🎲 Draw 🎲";
    }
}

var dicePlayer1 = document.querySelector(".player_1 > img");
var dicePlayer2 = document.querySelector(".player_2 > img");

var pointsPlayer1 = diceThrow(dicePlayer1);
var pointsPlayer2 = diceThrow(dicePlayer2);

findWinner(pointsPlayer1, pointsPlayer2);
