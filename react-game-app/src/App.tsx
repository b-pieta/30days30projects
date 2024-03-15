import React, { useState, useEffect } from 'react';
import './App.css';

const App: React.FC = () => {
	const [correctColor, setCorrectColor] = useState<string>('');
	const [otherColors, setOtherColors] = useState<string[]>([]);
	const [message, setMessage] = useState<string>('');

	useEffect(() => {
		generateColors();
	}, []);

	const generateRandomColor = (): string => {
		const color =
			'#' +
			Math.floor(Math.random() * 16777215)
				.toString(16)
				.padStart(6, '0');
		return color;
	};

	const generateColors = (): void => {
		const newCorrectColor: string = generateRandomColor();
		const newOtherColors: string[] = [];
		while (newOtherColors.length < 2) {
			const newColor = generateRandomColor();
			if (newColor !== newCorrectColor && !newOtherColors.includes(newColor)) {
				newOtherColors.push(newColor);
			}
		}
		setCorrectColor(newCorrectColor);
		setOtherColors(newOtherColors);
		setMessage('');
	};

	const handleGuess = (color: string): void => {
		if (color === correctColor) {
			setMessage('Zgadłeś!');
		} else {
			setMessage('Przegrałeś!');
		}
	};

	return (
		<div className='game-container'>
			<div
				className='guess-me'
				style={{
					backgroundColor: correctColor,
					width: '100px',
					height: '100px',
					margin: '20px',
				}}
			></div>
			{message && <p>{message}</p>}
			<button onClick={() => handleGuess(correctColor)}>{correctColor}</button>
			{otherColors.map((color, index) => (
				<button key={index} onClick={() => handleGuess(color)}>
					{color}
				</button>
			))}
			<button onClick={generateColors}>Nowe kolory</button>
		</div>
	);
};

export default App;
