import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Layout } from '../containers/Layout';
import Home from '../pages/Home.jsx';
import LoginModal from '../components/LoginModal.jsx';
import Detailsproduct from '../pages/Detailsproduct';

const App = () => {
	return (
		<AppContext.Provider  >
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<LoginModal />} />
						<Route path="/Detailsproduct" element={<Detailsproduct />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
