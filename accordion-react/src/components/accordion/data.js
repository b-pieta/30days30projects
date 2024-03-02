const data = [
	{
		id: '1',
		question: 'What is React?',
		answer:
			'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.',
	},
	{
		id: '2',
		question: 'How do you create a component in React?',
		answer:
			'Components in React can be created as a class or a function. Class components are created using ES6 classes, while function components are simpler and defined by a function that returns JSX.',
	},
	{
		id: '3',
		question: 'What are props in React?',
		answer:
			'Props (short for “properties”) are a way of passing data from parent to child components, making them reusable and dynamic. Props are read-only and cannot be modified by the child component.',
	},
	{
		id: '4',
		question: 'How does React handle state?',
		answer:
			'React handles state using the `useState` hook in functional components or state property in class components. State allows components to keep track of changing data and re-render when updates occur.',
	},
	{
		id: '5',
		question: 'What is JSX?',
		answer:
			'JSX stands for JavaScript XML. It is a syntax extension for JavaScript used in React to describe what the UI should look like. JSX allows you to write HTML elements in JavaScript and place them in the DOM without using functions like `createElement` or `appendChild`.',
	},
	{
		id: '6',
		question: 'How do you handle events in React?',
		answer:
			'In React, events are handled using camelCase syntax, and you pass a function as the event handler rather than a string. For example, `onClick` instead of `onclick`. React events are wrapped in a synthetic event wrapper to ensure cross-browser compatibility.',
	},
	{
		id: '7',
		question: 'What are hooks in React?',
		answer:
			'Hooks are functions that let you “hook into” React state and lifecycle features from function components. They allow you to use state and other React features without writing a class. Examples include `useState`, `useEffect`, and `useContext`.',
	},
	{
		id: '8',
		question: 'What is the virtual DOM?',
		answer:
			'The virtual DOM is a concept where a virtual representation of the UI is kept in memory and synced with the real DOM by a library such as ReactDOM. This process, known as reconciliation, allows React to efficiently update the UI by only rendering nodes that have changed.',
	},
	{
		id: '9',
		question: 'How do you pass data between components?',
		answer:
			'Data is passed between components using props for parent-to-child communication or context for more complex scenarios like deep nesting. For sibling or child-to-parent communication, you can use callbacks or state lifting.',
	},
];

export default data;
