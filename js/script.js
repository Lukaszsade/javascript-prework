function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let playerMove = 'papier'
printMessage('Zagrałem' + playerMove + 'Jeśli Twoj ruch to nozyce, to wygrywasz');
