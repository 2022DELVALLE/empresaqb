import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const CategoryItemModal = ({ categoryitemmodal }) => {

    // Invoco a la funciond e navigate para renderiza productos filtrtados
    const navigate = useNavigate();

    //Envio un objeto de categoria para hacer el filtro

    const { filterProductsByCategory } = React.useContext(AppContext);

    const handleProductsByCategory = (category) => {
        filterProductsByCategory(category);
        navigate('/products');
    }

    return (
        <div className="section__products-mobile-slide"
            onClick={() => handleProductsByCategory(categoryitemmodal)}
        >
            <img className="section__products-mobile-imgSl" src={categoryitemmodal.image} />
            <label className="section__products-mobile-titleProduct">{categoryitemmodal.name}</label>
        </div>
    );
}

export default CategoryItemModal;