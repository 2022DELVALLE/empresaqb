import React from 'react';
//Import scss
import '../styles/Page/RecoveringPassword.scss';

//Import containers
import S1_Navbar from '@containers/S1_Navbar';
import RecoveringPasswordComponent from '../components/RecoveringPasswordComponent.jsx';
import S5_DataEnterprice from '@containers/S5_DataEnterprice';
import S6_Footer from '@containers/S6_Footer';

const RecoveringPassword = () => {
    return (<>
        <S1_Navbar />
        <div className='recovering-password'>
            <RecoveringPasswordComponent />
        </div>
        <S5_DataEnterprice />
        <S6_Footer />
    </>
    );
}

export default RecoveringPassword;