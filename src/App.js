import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navbar from './components/Navbar';

const App = () => {
	return (
		<HashRouter>
			<Navbar />
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
		</HashRouter>
	);
};

export default App;
