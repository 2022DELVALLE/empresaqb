import React from 'react';
import ReactDOM from 'react-dom';

// Archivo scss
import '../styles/portal/PortalAddCart.scss';

//Archivo Appcontext
import AppContext from '../context/AppContext';
import ContextPreviewProduct from '../context/ProductPreviewContext.js';

function PortalAddCart({ portalRefAddCart }) {
    /*
    //Controladores del modaladdcart y cantidad del producto
    const {
        setOpenModalAddCart,
        quantity,
        setQuantity,
        addToCart,
    } = React.useContext(AppContext);

    const onClickModalAddCart = () => {
        setOpenModalAddCart(false);
    };

    //Recupero producto enviado desde el details
    const { productItemPreview, setProductItemPreview } = React.useContext(ContextPreviewProduct);

    //Agremos un producto a la carta
    const onClickAddCart = item => {
        productItemPreview.amount = quantity;
        addToCart(item);
        setOpenModalAddCart(false);
    }

    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            <section className="modal-carrito">
                <div className="title">
                    <div className="icon-check"><i className="bi bi-check-circle"></i></div>
                    <label className="title1">Agregaste el siguiente producto al carrito</label>
                    <div className="icon-close"
                        onClick={onClickModalAddCart}
                    ><i className="bi bi-x-lg"></i></div>
                </div>

                <div className="container-carrito">
                    <div className="descripcion">
                        <img src={productItemPreview.image} className="image-container" />
                        <div className="descripcion_teo">
                            <div className="categoria">CATEGORIA</div>
                            <div className="nombre">{productItemPreview.title}</div>
                            <div className="caracteristica">Caracteristicas principales</div>
                        </div>
                    </div>

                    <div className="precio">
                        <label className="precio-prod">S/{productItemPreview.priceUnit}</label>
                    </div>

                    <div className="add-remove">
                        <div className="icon-remove"
                            onClick={() => setQuantity(quantity - 1)}
                            disabled={quantity <= 0}
                        ><i className="bi bi-dash-lg"></i></div>
                        <div className="cont">{quantity}</div>
                        <div className="icon-add"
                            onClick={() => setQuantity(quantity + 1)}
                            disabled={quantity >= 999}
                        ><i className="bi bi-plus-lg"></i></div>
                    </div>
                </div>

                <div className="text">
                    <div className="icon-exclamation"><i className="bi bi-exclamation-circle-fill"></i></div>
                    <label className="exclamation-text">Los productos de tu carro de compras pueden agotarse próximamente. Cómpralos pronto.</label>
                </div>

                <div className="continue">
                    <div className="link-continue"><a href="">Seguir comprando</a></div>
                    <div className="primary-button">
                        <button
                            onClick={() => onClickAddCart(productItemPreview)}
                        >Agregar al carrito
                        </button>
                    </div>
                </div>
            </section>
        </div>
        , document.getElementById('modaladdcart')
    )*/

    return ReactDOM.createPortal(
        <div className='portal-add-cart'>
            <section className="modal-carrito" ref={portalRefAddCart}>
                <div className="title">
                    <div className="icon-check">
                        <i className="bi bi-check-circle"></i>
                    </div>
                    <label className="title1">Agregaste el siguiente producto al carrito</label>
                    <div className="icon-close">
                        <i className="bi bi-x-lg"></i>
                    </div>
                </div>

                <div className="container-carrito">
                    <div className="descripcion">
                        <img src="https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/42736954-dFrbeluZ.jpg" className="image-container" />
                        <div className="descripcion_teo">
                            <div className="categoria">CATEGORIA</div>
                            <div className="nombre">Producto 1</div>
                            <div className="caracteristica">Caracteristicas principales</div>
                        </div>
                    </div>

                    <div className="precio">
                        <label className="precio-prod">S/. 1,199.99</label>
                    </div>

                    <div className="add-remove">
                        <div className="icon-remove">
                            <i className="bi bi-dash-lg"></i>
                        </div>
                        <div className="cont">1</div>
                        <div className="icon-add">
                            <i className="bi bi-plus-lg"></i>
                        </div>
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
                    <div className="primary-button">
                        <button>Ir al Carrito</button>
                    </div>
                </div>
            </section>
        </div>
        , document.getElementById('portaladdcart'))
};

export default PortalAddCart;