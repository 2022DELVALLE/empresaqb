import React from 'react';

//Import containers
import S1_Navbar from '@containers/S1_Navbar';
import MyPayment from "../components/MyPayment";
import S5_DataEnterprice from '@containers/S5_DataEnterprice';
import S6_Footer from '@containers/S6_Footer';

const Payment = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <S1_Navbar />
            <MyPayment />
            <S5_DataEnterprice />
            <S6_Footer />
        </div>
    );
}

export default Payment;