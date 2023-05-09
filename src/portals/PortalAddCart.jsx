import React from 'react';
import ReactDOM from 'react-dom';

// Archivo scss
import '../styles/portal/PortalAddCart.scss';

//Archivo Appcontext
import ProductPreviewContext from '../context/ProductPreviewContext';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const PortalAddCart = ({ portalRefAddCart }) => {

    const navigate = useNavigate();

    const {
        productItemPedido,
        productItemPreview,
        amount,
        setAmount,
    } = React.useContext(ProductPreviewContext);

    const {
        addToCart,
        addToCartPedido,
        setPortalAddCart,
    } = React.useContext(AppContext);

    const hanldeClosePortalAddCart = () => {
        setPortalAddCart(false);
    }

    const onClickAddCart = (item, itemPedido) => {
        productItemPreview.quantity = amount; 
        itemPedido.cantidad = amount;
        itemPedido.precio_total = itemPedido.cantidad * productItemPreview.priceUnit;
        addToCartPedido(itemPedido);
        addToCart(item);
        setH1Text("Agregaste el siguiente producto al carrito");
        setTimeout(() =>
            setPortalAddCart(false),
            navigate('/cart')
            , 1000);
        ;
    }

    //control del mensaje
    const [h1Text, setH1Text] = React.useState("Haga clic en ir al carrito para añadirlo");

    return ReactDOM.createPortal(
        <div className='portal-add-cart'>
            <section className="modal-carrito" ref={portalRefAddCart}>
                <div className="title">
                    <div className="icon-check"
                    >
                        <i className="bi bi-check-circle"></i>
                    </div>
                    <label className="title1">{h1Text}</label>
                    <div className="icon-close"
                        onClick={hanldeClosePortalAddCart}
                    >
                        <i className="bi bi-x-lg"></i>
                    </div>
                </div>

                <div className="container-carrito">
                    <div className="descripcion">
                        <img src={productItemPreview.image[0]} className="image-container" />
                        <div className="descripcion_teo">
                            <div className="categoria">{productItemPreview.category.name}</div>
                            <div className="nombre">{productItemPreview.title}</div>
                            <div className="caracteristica">Caracteristicas principales</div>
                        </div>
                    </div>

                    <div className="precio">
                        <label className="precio-prod">S/. {productItemPreview.priceUnit}</label>
                    </div>

                    <div className="add-remove">
                        <button className="icon-add"
                            onClick={() => setAmount(amount + 1)}
                            disabled={amount >= 999}
                        >
                            <i className="bi bi-plus-lg"></i>
                        </button>

                        <div className="cont">{amount}</div>
                        <button className="icon-remove"
                            onClick={() => setAmount(amount - 1)}
                            disabled={amount <= 1}
                        >
                            <i className="bi bi-dash-lg"></i>
                        </button>
                    </div>
                </div>

                <div className="text">
                    <div className="icon-exclamation">
                        <i className="bi bi-exclamation-circle-fill"></i>
                    </div>
                    <label className="exclamation-text">Los productos de tu carro de compras pueden agotarse próximamente. Cómpralos pronto.</label>
                </div>

                <div className="continue">
                    <div className="link-continue">
                        <a href="">Seguir comprando</a>
                    </div>
                    <div className="primary-button"
                        onClick={() => onClickAddCart(productItemPreview, productItemPedido)}
                    >
                        <button>Ir al Carrito</button>
                    </div>
                </div>
            </section>
        </div>
        , document.getElementById('portaladdcart'))
};

export default PortalAddCart;