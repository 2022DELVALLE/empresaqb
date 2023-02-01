import React from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/Products.css';



const API = 'https://api-production-11f8.up.railway.app/api/products';

import useGetProducts from '../hooks/useGetProducts';


function ProductList() {

    const products = useGetProducts(API);


    return (
        <section class="main-container">
            <div class="cards-container">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;