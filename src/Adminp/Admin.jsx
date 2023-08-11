import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css'

const Admin = () => {

    const navigate = useNavigate();

    const handleOnCategories = () => {
        navigate('/table')
    }
    const handleOnProductos = () => {
        navigate('/tableproductos')
    }

    const handleToManualAdministrador = ()=> {
        window.open('https://drive.google.com/file/d/1h-ZYOwgrQTfmlj6IavYeVCZ6ujb1ejHD/view?usp=sharing', '_blank');
    }

    return (
        <div className='container-admin'>
            <h1>Elija qué elemento desea administrar</h1>
            <div className="container2-admin">
                <h2 className="category" onClick={() => handleOnCategories()}>Categorías</h2>
                <h2 className="product" onClick={() => handleOnProductos()}>Productos</h2>
            </div>
            <div className="container2-admin2"
            onClick={()=> handleToManualAdministrador()}
            >
                <button>
                    Manual de administrador
                </button>
            </div>
        </div>
    );
}

export default Admin;