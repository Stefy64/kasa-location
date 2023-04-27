import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Annonce from '../pages/announcement';
import Error from '../pages/Error/Error';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

function App () {
	return (
		<BrowserRouter>
		<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/About' element={<About />} />
				<Route path='/Annonce' element={<Annonce />}  />
				<Route path='*' element={<Error />}  />
			</Routes>
		<Footer />	
		</BrowserRouter>
	)
}

export default App
