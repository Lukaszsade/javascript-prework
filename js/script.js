function getMoveName (argMoveId) {
    if(argMoveId == 1){
        return 'kamień';
    } if(argMoveId == 2){
        return 'papier';
    } if(argMoveId == 3){
        return 'nozyce';
    }
  
    printMessage ('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}else if (randomNumber == 2){
    computerMove = 'nozyce';
}else if (randomNumber == 3){
    computerMove = 'papier';
}*/

printMessage('Ruch komputera: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName (playerInput);

printMessage('Twój ruch to: ' + playerMove);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput == '2'){
    playerMove = 'papier'
}else if (playerInput == '3'){
    playerMove = 'nozyce'
}*/

console.log('moves:', argComputerMove, argPlayerMove);



function displayResult (argComputerMove, argPlayerMove) {
   
  
    if (( argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nozyce') ||
    (argComputerMove == 'nozyce' && argPlayerMove == 'kamień')){ 
        printMessage ('Ty wygrywasz!');
    }else if (argComputerMove == argPlayerMove) {
        printMessage ('Remis! ')
    }else {
        printMessage('Tym razem przegrywasz :(');
    }
}

let argComputerMove = argMoveId;
let argPlayerMove = argMoveId;



/*
if(computerMove == 'kamień' && playerMove == 'papier' || computerMove == "nozyce" && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
}else if (playerMove == 'nozyce' && computerMove == 'kamień' || playerMove == 'papier' && computerMove == 'nozyce' || playerMove == 'kamień' && computerMove == 'papier'){
    printMessage('Komputer wygrywa!');
}else if(playerMove == computerMove){
    printMessage('Remis!');
}else if(playerMove == 'nieznany ruch'){
    printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
} */