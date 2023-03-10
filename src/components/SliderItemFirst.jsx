import React from 'react';

const SliderItemFirst = ({slider}) => {

    return (
        <div className="slide  firts">
            <img src={slider.image} alt={slider.name} />
        </div>
    );
}

export default SliderItemFirst;