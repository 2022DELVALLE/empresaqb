import React from 'react';
import axios from 'axios';

const useSaveCustomer = (user) => {

    const [responseUser, setReponseUser] = React.useState(null);

    const saveCustomer = async (user) => {
        try {
            const response = await axios.post('https://api-empresaqb-production.up.railway.app/api/customers', user);
            setReponseUser(response.data);
        } catch (error) {
            console.error('error', error);
        }
    };


    return { responseUser, saveCustomer };
};

export default useSaveCustomer;