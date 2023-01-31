import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Silder';
import ProductList from '../containers/ProductList';


const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <ProductList />            
        </div>
    );
}

export  default Home;

