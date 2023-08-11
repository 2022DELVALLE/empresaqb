import React from 'react';
import axios from 'axios';

const useProDelete = () => {

    const [responseDeleteProduct, setReponseDeleteProduct] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const deleteProduct = async ( idProduct) => {
        try {
            setLoading(true);
            const response = await axios.delete(`https://api-empresaqb-version3-production.up.railway.app/api/products/${idProduct}`);
            setReponseDeleteProduct(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    return { responseDeleteProduct, error, loading, deleteProduct };
};

export default useProDelete;