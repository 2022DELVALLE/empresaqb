import React from 'react';
import axios from 'axios';

const useProUpdate = () => {

    const [responseUpdateProduct, setReponseUpdateProduct] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const updateProduct = async (newPropduct, idProduct) => {
        try {
            setLoading(true);
            const response = await axios.put(`http://127.0.0.1:8000/api/products/${idProduct}`, newPropduct);
            setReponseUpdateProduct(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    return { responseUpdateProduct, error, loading, updateProduct };
};

export default useProUpdate;