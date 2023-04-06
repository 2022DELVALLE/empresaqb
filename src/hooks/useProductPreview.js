import React from 'react';

const itemProductPreview = {
	productItemP: [],
};


const itemProductPedido = {
	productItemPedido: [],
};


const useProductPreview = () => {

	//Previes product

	const [productItemPreview, setProductItemPreview] = React.useState(itemProductPreview);

	//Controlamos la cantidad amount

	const [amount, setAmount] = React.useState(0);

	//Previes product

	const [productItemPedido, setProductItemPedido] = React.useState(itemProductPedido);


	return {
		productItemPreview,
        setProductItemPreview,
		amount, setAmount,
		productItemPedido, setProductItemPedido
	}
};

export default useProductPreview;