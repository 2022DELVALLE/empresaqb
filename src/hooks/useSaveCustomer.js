import React from 'react';
import axios from 'axios';

const useSaveCustomer = () => {

    const [responseRegister, setReponseRegister] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const saveCustomer = async (user) => {
        try {
            setLoading(true);
            const response = await axios.post('https://api-empresaqb-version3-production.up.railway.app/api/register', user);
            setReponseRegister(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error.response.data)
            setError(error.response.data);
            setLoading(false);
        }
    };

    return { responseRegister, error, loading, saveCustomer };
};

export default useSaveCustomer;

