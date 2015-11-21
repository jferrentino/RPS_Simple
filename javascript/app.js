

//COMPLETE HW BELOW
player1 = "paper"; 
player2 = "paper"; 

var winner;
if ( player1 === "rock" && player2 === "paper" ) {
    winner = "player2";
}

if ( player1 === "rock" && player2 === "scissor" ) {
    winner = "player1";
}
if ( player1 === "paper" && player2 === "rock" ) {
    winner = "player1";
}

if ( player1 === "paper" && player2 === "scissor" ) {
    winner = "player2";
}
if ( player1 === "scissor" && player2 === "paper" ) {
    winner = "player1";
}
if ( player1 === "scissor" && player2 === "rock" ) {
    winner = "player2";
}
if ( player1 === player2 ) {
    winner = "tie";
}



console.log( winner );

//COMPLETE HW BELOW//



