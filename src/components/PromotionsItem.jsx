import React from 'react';
import { useNavigate } from 'react-router-dom';

//import context 
import ProductPreviewContext from "../context/ProductPreviewContext.js";

const PromotionItem = ({ promotionitem }) => {

    const navigate = useNavigate();

    // Guardo un producto preview para ver sus details mas claro
    const { setAmount, setProductItemPreview } = React.useContext(ProductPreviewContext);

    const handleProductSavePreview = (item) => {
        setAmount(1);
        setProductItemPreview(item);
        navigate('/details')
    }

    return (
        <div className="box-news box1"
            onClick={() => handleProductSavePreview(promotionitem.product)}
        >
            <img src={promotionitem.image} alt={promotionitem.name} />
        </div>
    );
}

export default PromotionItem;