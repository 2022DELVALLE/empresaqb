import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Item = ({ categoryitem }) => {

    const { categoria, setCategoria } = React.useContext(AppContext);

    const navigate = useNavigate();

    const handleEditarCategory = (itemcategoria) => {
        navigate('/editcategory');
        setCategoria(itemcategoria);
    }

    return (
        <li>
            <div className="item-info">
                <p>{categoryitem.id}</p>
                <p>{categoryitem.name}</p>
                <p>{categoryitem.image}</p>
                <p>{categoryitem.description}</p>
            </div>
            <div className="item-actions">
                <button
                    onClick={() => handleEditarCategory(categoryitem)}
                >Editar</button>
                <button>Eliminar</button>
            </div>
        </li>
    );
}

export default Item;