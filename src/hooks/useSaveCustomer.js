import React from 'react';
import axios from 'axios';

const useSaveCustomer = () => {

    const [responseRegister, setReponseRegister] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const saveCustomer = async (user) => {
        try {
            setLoading(true);
            const response = await axios.post('http://127.0.0.1:8000/api/register', user);
            setReponseRegister(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    return { responseRegister, error, loading, saveCustomer };
};

export default useSaveCustomer;

