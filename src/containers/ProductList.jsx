import React from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/containersStyles/Products.scss'


const API = 'https://api-production-11f8.up.railway.app/api/products';

import useGetProducts from '../hooks/useGetProducts';


const   ProductList = () => {

    const products = useGetProducts(API);

    return (
        <section className="main-container">
            <div className="cards-container">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;