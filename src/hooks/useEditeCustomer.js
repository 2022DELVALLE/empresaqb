import React from 'react';
import axios from 'axios';

const useEditCustomer = () => {

    const [responseEdit, setReponseEdit] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const editCustomer = async (user, idUser) => {
        try {
            setLoading(true);
            const response = await axios.put(`https://api-empresaqb-version3-production.up.railway.app/api/users/${idUser}`, user);
            setReponseEdit(response.data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    };

    return { responseEdit, error, loading, editCustomer };
};

export default useEditCustomer;