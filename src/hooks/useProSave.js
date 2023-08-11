import React from 'react';
import axios from 'axios';

const useProSave = () => {

    const [responseProduct, setReponseProduct] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const saveProduct = async (product) => {
        try {
            setLoading(true);
            const response = await axios.post('https://api-empresaqb-version3-production.up.railway.app/api/products', product);
            setReponseProduct(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    return { responseProduct, error, loading, saveProduct };
};

export default useProSave;

