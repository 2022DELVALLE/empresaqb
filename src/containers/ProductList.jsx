import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/containersStyles/Products.scss'
import ModalAddCart from "../components/ModalAddCart";
import AppContext from "../context/AppContext";
import ContextPreviewProduct from "../context/ContextPreviewProduct";

const API = 'https://api-production-11f8.up.railway.app/api/products';
import useGetProducts from '../hooks/useGetProducts';


const ProductList = () => {

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
    );
}

export default ProductList;