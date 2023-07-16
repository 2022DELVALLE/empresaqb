import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import Swal from 'sweetalert2';

import useCatDelete from '../hooks/useCatDelete';

const Item = ({ categoryitem }) => {
    const { categoria, setCategoria } = React.useContext(AppContext);
    const { responseDeleteCategory, error, loading, deleteCategory } = useCatDelete();
    const navigate = useNavigate();

    const handleEditarCategory = (itemcategoria) => {
        navigate('/editcategory');
        setCategoria(itemcategoria);
    }

    const handleDeleteCategory = (idcategory) => {
        deleteCategory(idcategory);
    }

    React.useEffect(() => {
        if (responseDeleteCategory) {
            if (responseDeleteCategory.res === true) {
                Swal.fire({
                    title: responseDeleteCategory.message,
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            }
        }
    }, [responseDeleteCategory]);

    React.useEffect(() => {
        if (error) {
            Swal.fire(
                '¡Ups!',
                error.message,
                'info'
            );
        }
    }, [error]);

    return (
        <tr>
            <td>{categoryitem.id}</td>
            <td>{categoryitem.name}</td>
            <td className='part-image'>{categoryitem.image}</td>
            <td>{categoryitem.description}</td>
            <td>
                <button className='button-editar' onClick={() => handleEditarCategory(categoryitem)}>Editar</button>
                <button className='button-eliminar' onClick={() => handleDeleteCategory(categoryitem.id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default Item;
