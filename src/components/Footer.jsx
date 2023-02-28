import React from 'react';
import '../styles/Footer.scss'
import logoBackgroundWhite from '../assets/logos/logo-background-white.png';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="group-1">
                <div className="box">
                    <figure>
                        <img src={logoBackgroundWhite} alt="Logo de Ilusion QB" className="logo" />
                    </figure>
                </div>
                <div className="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cum ullam impedit
                        dolorem cumque magni, dolores, obcaecati pariatur quibusdam fugit libero
                        perspiciatis. Iste suscipit illo quidem aut est quia voluptates.</p>
                </div>
                <div className="contacto-red">
                    <div className="box">
                        <h2>¡Síguenos en nuestras redes sociales!</h2>
                        <a href="#" className="bi bi-facebook"></a>
                        <a href="#" className="bi bi-instagram"></a>
                    </div>
                    <div className="box2">
                        <h2>Contacto</h2>
                        <a href="#" className="bi bi-whatsapp"><label>930 820 893</label></a><br />
                        <a href="#" className="bi bi-envelope-at"><label>miguel_bqb@outlook.es</label></a>
                    </div>
                </div>
            </div>
            <div className="group-2">
                <small>&copy; 2023 <b>ILUSION QB</b> - Todos los Derechos Reservados</small>
            </div>
        </footer>

    );
}


export default Footer;