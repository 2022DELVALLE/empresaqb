import React from 'react';
import { useNavigate } from 'react-router-dom';

//import app context 
import AppContext from '../context/AppContext';

const SliderItemFirst = ({ slider }) => {

    const navigate = useNavigate();

    const {
        handleFilerCategorybySlider, leakedProducts, saveLeackedLocalStorage
    } = React.useContext(AppContext);

    const hanldeClickFilter = (item) => {
        handleFilerCategorybySlider(item);
        navigate('/products');
        saveLeackedLocalStorage(leakedProducts);
    }


    return (
        <div className="slide  firts"
            onClick={() => hanldeClickFilter(slider)}
        >
            <img src={slider.image} alt={slider.name} />
        </div>
    );
}

export default SliderItemFirst;