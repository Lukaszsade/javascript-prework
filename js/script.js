let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}else if (randomNumber == 2){
    computerMove = 'nozyce';
}else if (randomNumber == 3){
    computerMove = 'papier';
}

printMessage('Ruch komputera: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}else if (playerInput == '2'){
    playerMove = 'papier'
}else if (playerInput == '3'){
    playerMove = 'nozyce'
}

printMessage('Twój ruch to: ' + playerMove);

if(computerMove == 'kamień' && playerMove == 'papier' || computerMove == "nozyce" && playerMove == 'kamień' || computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz!');
}else if (playerMove == 'nozyce' && computerMove == 'kamień' || playerMove == 'papier' && computerMove == 'nozyce' || playerMove == 'kamień' && computerMove == 'papier'){
    printMessage('Komputer wygrywa!');
}else if(playerMove == computerMove){
    printMessage('Remis!');
}else if(playerMove == 'nieznany ruch'){
    printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
}




