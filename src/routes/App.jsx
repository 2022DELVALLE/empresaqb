import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import Home from '../pages/Home.jsx';
import ProductsCategory from '../pages/ProductsCategory';
import CreateAccount from '../pages/CreateAccount';
import RecoveringPassword from '../pages/RecoveringPassword';

// Obtenemos los valores necesarios para el app context que agrupa el item product cart
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInicialState';



//paso app Context preview  product item 
import ContextPreviewProduct from '../context/ContextPreviewProduct';
import useProductPreview from '../hooks/useProductPreview';



import Detailsproduct from '../pages/Detailsproduct';
import DetailsCart from '../pages/DetailsCart';
const App = () => {

	const initialStatePodructItemPreview = useProductPreview(); //Este hook retorna state y addToCart
	const initialState = useInitialState(); //Este hook retorna state y addToCart

	return (
		<AppContext.Provider value={initialState} >
			<ContextPreviewProduct.Provider value={initialStatePodructItemPreview} >


					<BrowserRouter>
						<Layout>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/products" element={<ProductsCategory />} />
								<Route path="/createaccount" element={<CreateAccount />} />
								<Route path="/recoveringpassword"  element={<RecoveringPassword />}/>

								
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
