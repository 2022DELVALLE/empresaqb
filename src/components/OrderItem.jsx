import React from 'react';

//import app context
import AppContext from '../context/AppContext';
import ProductPreviewContext from '../context/ProductPreviewContext';

function OrderItem({ product }) {

    const { removeFromCart, removeFromCartPedido, stateCartPedido, total, setTotal} = React.useContext(AppContext);

    const handleRemove = product => {
        const objePedido = stateCartPedido.cartPedido.find(item => item.id === product.id);
        console.log("Objeto de pedido encontrado");
        console.log(objePedido);
        removeFromCartPedido(objePedido);
        removeFromCart(product);
    }

    //Control de la cantidad

    const [productQuantity, setProductQuantity] = React.useState(product.quantity);

    const handleAddQuantity = () => {
        if (productQuantity < 999) {
            setProductQuantity(productQuantity + 1);
        }
    }

    const handleRemoveQuantity = () => {
        if (productQuantity > 1) {
            setProductQuantity(productQuantity - 1);
        }
    }

    React.useEffect(() => {
        const objePedido = stateCartPedido.cartPedido.find(item => item.id === product.id);
        objePedido.cantidad = productQuantity;
        console.log("Objeto update cantidad");
        console.log(objePedido);
        console.log("pedidosssssssss");
        console.log(stateCartPedido.cartPedido);

        const reducer = (accumalator, currentValue) => accumalator + (currentValue.precio_unitario * currentValue.cantidad);
        const sum = stateCartPedido.cartPedido.reduce(reducer, 0);
        setTotal(sum);


    }, [productQuantity]);


    return (
        <div className="product-basquet">
            <div className="product-image">
                <img src={product.image[0]} alt={product.title} />
            </div>
            <div className="product-description">
                <div className="product-name">{product.title}</div>
                <div className="product-info">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
                <div className="product-price">S/{product.priceUnit}</div>
            </div>
            <div className="shop-quantity">
                <div className="product-quantity">
                    <div className="product-quantity">
                        <div className="icon-remove"
                            onClick={handleRemoveQuantity}
                        ><i className="bi bi-dash-lg"></i></div>
                        <div className="cont">{productQuantity}</div>
                        <div className="icon-add"
                            onClick={handleAddQuantity}
                        ><i className="bi bi-plus-lg"></i></div>
                    </div>
                </div>
                <div className="product-remove">
                    <button
                        onClick={() => handleRemove(product)}
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