import React from 'react'

//import  containers
import S1_Navbar from '@containers/S1_Navbar';
import MyAccountComponent from '../components/MyAccountComponent';
import S5_DataEnterprice from '@containers/S5_DataEnterprice';
import S6_Footer from '@containers/S6_Footer';

//import css
import '../styles/Page/MyAccount.scss'

const MyAccount = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <S1_Navbar />
            <div className='section-my-account'>
                <MyAccountComponent />
            </div>
            <S5_DataEnterprice />
            <S6_Footer />
        </>
    );
}

export default MyAccount;