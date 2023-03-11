import React from 'react';
//import scss
import '../styles/Page/DetailsProduct.scss';

//Import containers
import S1_Navbar from '@containers/S1_Navbar';
import S5_DataEnterprice from '@containers/S5_DataEnterprice';
import S6_Footer from '@containers/S6_Footer';

//import detalle de producto
import Details from '../components/Details';

const DetailsProduct = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <S1_Navbar />
            <div className='details-product'>
                <Details />
            </div>
            <S5_DataEnterprice />
            <S6_Footer />
        </>

    );
}

export default DetailsProduct;