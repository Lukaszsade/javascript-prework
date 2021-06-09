{
       function printMessage(msg) {
              let div = document.createElement('div');
              div.innerHTML = msg;
              document.getElementById('messages').appendChild(div);
       }

       function clearMessages() {
              document.getElementById('messages').innerHTML = '';
       }

       var playGame = function(playerInput) {
              clearMessages();
              
              const getMoveName = function(argMoveId) {

                     if (argMoveId == 1) {
                            return 'kamień';
                     } if (argMoveId == 2) {
                            return 'papier';
                     } if (argMoveId == 3) {
                            return 'nozyce';
                     } else {
                            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                            return 'nieznany ruch';
                     }
              }

              const randomNumber = Math.floor(Math.random() * 3 + 1);
              const computerMove = getMoveName(randomNumber);
              const playerMove = getMoveName(playerInput);

              const displayResult = function(argComputerMove, argPlayerMove) {
                     printMessage('Ruch komputera to: ' + argComputerMove + 'Twój ruch to: ' + argPlayerMove);
                     
                     if (
                            (argComputerMove == 'kamień' && argPlayerMove == 'papier')
                            || (argComputerMove == 'papier' && argPlayerMove == 'nozyce')
                            || (argComputerMove == 'nozyce' && argPlayerMove == 'kamień')
                     ) {
                            printMessage('Ty wygrywasz!');
                     } else if (argComputerMove == argPlayerMove) {
                            printMessage('Remis! ')
                     } else {
                            printMessage('Tym razem przegrywasz :(');
                     }
              }
              displayResult(computerMove, playerMove);
       }
}