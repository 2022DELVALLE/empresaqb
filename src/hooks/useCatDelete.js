import React from 'react';
import axios from 'axios';

const useCatDelete = () => {

    const [responseDeleteCategory, setReponseDeleteCategory] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const deleteCategory = async ( idCategory) => {
        try {
            setLoading(true);
            const response = await axios.delete(`https://api-empresaqb-version3-production.up.railway.app/api/categories/${idCategory}`);
            setReponseDeleteCategory(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    return { responseDeleteCategory, error, loading, deleteCategory };
};

export default useCatDelete;