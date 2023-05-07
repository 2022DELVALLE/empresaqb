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



	//Proceso de recuperado de contraseña
	//Recupero user de local storage
	/*const {
		item: recoverinStateCart
	} = useLocalStorage('stateCart_V1');//pendiente

	React.useEffect(() => {
		if (recoverinStateCart) {
			initialStateCart.cart = recoverinStateCart;
		} else {
			initialStateCart.cart = [];
		}
	}, [recoverinStateCart]);*/

	//Variables para controlar la cantidad de objetos en el carrito
	const [quantityCart, setQuantityCart] = React.useState(0);


	//Metodo para añadir productos al carrito

	const addToCart = (payload) => {
		if (!stateCart.cart.includes(payload)) {
			setStateCart({
				...stateCart,
				cart: [...stateCart.cart, payload]
			});
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

	/**
 * Extension de statecart para local storage
 * 
 */
	const {
		saveItem: saveStateCart
	} = useLocalStorage('stateCart_V1', []);

	const saveStateCartActual = (productscart) => {
		saveStateCart(productscart)
	}
	React.useEffect(() => {
		saveStateCartActual(stateCart);
	}, [stateCart]);

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
	/**
	 * Extension de statecart en pedido para local storage
	 * 
	 */
	/*const {
		saveItem: saveStateCartPedido
	} = useLocalStorage('stateCartPedido_V1', []);

	const saveStateCartPedidoActual = (productscartPedido) => {
		saveStateCartPedido(productscartPedido)
	}
	React.useEffect(() => {
		saveStateCartPedidoActual(stateCartPedido);
	}, [stateCartPedido]);*/

	//Variables para controlar user
	const [user, setUser] = React.useState(null);

	//Crear objeto observers
	const observers = {};

	//Función para registrar un observador
	const registerObserver = (key, observerFunc) => {
		if (!observers[key]) {
			observers[key] = [];
		}
		observers[key].push(observerFunc);
	}

	//Función para eliminar un observador
	const unregisterObserver = (key, observerFunc) => {
		if (observers[key]) {
			const index = observers[key].indexOf(observerFunc);
			if (index !== -1) {
				observers[key].splice(index, 1);
			}
		}
	}

	//Función para notificar a los observadores
	const notifyObservers = (key, data) => {
		if (observers[key]) {
			observers[key].forEach((observer) => observer(data));
		}
	}

	/*Guardar usuario en local storage*/
	const { saveItem: saveUserLS } = useLocalStorage('User_V1', []);

	const saveUserLocalStorage = (itemuser) => {
		saveUserLS(itemuser);
		notifyObservers('User_V1', itemuser);
	}

	const deleteUserLocalStorage = () => {
		saveUserLS(null);
		notifyObservers('User_V1', null);
	}

	//Recuperar usuario del local storage al montar el componente
	const { item: recoverinUser } = useLocalStorage('User_V1');

	React.useEffect(() => {
		// Verificar si hay un usuario en el "local storage"
		if (recoverinUser) {
			setUser(recoverinUser);
		}
	}, []);

	//Actualizar el estado del usuario cuando cambia el valor recuperado del "local storage"
	React.useEffect(() => {
		setUser(recoverinUser);
	}, [recoverinUser]);

	//Registrar el observador de 'User_V1'
	React.useEffect(() => {
		const observerFunc = (data) => {
			setUser(data);
		}
		registerObserver('User_V1', observerFunc);
		return () => {
			unregisterObserver('User_V1', observerFunc);
		};
	}, []);

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
		saveUserLocalStorage,

		//Eliminar usuario en local storage
		deleteUserLocalStorage
	}
};

export default useInitialState;