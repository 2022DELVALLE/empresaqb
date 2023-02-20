import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/containersStyles/Products.scss'
import ModalAddCart from "../components/ModalAddCart";
import AppContext from "../context/AppContext";

const API = 'https://api-production-11f8.up.railway.app/api/products';

import useGetProducts from '../hooks/useGetProducts';


const ProductList = () => {

    const products = useGetProducts(API);

    //llamos al app context para  abrir el modal desde el producto list
    const {
        openModalAddCart,
        setOpenModalAddCart,
    } = React.useContext(AppContext);

    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product => (
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