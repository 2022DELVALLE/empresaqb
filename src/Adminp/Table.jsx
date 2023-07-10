import React from 'react';
import useGetCategories from '../hooks/useGetCategories';
import Item from './Item';
import './table.css';

const Table = () => {
    // Traemos la data de sliders
    const APICategories = 'http://127.0.0.1:8000/api/categories';

    const categoriesdata = useGetCategories(APICategories);

    return (
        <div className='container-table'>
            <table >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Categoria</th>
                        <th>Imagen</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categoriesdata.map((categoryitem) => (
                        <Item categoryitem={categoryitem} key={categoryitem.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default Table;