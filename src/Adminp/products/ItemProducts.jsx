import React from 'react';
import AppContext from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import useProDelete from '../../hooks/useProDelete';
import Swal from 'sweetalert2';

const ItemProducts = ({ productitem }) => {

    const { productospasado, setProductosPasado } = React.useContext(AppContext);

    const navigate = useNavigate();

    const handleEditarProduct = (itemproducto) => {
        navigate('/editarproductos');
        setProductosPasado(itemproducto);
    }

    const { responseDeleteProduct, error, loading, deleteProduct } = useProDelete();



    const handleDeleteProduct = (idproducto) => {
        deleteProduct(idproducto);
    }

    React.useEffect(() => {
        if (responseDeleteProduct) {
            if (responseDeleteProduct.res === true) {
                Swal.fire({
                    title: 'Se eliminó exitosamente',
                    confirmButtonText: 'Aceptar',
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload();
                    }
                });
            }
        }
    }, [responseDeleteProduct]);

    React.useEffect(() => {
        if (error) {
            Swal.fire(
                '¡Ups!',
                error.message,
                'info'
            );
        }
    }, [error]);

    console.log(error);
    console.log(responseDeleteProduct);
    return (
        <tr>
            <td>{productitem.id}</td>
            <td>{productitem.title}</td>
            <td>{productitem.priceUnit}</td>
            <td>{productitem.priceDozens}</td>
            <td>{productitem.description}</td>
            <td className='part-image' >{productitem.image[0]}</td>
            <td>{productitem.quantity}</td>
            <td>{productitem.category_id}</td>

            <td>
                <button  className='button-editar'  onClick={() => handleEditarProduct(productitem)}>Editar</button>
                <button className='button-eliminar'  onClick={() => handleDeleteProduct(productitem.id)}>Eliminar</button>
            </td>
        </tr>
    );
}

export default ItemProducts;