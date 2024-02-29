document.querySelectorAll('#choices img').forEach((img) => {
	img.addEventListener('click', function () {
		handleClick(this.id);
	});
});

function getComputerChoice() {
	const choices = ['rock', 'paper', 'scissors'];
	const randomIndex = Math.floor(Math.random() * choices.length);
	return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		return "It's a tie!";
	}
	if (
		(playerChoice === 'rock' && computerChoice === 'scissors') ||
		(playerChoice === 'scissors' && computerChoice === 'paper') ||
		(playerChoice === 'paper' && computerChoice === 'rock')
	) {
		return 'Player wins!';
	} else {
		return 'Computer wins!';
	}
}

function handleClick(playerChoice) {
	const computerChoice = getComputerChoice();
	const result = determineWinner(playerChoice, computerChoice);

	document.getElementById('user-choice').textContent = playerChoice;
	document.getElementById('computer-choice').textContent = computerChoice;
	document.getElementById('result').textContent = result;

	document.getElementById(
		'user-choice'
	).innerHTML = `<img src="${playerChoice}.jpg" alt="${playerChoice}">`;
	document.getElementById(
		'computer-choice'
	).innerHTML = `<img src="${computerChoice}.jpg" alt="${computerChoice}">`;
}
