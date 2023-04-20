import React from 'react';
//Import scss
import '../styles/Page/Home.scss'

//Import containers
import S1_Navbar from '@containers/S1_Navbar';
import S2_Slider from '../containers/S2_Slider';
import S3_Promotions from '@containers/S3_Promotions';
import S4_Categories from '@containers/S4_Categories';
import S5_DataEnterprice from '@containers/S5_DataEnterprice';
import S6_Footer from '@containers/S6_Footer';


const Home = () => {

    return (
        <div>
            <S1_Navbar />
            <div className='section-slider'>
                <S2_Slider />
            </div>
            <S3_Promotions />
            <S4_Categories />
            <S5_DataEnterprice />
            <S6_Footer />
        </div>
    );
}

export default Home;