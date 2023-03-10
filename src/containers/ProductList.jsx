import React from 'react';
import '../styles/Containers/ProductsList.scss'
import ProductItem from '../components/ProductItem';
import AppContext from '../context/AppContext';


/*
import ModalAddCart from "../components/ModalAddCart";
import AppContext from "../context/AppContext";
import ContextPreviewProduct from "../context/ContextPreviewProduct";

const API = 'https://api-production-11f8.up.railway.app/api/products';
import useGetProducts from '../hooks/useGetProducts';
*/

const ProductList = () => {

    //Recupero la lista de productos filtrados

    const { leakedProducts } = React.useContext(AppContext);
    console.log(leakedProducts);
    /*
    const {products}= useGetProducts(API);

    //llamos al app context para  abrir el modal desde el producto list
    const {
        openModalAddCart,
    } = React.useContext(AppContext);

    //Buscar productos  por texto ingresado
    const { search, setSearch } = React.useContext(ContextPreviewProduct);

    let searchedProducts = [];

    if (!search.length >= 1) {
        searchedProducts = products;
    } else {
        searchedProducts = products.filter(todo => {
            const todoText = todo.title.toLowerCase();
            const searchText = search.toLowerCase();
            return todoText.includes(searchText);
        });
    }

    return (
        <section className="main-container">
            <div className="cards-container">
                {searchedProducts.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
            {!!openModalAddCart && (
                <ModalAddCart></ModalAddCart>
            )}
        </section>
    );*/


    return (
        <section className="ProductCardsSection" >
            <div className="ProductCardsSectionContain">
                <div className="ProductCardsSection__header">
                    <div className="ProductsCardsSection__header-title">
                        <div className="ProductsCardsSection__header-rectangle"></div>
                        <div className="ProductsCardsSection__header-titleInformacion">Nombre del Producto</div>
                    </div>
                    <div className="ProductsCardsSection__header-order">
                        <div className="ProductsCardsSection__header-order-label">Ordenar por:</div>
                        <div className="ProductsCardsSection__header-order-drop" id="mostrar">
                            <span className="DropLabelHeader">Selecciona</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-down-fill"
                                viewBox="0 0 16 16">
                                <path
                                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg>

                            <div className="OptionDropDownListOrder" id="hide-drop">
                                <div>Precio menor a mayor</div>
                                <div>Precio mayor a menor</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ProductCardsSection__container">
                    <div className="ProductCardsSection__container-filter">
                        <div className="FilterTitle"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-filter"
                            viewBox="0 0 16 16">
                            <path
                                d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg><span>FILTROS</span></div>

                        <div className="FilterPrice">
                            <div className="FilterPrice-title"><span>Precio</span><svg xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path
                                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                            </svg></div>

                            <div className="FilterPrice-textDescription">Selecciona un rango de precio para filtrar tu búsqueda</div>

                            <div className="FilterPrice-Range">
                                <div className="FilterPrice-QuantityRange">
                                    <div className="FilterPrice-QuantityRange_progress"></div>
                                </div>
                                <div className="FilterPrice-inputQuantity">
                                    <div className="FilterPrice-QuantityBox">
                                        <span>Mínimo</span>
                                        <div className="FilterPrice-QuantityBox-NumberPrice">
                                            S/.<input type="number" className="input-min"
                                                value={2500} disabled /></div>
                                    </div>
                                    <div className="FilterPrice-QuantityBox">
                                        <span>Máximo</span>
                                        <div className="FilterPrice-QuantityBox-NumberPrice">
                                            S/.<input type="number" className="input-max"
                                                value={7500} disabled /></div>
                                    </div>
                                </div>
                                <div className="FilterPrice-QuantityRange_Input">
                                    <input type="range" className="range-min" min="0" max="10000" value={500} step="10" />
                                    <input type="range" className="range-max" min="0" max="10000" value={7500} step="10" />
                                </div>
                            </div>

                            <div className="FilterPrice-ButtonConfirm"><span>Aplicar Filtro</span></div>
                        </div>
                    </div>

                    <div className="ProductCardsSection__container-cards">

                        {leakedProducts.map((itemproduct) => (
                            <ProductItem itemproduct={itemproduct} key={itemproduct.id} />
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductList;