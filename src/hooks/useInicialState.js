import React from 'react';
import useGetProducts from './useGetProducts';

const initialStateCart = {
	cart: [],
};
const initialStateCartPedido = {
	cartPedido: [],
};

const useInitialState = () => {

	//Traemos la data de sliders

	const APIProducts = 'https://api-empresaqb-version3-production.up.railway.app/api/products';

	const productsdata = useGetProducts(APIProducts);

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

	//Señal para abrir el portal menu principal
	const [portalMenuP, setPortalMenuP] = React.useState(false);


	//Señal para abrir el portal Login

	const [portalLogin, setPortalLogin] = React.useState(false);

	//Señal para abrir  y cerrar el portal add cart

	const [portalAddCart, setPortalAddCart] = React.useState(false);


	//Verificar si el mismo proyecto que se agregue la cantidad que recibe del anterior producto

	const [stateCart, setStateCart] = React.useState(initialStateCart);

	//intermediio

	// hallamos la cantidad de objetos de cart
	const [quantityCart, setQuantityCart] = React.useState(0);


	//fin intermedio


	const addToCart = (payload) => {

		if (!stateCart.cart.includes(payload)) {
			setStateCart({
				...stateCart,
				cart: [...stateCart.cart, payload]
			});
			console.log(stateCart);
			setQuantityCart(stateCart.cart.length + 1);
		}

	};


	//eliminar un objeto de cart
	const removeFromCart = (payload) => {
		setStateCart({
			...stateCart,
			cart: stateCart.cart.filter(items => items.id !== payload.id),
		});
		setQuantityCart(stateCart.cart.length - 1);
	}



	//Verificar si el mismo proyecto que se agregue la cantidad que recibe del anterior producto

	const [stateCartPedido, setStateCartPedido] = React.useState(initialStateCartPedido);

	// hallamos la cantidad de objetos de cart
	const [quantityCartPedido, setQuantityCartPedido] = React.useState(0);


	const addToCartPedido = (payload) => {

		if (!stateCartPedido.cartPedido.includes(payload)) {
			setStateCartPedido({
				...stateCartPedido,
				cartPedido: [...stateCartPedido.cartPedido, payload]
			});
			console.log(stateCartPedido);
			setQuantityCartPedido(stateCartPedido.cartPedido.length + 1);
		}

	};


	//eliminar un objeto de cart
	const removeFromCartPedido = (payload) => {
		setStateCartPedido({
			...stateCartPedido,
			cartPedido: stateCartPedido.cartPedido.filter(items => items.id !== payload.id),
		});
		setQuantityCartPedido(stateCartPedido.cartPedido.length - 1);
	}



	//variables para controlodar user 
	const [user, setUser] = React.useState(null);


	//Metodo para filrar los prouctos segun las cartegorias del slider

	const handleFilerCategorybySlider = (slider) => {
		const categoryIds = slider.categories.map(category => category.id);
		const productosFiltrados = productsdata.filter(producto => categoryIds.includes(producto.category.id));
		setLeakedproduct(productosFiltrados)
	}

	//Control del total de carrito
	const [total, setTotal] = React.useState(0);



	return {
		//Parametros de filtro de productos por categoria
		leakedProducts,
		setLeakedproduct,
		filterProductsByCategory,

		// Function of word search
		filterProductsBySearch,


		//Parametros para el control de portal menu inicio
		showPortal,
		setShowPortal,
		//Parametos para el control del portal principal
		portalMenuP, setPortalMenuP,

		//Parametros para el control de portal login
		portalLogin,
		setPortalLogin,
		//Intemrdio user
		user, setUser,


		//Parametros para el control de portal add cart
		portalAddCart,
		setPortalAddCart,


		//Metodos de agregar productos  a la carta
		addToCart,
		stateCart,
		setStateCart,

		//variable para la cantidad de objetos de cart
		quantityCart, setQuantityCart,

		//Metodo para eliminar objeto de cart
		removeFromCart,


		//Metodo para filrar los prouctos segun las cartegorias del slider
		handleFilerCategorybySlider,


		//variables del pedido
		stateCartPedido, setStateCartPedido,

		// hallamos la cantidad de objetos de cart
		quantityCartPedido, setQuantityCartPedido,
		addToCartPedido, removeFromCartPedido,
		total, setTotal
	}
};

export default useInitialState;