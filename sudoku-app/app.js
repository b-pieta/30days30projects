const puzzleBoard = document.querySelector("#puzzle");
const solveButton = document.querySelector("#solve-button");
const squares = 81;


for (let i = 0; i < squares; i++) {
    const inputElement = document.createElement('input');
    inputElement.type = 'number';
    inputElement.min = '1';
    inputElement.max = '9';
    inputElement.maxLength = 1; 
    inputElement.classList.add('sudoku-input'); 
    puzzleBoard.appendChild(inputElement);
}


const joinValues = () => {
    const inputs = document.querySelectorAll('.sudoku-input');
    const submission = Array.from(inputs).map(input => input.value ? input.value : '.');
    console.log(submission);
};

const solve = async() => {

const options = {
  method: 'POST',
  url: 'https://solve-sudoku.p.rapidapi.com/',
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '7c4261ea98msh09259eacd9d728ep155740jsn3545d3ec8af9',
    'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
  },
  data: {
    puzzle: '2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
}

solveButton.addEventListener('click', solve);
