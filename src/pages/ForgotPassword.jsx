import React from 'react';
//Import scss
import '../styles/Page/RecoveringPassword.scss';

//Import containers
import S1_Navbar from '@containers/S1_Navbar';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent.jsx';
import S5_DataEnterprice from '@containers/S5_DataEnterprice';
import S6_Footer from '@containers/S6_Footer';

const ForgotPassword = () => {
    return (
        <>
            <S1_Navbar />
            <div className='recovering-password'>
                <ForgotPasswordComponent />
            </div>
            <S5_DataEnterprice />
            <S6_Footer />
        </>
    );
}

export default ForgotPassword;