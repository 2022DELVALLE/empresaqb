import React from 'react';
import useGetProducts from '../../hooks/useGetProducts';
import ItemProducts from './ItemProducts';
import { useNavigate } from 'react-router-dom';

import '../table.css';

const Tableproducts = () => {
    //Traemos la data de sliders
    const APIProducts = 'http://127.0.0.1:8000/api/products';
    const productsdata = useGetProducts(APIProducts);

    const navigate = useNavigate();

    const handleOnAñadirProducto = () => {
        navigate('/anadirproductos')
    }

    return (
        <>
        <div className='container-boton-añadir'>
        <button
            className='boton-añadir'
                onClick={() => handleOnAñadirProducto()}
            >
                Añadir productos
            </button>
        </div>
            <div className='container-table'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Precio Unitario</th>
                            <th>Precio por Docena</th>
                            <th>Descripción</th>
                            <th>image</th>
                            <th>cantidad</th>
                            <th>CategoriaId</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsdata.map((productitem) => (
                            <ItemProducts productitem={productitem} key={productitem.id} />
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
}

export default Tableproducts;