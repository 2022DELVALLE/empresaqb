import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'

const Admin = () => {

    const navigate = useNavigate();

    const handleOnCategories = () => {
        navigate('/table')
    }

    return (
        <>
            <h1>Elija qué elemento desea modificar</h1>
            <div className="container">
                <h2 className="category" onClick={() => handleOnCategories()}>Categorías</h2>
                <h2 className="product">Productos</h2>
            </div>

        </>

    );
}

export default Admin;