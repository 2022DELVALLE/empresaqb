import React, { useState } from 'react';

const initialState = {
	cart: [],
};

const useInitialState = () => {
	const [state, setState] = useState(initialState);

	//Verificar si el mismo proyecto que se agregue la cantidad que recibe del anterior producto


	const addToCart = (payload) => {
		if(!state.cart.includes(payload)){
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