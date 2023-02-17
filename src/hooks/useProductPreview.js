import React from 'react';

const productPreview = {
	productItemP: [],
};

const useProductPreview = () => {

	const [stateProductIP, setStateProductIP] = React.useState(productPreview);

	return {
		stateProductIP,
        setStateProductIP
	}
};

export default useProductPreview;