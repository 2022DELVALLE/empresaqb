import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Slider from '../components/Silder';
import ProductList from '../containers/ProductList';


const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <ProductList /> 
            <Footer/>           
        </div>
    );
}

export  default Home;

