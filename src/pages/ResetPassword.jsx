import React from 'react';

//import scss
import '../styles/Page/ResetPassword.scss'

//Import containers
import S1_Navbar from '@containers/S1_Navbar';
import S5_DataEnterprice from '@containers/S5_DataEnterprice';
import S6_Footer from '@containers/S6_Footer';
import ResetPasswordComponent from '../components/ResetPasswordComponent.jsx';

const ResetPassword = () => {
    return (
        <>
            <S1_Navbar />
            <div className='reset-password'>
                <ResetPasswordComponent />
            </div>
            <S5_DataEnterprice />
            <S6_Footer />
        </>
    );
}

export default ResetPassword;