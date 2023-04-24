import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import Home from '../pages/Home.jsx';
import ProductsCategory from '../pages/ProductsCategory';
import CreateAccount from '../pages/CreateAccount';
import ForgotPassword from '../pages/ForgotPassword';
import DetailsProduct from '../pages/DetailsProduct';
import Cart from '../pages/Cart';
import MyAccount from '../pages/MyAccount';
import Payment from '../pages/Payment';

// Obtenemos los valores necesarios para el app context que agrupa el item product cart
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInicialState';

//paso app Context preview  product item 
import ProductPreviewContext from '../context/ProductPreviewContext';
import useProductPreview from '../hooks/useProductPreview';
import ResetPassword from '../pages/ResetPassword';

const App = () => {

	const initialStatePodructItemPreview = useProductPreview();
	const initialState = useInitialState();

	return (
		<AppContext.Provider value={initialState} >
			<ProductPreviewContext.Provider value={initialStatePodructItemPreview} >
				<BrowserRouter>
					<Layout>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/products" element={<ProductsCategory />} />
							<Route path="/createaccount" element={<CreateAccount />} />
							<Route path="/forgot-password" element={<ForgotPassword />} />
							<Route path="/details" element={<DetailsProduct />} />
							<Route path="/cart" element={<Cart />} />
							<Route path="/myaccount" element={<MyAccount />} />		
							<Route path="/reset-password" element={<ResetPassword />} />	
							<Route path="/payment" element={<Payment />} />	
							<Route path="*" element={<p>Not found</p>} />	
						</Routes>
					</Layout>
				</BrowserRouter>
			</ProductPreviewContext.Provider>
		</AppContext.Provider>
	);
}

export default App;
