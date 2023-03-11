import React from 'react';

const itemProductPreview = {
	productItemP: [],
};

const useProductPreview = () => {

	const [productItemPreview, setProductItemPreview] = React.useState(itemProductPreview);

	return {
		productItemPreview,
        setProductItemPreview,
	}
};

export default useProductPreview;