import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductList from '../containers/ProductList';

const Home = () => {
    return (
        <div>
            <Header />
            <ProductList />
            <Footer />
        </div>
    );
}

export default Home;

