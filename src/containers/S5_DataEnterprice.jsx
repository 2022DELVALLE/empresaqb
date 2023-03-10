import React from 'react';

//Import scss
import '@styles/Containers/Section5_Home.scss';

//Import icons
import ListHome from '@icons/iconListHome.svg';
import BagHome from '@icons/iconBagHome.svg';
import SignUpHome from '@icons/iconSignUpHome.svg';
import CallHome from '@icons/iconCallHome.svg';


const S5_DataEnterprice = () => {
    return (
        <section className="section__beforeFooter">
            <div className="section_beforeFooter-container">
                <div className="section__beforeFooter-img"><img src={ListHome} alt="icono de lista" /></div>
                <div className="section__beforeFooter-title">Envíos</div>
            </div>
            <div className="section_beforeFooter-container">
                <div className="section__beforeFooter-img"><img src={BagHome} alt="icono de bolsa de compras" /></div>
                <div className="section__beforeFooter-title">Gestiona tus pedidos en tu bolsa de compras</div>
            </div>
            <div className="section_beforeFooter-container">
                <div className="section__beforeFooter-img"><img src={SignUpHome} alt="icono de registrarse online" /></div>
                <div className="section__beforeFooter-title">Regístrate y obtén nuestros productos</div>
            </div>
            <div className="section_beforeFooter-container">
                <div className="section__beforeFooter-img"><img src={CallHome} alt="icono de llamada" /></div>
                <div className="section__beforeFooter-title">Regístrate y obtén nuestros productos</div>
            </div>
        </section>
    );
}

export default S5_DataEnterprice;