import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Layout } from '../containers/Layout';
import Home from '../pages/Home.jsx';
import Pruebas from '../containers/pruebas';


const  App = () => {
    return(
		<AppContext.Provider  >
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />						
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
    );
}

export  default App;
