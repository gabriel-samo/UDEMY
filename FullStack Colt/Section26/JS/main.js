// Global scope varibles for all the funtions.
let playerOneScore = document.querySelector('.playerOneScore');
let playerTwoScore = document.querySelector('.playerTwoScore');
let playerOneMove = document.querySelector('.playerOneMove');
let playerTwoMove = document.querySelector('.playerTwoMove');

// Calling the main function for the score.
updateScore()

// Function to update the listen to score buttons.
function updateScore() {
    playerOneMove.addEventListener('click', () => {
        checkScore(playerOneScore,playerTwoScore);
        Number(playerOneScore.innerText++);
    })
    playerTwoMove.addEventListener('click', () => {
        checkScore(playerTwoScore,playerOneScore);
        Number(playerTwoScore.innerText++);
    })
    resetScore();
}

// Function to check if one of the player reached the selected score 
// and to disable the button when the score has been reached.
function checkScore (player,player2) {
    let score = document.querySelector('select');
    if(Number(player.innerText)>=Number(score.value-1)){
        player.style.color='green';
        playerOneMove.setAttribute('disabled','');
        player2.style.color='red';
        playerTwoMove.setAttribute('disabled','');
    }
}

//Function to reset the score and enable the buttons.
function resetScore() {
    let reset = document.querySelector('.resetButton');

    reset.addEventListener('click', () => {
        Number(playerOneScore.innerText = 0);
        Number(playerTwoScore.innerText = 0);
        playerOneScore.style.color='black';
        playerTwoScore.style.color='black';
        playerOneMove.removeAttribute('disabled','');
        playerTwoMove.removeAttribute('disabled','');
    })
}


