import React from 'react';
import { useNavigate } from 'react-router-dom';

//import app context 
import AppContext from '../context/AppContext';

const SliderItem = ({slider}) => {

    //llamando al metodo de  filter por cagtegory the slider 
    const navigate = useNavigate();

    const {
        handleFilerCategorybySlider
    } = React.useContext(AppContext);

    const hanldeClickFilter = (item) => {
        handleFilerCategorybySlider(item);
        navigate('/products');
    }

    return (
        <div className="slide"
        onClick={()=>hanldeClickFilter(slider)}
        >
        <img src={slider.image} alt={slider.name} />
    </div>
    );
}

export default SliderItem;