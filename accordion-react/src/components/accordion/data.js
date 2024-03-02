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

    {
        id: '10',
        question: 'What is Redux?',
        answer: 'Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.'
    },
    {
        id: '11',
        question: 'What is React Router?',
        answer: 'React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL.'
    },
    {
        "id": "12",
        "question": "What is WebAssembly?",
        "answer": "WebAssembly (WASM) is a binary instruction format for a stack-based virtual machine. WASM is designed as a portable target for compilation of high-level languages like C/C++/Rust, enabling deployment on the web for client and server applications."
    },
    {
        "id": "13",
        "question": "What is a Promise in JavaScript?",
        "answer": "A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason, enabling asynchronous methods to return values like synchronous methods."
    },
    {
        "id": "14",
        "question": "What is Docker?",
        "answer": "Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. "
    },
    {
        "id": "15",
        "question": "What is Git?",
        "answer": "Git is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files."
    },
    {
        "id": "16",
        "question": "What is Node.js?",
        "answer": "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser."
    },
    {
        "id": "17",
        "question": "What is GraphQL?",
        "answer": "GraphQL is a query language for APIs and a runtime for executing those queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data."
    },
    {
        "id": "18",
        "question": "What is TypeScript?",
        "answer": "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications and transcompiles to JavaScript."
    },
    {
        "id": "19",
        "question": "What is MongoDB?",
        "answer": "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. It is designed to handle large amounts of data and provide high performance, high availability, and easy scalability."
    },
    {
        "id": "20",
        "question": "What is REST API?",
        "answer": "REST API (Representational State Transfer) is an architectural style that defines a set of constraints to be used for creating web services. Web services that conform to the REST architectural style, called RESTful web services, provide interoperability between computer systems on the internet."
    },
    {
        "id": "21",
        "question": "What is a Webhook?",
        "answer": "A Webhook is a method of augmenting or altering the behavior of a web page, or web application, with custom callbacks. These callbacks may be maintained, modified, and managed by third-party users and developers who do not necessarily have the knowledge of or access to the source code of the web page or application."
    }
];

export default data;
