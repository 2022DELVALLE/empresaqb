import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import Home from '../pages/Home.jsx';
import LoginModal from '../components/LoginModal.jsx';
import Detailsproduct from '../pages/Detailsproduct';
import DetailsCart from '../pages/DetailsCart';

// Obtenemos los valores necesarios para el app context que agrupa el item product cart
import  AppContext  from '../context/AppContext';
import useInitialState from '../hooks/useInicialState';
//paso app Context preview  product item 
import  ContextPreviewProduct  from '../context/ContextPreviewProduct';
import useProductPreview from '../hooks/useProductPreview';

const App = () => {

	const initialStatePodructItemPreview = useProductPreview(); //Este hook retorna state y addToCart
	const initialState = useInitialState(); //Este hook retorna state y addToCart

	return (
		<AppContext.Provider  value={initialState } >
		<ContextPreviewProduct.Provider  value={initialStatePodructItemPreview } >
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<LoginModal />} />
						<Route path="/Detailsproduct" element={<Detailsproduct />} />
						<Route path="/DetailsCart" element={<DetailsCart />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</ContextPreviewProduct.Provider>
		</AppContext.Provider>

	);
}

export default App;
