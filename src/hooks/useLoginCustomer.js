import React from 'react';
import axios from 'axios';

//import appcontext
import AppContext from '../context/AppContext';

const useLoginCustomer = () => {

    const [error, setError] = React.useState(null);
    const { user, setUser } = React.useContext(AppContext);

    const loginCustomer = async (credenciales) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', credenciales);
            setUser(response.data);
        } catch (error) {
            console.log(error.response.data.message);
            setError(error.response.data);
        }
    };

    return { user, loginCustomer, error };
};

export default useLoginCustomer;