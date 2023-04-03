import React from 'react';

//import scss
import '../styles/Components/Alerta.scss';


const Alerta = (message) => {

    return (
        <div >
            <p>{message}</p>
        </div>
    );
}

export default Alerta;