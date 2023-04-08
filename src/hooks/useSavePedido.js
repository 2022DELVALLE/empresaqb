import React from 'react';
import axios from 'axios';

//import appcontext
import AppContext from '../context/AppContext';

const useSavePedido = () => {

    const [error, setError] = React.useState(null);
    const { user, setUser } = React.useContext(AppContext);
    const [responseSavePedido, setResponseSavePedido] = React.useState(null); // Nuevo estado para almacenar la respuesta

    const SavePedido = async (modeloPedido) => {
        try {
            const response = await axios.post(
                'https://api-empresaqb-version3-production.up.railway.app/api/pedidos',
                modeloPedido,
                { headers: { Authorization: `Bearer ${user.data.token}` } }
            );
            setResponseSavePedido(response.data); // Almacenamos la respuesta en el estado
        } catch (error) {
            setError(error.response.data);
        }
    };

    return { user, responseSavePedido, SavePedido, error }; // Retornamos el estado de la respuesta
};


export default useSavePedido;