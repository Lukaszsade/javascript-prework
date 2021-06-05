

    function printMessage(msg) {
	    let div = document.createElement('div');
	    div.innerHTML = msg;
	    document.getElementById('messages').appendChild(div);
    }

    function clearMessages(){
	    document.getElementById('messages').innerHTML = '';
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
        if ( playerMove == 'nieznany ruch') {
            printMessage ('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
            return
        }
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
      
