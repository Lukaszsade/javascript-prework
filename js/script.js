{
    const playGame = function (playerInput) {
        clearMessages ();
       
    const getMoveName = function(argMoveId) { 

          if (argMoveId == 1) {
            return 'kamień';
        } if(argMoveId == 2) {
            return 'papier';
        } if(argMoveId == 3) {
            return 'nozyce';
        } else {
            printMessage ('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);
        
    const displayResult = function (argComputerMove, argPlayerMove) {
        printMessage('Ruch komputera to: ' + argComputerMove + 'Twój ruch to: ' + argPlayerMove);
        if  (
            (argComputerMove == 'kamień' && argPlayerMove == 'papier') 
        ||  (argComputerMove == 'papier' && argPlayerMove == 'nozyce') 
        ||  (argComputerMove == 'nozyce' && argPlayerMove == 'kamień')
        ){ 
            printMessage('Ty wygrywasz!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage('Remis! ')
        } else {
            printMessage('Tym razem przegrywasz :(');
        }
        
        }
        displayResult(computerMove, playerMove);
    }

    document.getElementById('play-rock') .addEventListener('click', function() {
    playGame(1);
    });

    document.getElementById('play-paper') .addEventListener('click', function() {
    playGame(2);
    });

    document.getElementById('play-scissors') .addEventListener('click', function(){
    playGame(3);
    });
}