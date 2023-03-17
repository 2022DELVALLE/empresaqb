import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const CategoryItemDesktop = ({ categoryitemdesktop }) => {

    // Invoco a la funcion de navigate para renderiza productos filtrados
    const navigate = useNavigate();

    //Envio un objeto de categoria para hacer el filtro

    const { filterProductsByCategory } = React.useContext(AppContext);

    const handleProductsByCategory = (category) => {
        filterProductsByCategory(category);
        navigate('/products');
    }

    return (
        <div className="box-products"
        onClick={()=> handleProductsByCategory(categoryitemdesktop)}
        >
            <img src={categoryitemdesktop.image} alt="productos por categoria" />
            <div className="box-products-title">{categoryitemdesktop.name}</div>
        </div>
    );
}

export default CategoryItemDesktop;