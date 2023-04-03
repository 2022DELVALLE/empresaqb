import React from 'react';
import axios from 'axios';


const useForgotPassword = () => {

    const [responseForgoutPassword, setResponseForgotPassword] = React.useState(null);
    const [error, SetError] = React.useState(null);

    const forgotPassword = async (email) => {
        try {
            const response = await axios.post('https://api-empresaqb-version3-production.up.railway.app/api/forgot-password', email);
            setResponseForgotPassword(response.data);
        } catch (error) {
            SetError(error.response.data);
            console.error('error', error);
        }
    };

    return {responseForgoutPassword, forgotPassword,error }; 
};


export default useForgotPassword;