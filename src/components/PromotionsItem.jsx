import React from 'react';
import { useNavigate } from 'react-router-dom';

//import context 
import ProductPreviewContext from "../context/ProductPreviewContext.js";

const PromotionItem = ({promtionitem}) => {

    const navigate = useNavigate();

	// Guardo un producto preview para ver sus details mas claro
	const { productItemPreview, setProductItemPreview } = React.useContext(ProductPreviewContext);

    const handleProductSavePreview = (item) => {
        setProductItemPreview(item);
        navigate('/details')
    }

    return (
        <div className="box-news box1"
        onClick={()=>handleProductSavePreview(promtionitem.product)}
        >
            <img src={promtionitem.image} alt={promtionitem.name}/>
        </div>
    );
}

export default PromotionItem;