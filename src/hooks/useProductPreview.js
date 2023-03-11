import React from 'react';

const itemProductPreview = {
	productItemP: [],
};

const useProductPreview = () => {

	//Previes product

	const [productItemPreview, setProductItemPreview] = React.useState(itemProductPreview);

	//Controlamos la cantidad amount

	const [amount, setAmount] = React.useState(0);

	return {
		productItemPreview,
        setProductItemPreview,
		amount, setAmount,
	}
};

export default useProductPreview;