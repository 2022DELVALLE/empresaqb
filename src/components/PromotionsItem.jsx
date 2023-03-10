import React from 'react';

const PromotionItem = ({promtionitem}) => {
    return (
        <div className="box-news box1">
            <img src={promtionitem.image} alt={promtionitem.name}/>
        </div>
    );
}

export default PromotionItem;