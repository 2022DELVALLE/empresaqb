import React from 'react';
import productsdata from '../hooks/data/productsdata';

const initialStatea = {
	cart: [],
};

const useInitialState = () => {

	const [leakedProducts, setLeakedproduct] = React.useState();



	// Filtramos los productos psando un objeto de categoria y guardamos en la

	const filterProductsByCategory = (category) => {
		const productosf = productsdata.filter((producto) => producto.category.id === category.id);
		setLeakedproduct(productosf)
	}



	//Filtramos productos por palabra ingresado en la barra de busqueda

	const filterProductsBySearch = (word) => {
		setLeakedproduct(productsdata.filter(producto =>
			producto.title.toLowerCase()
				.includes(word.toLowerCase())
		));
	}



	//Señal para abrir el portal menu inicio
	const [showPortal, setShowPortal] = React.useState(false);


	//Señal para abrir el portal Login

	const [portalLogin, setPortalLogin] = React.useState(false);

	//Señal para abrir  y cerrar el portal add cart

	const [portalAddCart, setPortalAddCart] = React.useState(false);










	//Verificar si el mismo proyecto que se agregue la cantidad que recibe del anterior producto
	/*
	const [state, setState] = useState(initialStatea);

	const addToCart = (payload) => {
		if (!state.cart.includes(payload)) {
			setState({
				...state,
				cart: [...state.cart, payload]
			});
			console.log(state);
		}
	};

	const removeFromCart = (payload) => {
		setState({
			...state,
			cart: state.cart.filter(items => items.id !== payload.id),
		});
	}

	//Trabajamos con el modal add  cart

	const [openModalAddCart, setOpenModalAddCart] = React.useState(false);

	//Cantidad  a comprar por el cliente
	const [quantity, setQuantity] = React.useState(0);

*/
	return {
		//Parametros de filtro de productos por categoria
		leakedProducts,
		setLeakedproduct,
		filterProductsByCategory,

		// Function of word search
		filterProductsBySearch,


		//Parametros para el control de portal login
		showPortal,
		setShowPortal,

		//Parametros para el control de portal login
		portalLogin,
		setPortalLogin,

		//Parametros para el control de portal add cart
		portalAddCart,
		setPortalAddCart,

		/*
				state,
				addToCart,
				removeFromCart,
				openModalAddCart,
				setOpenModalAddCart,
				quantity,
				setQuantity,*/
	}
};

export default useInitialState;