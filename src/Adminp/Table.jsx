import React from 'react';
import useGetCategories from '../hooks/useGetCategories';
import Item from './Item';
import './table.css';

const Table = () => {
    //Traemos la data de sliders
    const APICategories = 'https://api-empresaqb-version3-production.up.railway.app/api/categories';

    const categoriesdata = useGetCategories(APICategories);

    return (
        <div className="table-container">
            <ul className="list-table" id="myList">
                {categoriesdata.map((categoryitem) => (
                    <Item categoryitem={categoryitem} key={categoryitem.id} />
                ))}
            </ul>

        </div>
    );
}

export default Table;