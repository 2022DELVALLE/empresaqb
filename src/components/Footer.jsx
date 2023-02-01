import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer class="footer-container">
            <div class="group-1">
                <div class="box">
                    <figure>
                        <img src="../images/logo-white.png" alt="Logo de Ilusion QB" class="logo" />
                    </figure>
                </div>
                <div class="box">
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo cum ullam impedit
                        dolorem cumque magni, dolores, obcaecati pariatur quibusdam fugit libero
                        perspiciatis. Iste suscipit illo quidem aut est quia voluptates.</p>
                </div>
                <div class="contacto-red">
                    <div class="box">
                        <h2>¡Síguenos en nuestras redes sociales!</h2>
                        <a href="#" class="bi bi-facebook"></a>
                        <a href="#" class="bi bi-instagram"></a>
                    </div>
                    <div class="box2">
                        <h2>Contacto</h2>
                        <a href="#" class="bi bi-whatsapp"><label>930 820 893</label></a><br />
                        <a href="#" class="bi bi-envelope-at"><label>miguel_bqb@outlook.es</label></a>
                    </div>
                </div>
            </div>
            <div class="group-2">
                <small>&copy; 2023 <b>ILUSION QB</b> - Todos los Derechos Reservados</small>
            </div>
        </footer>

    );
}


export default Footer;