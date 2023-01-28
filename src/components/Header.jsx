import React from 'react';
import '../styles/Header.css';
import logoBackgroundWhite from  '../assets/logos/logo-background-white.png';


function Header() {
    return (
        <div>
            <header className="header">
                <nav className="header__nav">
                    <div className="name">
                        <figure>
                            <img src={logoBackgroundWhite} alt="Logo de ilusion QB" className="name-logo" />
                                <label>ILUSION QB</label>
                        </figure>
                        <li className="menu">
                            <a href="#"><i className="bi bi-list"></i>Menú</a>
                            <ul className="menu__menu--categ">
                                <li><a href="#">Accesorios de Madera</a></li>
                                <li><a href="#">Cuadernos personalizados</a></li>
                                <li><a href="#">Poleras personalizadas</a></li>
                                <li><a href="#">Recordatorio en madera</a></li>
                                <li><a href="#">Llaveros en madera</a></li>
                                <li><a href="#">Casacas personalizadas</a></li>
                                <li><a href="#">Peluches personalizados</a></li>
                                <li><a href="#">Popsocket</a></li>
                                <li><a href="#">Llaveros destacados</a></li>
                                <li><a href="#">Tazas personalizadas</a></li>
                            </ul>
                        </li>
                    </div>

                    <div className="option_div">
                        <ul className="option">
                            <li className="option__search">
                                <input type="text" id="search" name="search" placeholder="Buscar productos"
                                    className="container-input" />
                                    <a href="#"><i className="bi bi-search"></i></a>
                            </li>
                            <li className="option__login">
                                <i className="bi bi-person-circle"></i>
                                <a href="#">Hola, inicia sesión!</a>
                                <ul className="menu__login-options">
                                    <li><a href="#">Iniciar sesión</a></li>
                                    <li><a href="#">Regístrate</a></li>
                                    <li><a href="#">Mi Cuenta</a></li>
                                </ul>
                            </li>
                            <li className="option__shop">
                                <a href="#"><i className="bi bi-cart"></i></a>
                                <div>18</div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;