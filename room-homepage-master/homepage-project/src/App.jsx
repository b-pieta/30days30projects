import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Showcase from './components/Showcase';
import SectionTwo from './components/SectionTwo';
import About from './components/About';
import Contact from './components/Contact';
import Shop from './components/Shop';

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Showcase />
							<SectionTwo />
						</>
					}
				/>
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/shop' element={<Shop />} />
			</Routes>
		</Router>
	);
}

export default App;
