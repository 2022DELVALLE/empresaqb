import React from 'react';
import axios from 'axios';

const handleSaveUser = async () => {
    const user =
    {
        dni: '88888880',
        name: 'Alex Oscar',
        lastName: 'Gamarra Solis',
        email: 'alex@gmail.com',
        password: 'sg67h',
        dateBirth: '2023-01-17',
        telephone: '943124351'
    };
    try {
        const response = await axios.post('https://api-production-11f8.up.railway.app/api/customers', user);
        console.log('Success:', response.data.msg);
    } catch (error) {
        console.error('Error:', response.data.res);
    }
};



function Pruebas() {

    return (
        <h1>
            Hola mundo
            {handleSaveUser()}
        </h1>


    );
}

export default Pruebas;