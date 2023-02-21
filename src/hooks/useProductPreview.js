import React from 'react';

const itemProductPreview = {
	productItemP: [],
};

const useProductPreview = () => {

	const [productItemPreview, setProductItemPreview] = React.useState(itemProductPreview);

	//Control de los productos por barra
	const [search, setSearch] = React.useState('');

	return {
		productItemPreview,
        setProductItemPreview,
		search, setSearch,
	}
};

export default useProductPreview;