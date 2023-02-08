import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';
import SliderContainer from '../containers/SliderContainer';


const Home = () => {
    return (
        <div>
            <Header/>
            <SliderContainer/>
            <ProductList /> 
            <Footer/>                   
        </div>
    );
}

export  default Home;

