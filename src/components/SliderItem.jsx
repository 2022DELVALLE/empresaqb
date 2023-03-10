import React from 'react';

const SliderItem = ({slider}) => {
    return (
        <div className="slide">
        <img src={slider.image} alt={slider.name} />
    </div>
    );
}

export default SliderItem;