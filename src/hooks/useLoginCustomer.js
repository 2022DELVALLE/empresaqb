import React from 'react';
import axios from 'axios';


//import appcontext
import AppContext from '../context/AppContext';


const useLoginCustomer = (credenciales) => {

    const { user, setUser } = React.useContext(AppContext);

    const loginCustomer = async (credenciales) => {
        try {
            const response = await axios.post('https://api-empresaqb-version3-production.up.railway.app/api/login', credenciales);
            setUser(response.data);
        } catch (error) {
            console.error('error', error);
        }
    };


    return { user, loginCustomer };
};

export default useLoginCustomer;