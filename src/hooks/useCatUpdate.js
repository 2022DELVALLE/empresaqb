import React from 'react';
import axios from 'axios';

const useCatUpdate = () => {

    const [responseUpdateCategory, setReponseUpdateCategory] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const updateCategory = async (newCategoey, idCategory) => {
        try {
            setLoading(true);
            const response = await axios.put(`http://127.0.0.1:8000/api/categories/${idCategory}`, newCategoey);
            setReponseUpdateCategory(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    return { responseUpdateCategory, error, loading, updateCategory };
};

export default useCatUpdate;