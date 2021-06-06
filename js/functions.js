    function printMessage (msg) {
	    let div = document.createElement ('div');
	    div.innerHTML = msg;
	    document.getElementById ('messages').appendChild(div);
    }

    function clearMessages () {
	    document.getElementById('messages').innerHTML = '';
    }

    function playGame (playerInput) {
        clearMessages ();
        let playerMove = getMoveName (playerInput);
    
        printMessage('Twój ruch to: ' + playerMove);
    
        let randomNumber = Math.floor (Math.random() * 3 + 1);
        let computerMove = getMoveName (randomNumber);
    
        printMessage ('Ruch komputera: ' + computerMove);
    
        displayResult (computerMove, playerMove);
    }

    function getMoveName (argMoveId) {
        if (argMoveId == 1) {
            return 'kamień';
        } if(argMoveId == 2) {
            return 'papier';
        } if(argMoveId == 3) {
            return 'nozyce';
        }
  
        printMessage ('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    function displayResult (argComputerMove, argPlayerMove) {
        if  (
            (argComputerMove == 'kamień' && argPlayerMove == 'papier') 
        ||  (argComputerMove == 'papier' && argPlayerMove == 'nozyce') 
        ||  (argComputerMove == 'nozyce' && argPlayerMove == 'kamień')
        ){ 
            printMessage ('Ty wygrywasz!');
        } else if (argComputerMove == argPlayerMove) {
            printMessage ('Remis! ')
        } else {
            printMessage('Tym razem przegrywasz :(');
        }
    }
      
