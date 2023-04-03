import React from 'react';
import axios from 'axios';


const useResetPassword = () => {

    const [responseResetPassword, setResponseResetPassword] = React.useState(null);
    const [error, setError] = React.useState(null);

    const resetPassword = async (credencialesPassword) => {
        try {
            const response = await axios.post('https://api-empresaqb-version3-production.up.railway.app/api/reset-password', credencialesPassword);
            setResponseResetPassword(response.data);
        } catch (error) {
            setError(error.response.data);
        }
    };

    return {responseResetPassword, resetPassword, error }; 
};


export default useResetPassword;