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

  

