import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
import Annonce from '../pages/Annonce';
import Error from '../pages/Error';

function App () {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/About' element={<About />} />
				<Route path='/Annonce' element={<Annonce />}  />
				<Route path='*' element={<Error />}  />
			</Routes>
		</BrowserRouter>
	)
}

export default App
