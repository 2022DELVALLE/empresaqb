import React, { useState } from 'react';

const initialState = {
	cart: [],
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	const addToCart = (payload) => {
		setState({
			...state,
			cart: [...state.cart, payload]
		});
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


	return {
		state,
		addToCart,
		removeFromCart,
		openModalAddCart,
		setOpenModalAddCart,
		quantity, 
		setQuantity,
	}
};

export default useInitialState;