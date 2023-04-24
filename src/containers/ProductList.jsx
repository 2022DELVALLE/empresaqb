import React from 'react';
import { useLocation } from 'react-router-dom';

//import sccs
import '../styles/Containers/ProductsList.scss'

//import componets
import ProductItem from '../components/ProductItem';

//iumport appp context
import AppContext from '../context/AppContext';

//improt portal
import PortalAddCart from '../portals/PortalAddCart';

const ProductList = () => {

    //Recupero la lista de productos filtrados
    const { leakedProducts, setLeakedproduct } = React.useContext(AppContext);

    //mostrar combo box
    const [isOpenBox, setIsOpenBox] = React.useState(false);

    function toggleDropDown() {
        setIsOpenBox(!isOpenBox);
    }

    //filtro de  menor a mayor por precio de producto
    const hanldeMenorToMayor = (event) => {
        event.preventDefault();
        const sortedArray = leakedProducts.sort((a, b) =>
            parseFloat(a.priceUnit) - parseFloat(b.priceUnit));
        setLeakedproduct([...sortedArray]);
        setIsOpenBox(!isOpenBox);
    }

    const hanldeMayorToMenor = (event) => {
        event.preventDefault();
        const sortedArray = leakedProducts.sort((a, b) =>
            parseFloat(b.priceUnit) - parseFloat(a.priceUnit));
        setLeakedproduct([...sortedArray]);
        setIsOpenBox(!isOpenBox);
    }

    //Filtro por precio 

    const [minPrice, setMinPrice] = React.useState(0);
    const [maxPrice, setMaxPrice] = React.useState(1000);

    const handleMinPriceChange = (event) => {
        setMinPrice(parseInt(event.target.value));
    }

    const handleMaxPriceChange = (event) => {
        setMaxPrice(parseInt(event.target.value));
    }

    //Recuperamos la señal del portal add cart
    const { portalAddCart, setPortalAddCart, } = React.useContext(AppContext);

    const portalRefAddCart = React.useRef(null);


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


    return (
        <>
            <section className="ProductCardsSection">
                <div className="ProductCardsSectionContain">
                    <div className="ProductCardsSection__header">
                        <div className="ProductsCardsSection__header-title">
                            <div className="ProductsCardsSection__header-rectangle"></div>
                            <div className="ProductsCardsSection__header-titleInformacion">Nombre del Producto</div>
                        </div>
                        <div className="ProductsCardsSection__header-order">
                            <div className="ProductsCardsSection__header-order-label">Ordenar por:</div>
                            <div className="ProductsCardsSection__header-order-drop" id="mostrar">
                                <span className="DropLabelHeader"
                                    onClick={toggleDropDown}
                                >Selecciona</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                                {isOpenBox && (
                                    <div className="OptionDropDownListOrder" id="hide-drop" >
                                        <div
                                            onClick={(event) => hanldeMenorToMayor(event)}
                                        >Precio menor a mayor</div>
                                        <div
                                            onClick={(event) => hanldeMayorToMenor(event)}
                                        >Precio mayor a menor</div>
                                    </div>
                                )}

                            </div>
                        </div>
                        <div className="ProductCardsSection_header-order-filterMobile">
                            <div className="ProductsCardsSection__header-order-drop" id="mostrar" >
                                <span className="DropLabelHeader"
                                    onClick={toggleDropDown}
                                >Selecciona</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                </svg>
                                {isOpenBox && (
                                    <div className="OptionDropDownListOrder" id="hide-drop" >
                                        <div
                                            onClick={() => hanldeMenorToMayor(event)}
                                        >Precio menor a mayor</div>
                                        <div
                                            onClick={() => hanldeMayorToMenor(event)}
                                        >Precio mayor a menor</div>
                                    </div>
                                )}
                            </div>
                            <div className="ProductCardsSection_header-order-filter">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg><span>FILTROS</span>
                            </div>
                        </div>
                    </div>
                    <div className="ProductCardsSection__container">
                        <div className="ProductCardsSection__container-filter">
                            <div className="FilterTitle"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                                <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                            </svg><span>FILTROS</span></div>
                            <div className="FilterPrice">
                                <div className="FilterPrice-title"
                                ><span>Precio</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                                    </svg>
                                </div>
                                <div className="FilterPrice-textDescription">Selecciona un rango de precio para filtrar tu búsqueda.</div>
                                <div className="FilterPrice-Range">
                                    <div className="FilterPrice-QuantityRange">
                                        <div className="FilterPrice-QuantityRange_progress"></div>
                                    </div>
                                    <div className="FilterPrice-inputQuantity">
                                        <div className="FilterPrice-QuantityBox">
                                            <span>Mínimo</span>
                                            <div className="FilterPrice-QuantityBox-NumberPrice">S/.
                                                <input
                                                    type="number"
                                                    className="input-min"
                                                    value={minPrice}
                                                    onChange={handleMinPriceChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="FilterPrice-QuantityBox">
                                            <span>Máximo</span>
                                            <div className="FilterPrice-QuantityBox-NumberPrice">S/.
                                                <input type="number"
                                                    className="input-max"
                                                    value={maxPrice}
                                                    onChange={handleMaxPriceChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="FilterPrice-QuantityRange_Input">
                                        <input type="range"
                                            className="range-min"
                                            min="0"
                                            max="1000"
                                            step="10"
                                            value={minPrice}
                                            onChange={handleMinPriceChange}
                                        />
                                        <input
                                            type="range"
                                            className="range-max"
                                            min="0" max="1000"
                                            step="10"
                                            value={maxPrice}
                                            onChange={handleMaxPriceChange}
                                        />
                                    </div>
                                </div>
                                <div className="FilterPrice-ButtonConfirm"
                                    onClick={() => hanldeMenorToMayor(event)}
                                >
                                    <span>Aplicar Filtro</span></div>
                            </div>
                        </div>
                        <div className="ProductCardsSection__container-cards">
                            {leakedProducts.map((itemproduct) => (
                                <ProductItem itemproduct={itemproduct} key={itemproduct.id} />
                            ))}
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

export default ProductList;