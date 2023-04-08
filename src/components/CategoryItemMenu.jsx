import React from 'react';
import { useNavigate } from 'react-router-dom';

//import appcontext
import AppContext from '../context/AppContext';

const CategoryItemMenu = ({ categoryitem }) => {

    // Invoco a la funcion de navigate
    const navigate = useNavigate();

    //recupero señal de portal menu principal
    const { portalMenuP, setPortalMenuP } = React.useContext(AppContext);

    //Envio un objeto de categoria para hacer el filtro
    const { filterProductsByCategory } = React.useContext(AppContext);

    const handleProductsByCategory = (category) => {
        filterProductsByCategory(category);
        setPortalMenuP(!portalMenuP);
        navigate('/products');
    }

    return (
        <li className="menuLateralCategorias__container-categ"
            onClick={() => handleProductsByCategory(categoryitem)}
        >
            <a href="#">{categoryitem.name}</a>
        </li>
    );
}

export default CategoryItemMenu;