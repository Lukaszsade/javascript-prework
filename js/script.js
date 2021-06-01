function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
printMessage('Mój ruch to: ' + computerMove);
}else if (randomNumber == 2){
    computerMove = 'nozyce';
  printMessage('Mój ruch to: ' + computerMove);
}else if (randomNumber == 3){
    computerMove = 'papier';
    printMessage('Mój ruch to: ' + computerMove);
}

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

if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}else if (computerMove == "nozyce" && playerMove == 'kamień'){
    printMessage('Ty wygrywasz');
}else if (computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage ( 'Ty wygrywasz');
}

if(playerMove == 'kamień' && computerMove == 'papier'){
    printMessage('Komputer wygrywa!');
}else if (playerMove == 'nozyce' && computerMove == 'kamień'){
    printMessage('Komputer wygrywa!');
}else if (playerMove == 'papier' && computerMove == 'nozyce'){
    printMessage ( 'Komputer wygrywa!');
}

if(playerMove == computerMove){
    printMessage('Remis!');
}

if(playerMove == 'nieznany ruch'){
    printMessage('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.')
}




