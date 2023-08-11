import React from 'react';
import axios from 'axios';

//import appcontext
import AppContext from '../context/AppContext';

const useLogoutCustomer = () => {

    const { user, setUser } = React.useContext(AppContext);
    const [responseLogout, setResponseLogout] = React.useState(null); // Nuevo estado para almacenar la respuesta

    const logoutCustomer = async () => {
        try {
            const response = await axios.post(
                'https://api-empresaqb-version3-production.up.railway.app/api/logout',
                null,
                { headers: { Authorization: `Bearer ${user.data.token}` } }
            );
            setUser(null);
            setResponseLogout(response.data); // Almacenamos la respuesta en el estado
        } catch (error) {
            console.error('error', error.response.data);
        }
    };

    return { user, responseLogout, logoutCustomer }; // Retornamos el estado de la respuesta
};


export default useLogoutCustomer;