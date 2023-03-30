import React from 'react';
//import scss
import '../styles/Components/Details.scss';

//import product preview context
import ProductPreviewContext from "../context/ProductPreviewContext.js";

//Import app context
import AppContext from '../context/AppContext';
import PortalAddCart from '../portals/PortalAddCart';

const Details = () => {

    //Recuperamos el product preview item

    const { productItemPreview, setProductItemPreview } = React.useContext(ProductPreviewContext);

    //Recuperamos la señal del portal add cart
    const { portalAddCart, setPortalAddCart, } = React.useContext(AppContext);


    const portalRefAddCart = React.useRef(null);

    function handleOpenAddCart(item) {
        setProductItemPreview(item);
        setPortalAddCart(!portalAddCart);
    }

    function handleCloseAddCart(event) {
        if (portalAddCart && portalRefAddCart.current &&
            !portalRefAddCart.current.contains(event.target)) {
            setPortalAddCart(false);
        }
    }

    React.useEffect(() => {

        const event = window.innerWidth < 768 ? 'touchstart' : 'mousedown';

        document.addEventListener(event, handleCloseAddCart);

        return () => {
            document.removeEventListener(event, handleCloseAddCart);
        }
    });


    //Verificamos la cantidad ingresas

    const { amount, setAmount } = React.useContext(ProductPreviewContext);


    //control de imagenes
    const [mainImgSrc, setMainImgSrc] = React.useState(productItemPreview.image[0]);
    const [mainImgAlt, setMainImgAlt] = React.useState("");
    const imgRef = React.useRef(null);
    const containerRef = React.useRef(null);

    const handleThumbnailClick = (imgSrc, imgAlt) => {
        setMainImgSrc(imgSrc);
        setMainImgAlt(imgAlt);
    };

    React.useEffect(() => {
        const container = containerRef.current;
        const img = imgRef.current;

        const handleMouseMove = (e) => {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;

            img.style.transformOrigin = `${x}px ${y}px`;
            img.style.transform = "scale(2)";
        };

        const handleMouseLeave = () => {
            img.style.transformOrigin = "center";
            img.style.transform = "scale(1)";
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);


    return (
        <>
            <section className="section_component_Product_info">
                <div className="Container_Card_Information">
                    <div className="Container_Breadcrums">
                        <ul>
                            <li className="CenterBreadcrums-0">
                                <a href="">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="CenterBreadcrums">
                                <a href="">Home</a>
                            </li>
                            <li className="CenterBreadcrums">
                                <a href=""><i className="fa-solid fa-chevron-left"></i></a>
                            </li>
                            <li className="CenterBreadcrums">
                                <a href="">Categoría</a>
                            </li>
                            <li className="CenterBreadcrums">
                                <a href=""><i className="fa-solid fa-chevron-left"></i></a>
                            </li>
                            <li className="CenterBreadcrums">
                                <a href="">Polos personalizados</a>
                            </li>
                        </ul>
                    </div>

                    <div className="Container_cards">
                        <div className="Image_Product">
                            <div className="image-big" id="container_image_big" ref={containerRef}>
                                <img src={mainImgSrc} id="MainImg" alt={mainImgAlt} ref={imgRef} />
                            </div>
                            <div className="minigallery">
                                {productItemPreview.image.map((imgSrc, index) => (
                                    <div href="" key={index}>
                                        <img
                                            src={imgSrc}
                                            className="small-img"
                                            alt=""
                                            onClick={() => handleThumbnailClick(imgSrc, `img-${index}`)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="Description_product">
                            <h1>{productItemPreview.title}</h1>
                            <h2>Descripción</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus id quam iste vitae culpa perferendis, omnis magnam autem vero voluptates nam delectus tempora eligendi rem ex tempore dolor possimus consequuntur.</p>
                            <div className="content-items-product-info">
                                <div className="price">S/{productItemPreview.priceUnit}</div>
                                <div className="quanty">
                                    <button className="elipse-btn"
                                        onClick={() => setAmount(amount + 1)}
                                        disabled={amount >= 999}
                                    >
                                        <i className="fa-solid fa-plus"></i>
                                    </button>
                                    <div className="number-quanty">{amount}</div>
                                    <button className="elipse-btn"
                                        onClick={() => setAmount(amount - 1)}
                                        disabled={amount <= 0}
                                    >
                                        <i className="fa-solid fa-minus"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="btn_Add_car"
                                onClick={() => handleOpenAddCart(productItemPreview)}
                            >
                                <a href="#">Agregar al Carro</a>
                            </div>
                            <div className="personalization-information">
                                <div>¿Quieres personalizar este producto? </div>
                                <a href="https://api.whatsapp.com/send?phone=930820893&text=Welcome to EmpresaQB"> Contacta a una asesor</a>
                            </div>
                        </div>
                    </div>
                </div>
                {portalAddCart && (
                    <PortalAddCart portalRefAddCart={portalRefAddCart} setPortalAddCart={setPortalAddCart} />
                )}
            </section>
        </>
    );
}

export default Details;