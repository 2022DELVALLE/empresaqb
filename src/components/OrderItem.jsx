import React from 'react';

//import app context
import AppContext from '../context/AppContext';

function OrderItem({ product }) {


    const { removeFromCart } = React.useContext(AppContext);

    const handleRemove = product => {
        removeFromCart(product);
    }

    return (
        <div className="product-basquet">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-description">
                <div className="product-name">{product.title}</div>
                <div className="product-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div className="product-price">S/{product.priceUnit}</div>
            </div>
            <div className="shop-quantity">
                <div className="product-quantity">
                    <div className="icon-remove"><i className="bi bi-dash-lg"></i></div>
                    <div className="cont">{product.quantity}</div>
                    <div className="icon-add"><i className="bi bi-plus-lg"></i></div>
                </div>
                <div className="product-remove">
                    <button 
                    onClick={()=> handleRemove(product)}
                    >
                        <i className="bi bi-trash3">
                        </i>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
};

export default OrderItem;