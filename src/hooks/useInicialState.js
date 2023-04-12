import React from 'react';
import useGetProducts from './useGetProducts';

//Import local storage
import { useLocalStorage } from './useLocalStorage';

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

	//Inicamos variables que tendra los productos filtrados

	const [leakedProducts, setLeakedproduct] = React.useState();

	// Filtramos los productos psando un objeto de categoria 

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

	//Metodo para filrar los prouctos segun las cartegorias del slider

	const handleFilerCategorybySlider = (slider) => {
		const categoryIds = slider.categories.map(category => category.id);
		const productosFiltrados = productsdata.filter(producto => categoryIds.includes(producto.category.id));
		setLeakedproduct(productosFiltrados)
	}

	//Señal para abrir el portal menu inicio
	const [showPortal, setShowPortal] = React.useState(false);

	//Señal para abrir el portal menu principal
	const [portalMenuP, setPortalMenuP] = React.useState(false);

	//Señal para abrir el portal Login

	const [portalLogin, setPortalLogin] = React.useState(false);

	//Señal para abrir  y cerrar el portal add cart

	const [portalAddCart, setPortalAddCart] = React.useState(false);


	//Inicamos el variables para el carrito como estado carrito

	const [stateCart, setStateCart] = React.useState(initialStateCart);

	//Variables para controlar la cantidad de objetos en el carrito
	const [quantityCart, setQuantityCart] = React.useState(0);


	//Metodo para añadir productos al carrito

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

	//Metodo para eliminar productos del carrito
	const removeFromCart = (payload) => {
		setStateCart({
			...stateCart,
			cart: stateCart.cart.filter(items => items.id !== payload.id),
		});
		setQuantityCart(stateCart.cart.length - 1);
	}

	//Inicamos el variables para el carrito como estado pedido

	const [stateCartPedido, setStateCartPedido] = React.useState(initialStateCartPedido);

	//Variables para controlar la cantidad de objetos en el carrito

	const [quantityCartPedido, setQuantityCartPedido] = React.useState(0);

	//Metodo para añadir productos al carrito

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

	//Metodo para eliminar productos del carrito
	const removeFromCartPedido = (payload) => {
		setStateCartPedido({
			...stateCartPedido,
			cartPedido: stateCartPedido.cartPedido.filter(items => items.id !== payload.id),
		});
		setQuantityCartPedido(stateCartPedido.cartPedido.length - 1);
	}

	//Variables para controlodar user 

	const [user, setUser] = React.useState(null);

	/*Guardar usuario en locakl storage*/
	const { item, saveItem, } = useLocalStorage('User_V1', []);

	const saveUserLocalStorage = (itemuser) => {
		saveItem(itemuser);
	}

	//Variables para controlar el total del carrito
	const [total, setTotal] = React.useState(0);

	return {
		//Variables roductos filtrados
		leakedProducts,
		setLeakedproduct,

		//Metodos de filtrados
		filterProductsByCategory,

		// Function of word search
		filterProductsBySearch,

		//Metodo para filrar los prouctos segun las cartegorias del slider
		handleFilerCategorybySlider,

		//Variables del portal menu inicio
		showPortal,
		setShowPortal,

		//Variables del portal categorias
		portalMenuP,
		setPortalMenuP,

		//Variables del portal categorias login
		portalLogin,
		setPortalLogin,

		//Variables del usuarios/cliente
		user, setUser,

		//Variables del portal categorias add cart
		portalAddCart,
		setPortalAddCart,

		//Metodos de agregar productos
		addToCart,

		//Variable del estado del producto
		stateCart,
		setStateCart,

		//variable para la cantidad de objetos de cart
		quantityCart, setQuantityCart,

		//Metodo para eliminar objeto de cart
		removeFromCart,

		//variables del pedido
		stateCartPedido, setStateCartPedido,

		// hallamos la cantidad de objetos de cart
		quantityCartPedido, setQuantityCartPedido,

		//Metodos de agregar pedidos
		addToCartPedido,

		//Metodo para eliminar objeto de pedido
		removeFromCartPedido,

		//Variables del total
		total, setTotal,

		//Guardar usuario en local storage
		saveUserLocalStorage
	}
};

export default useInitialState;