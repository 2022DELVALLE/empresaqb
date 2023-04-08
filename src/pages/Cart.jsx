import React from "react";
//Import containers
import S1_Navbar from '@containers/S1_Navbar';
import MyOrder from "../containers/MyOrder";
import S5_DataEnterprice from '@containers/S5_DataEnterprice';
import S6_Footer from '@containers/S6_Footer';


const Cart = () => {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <S1_Navbar />
            <MyOrder />
            <S5_DataEnterprice />
            <S6_Footer />
        </div>
    );
}

export default Cart;

