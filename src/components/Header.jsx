import React from 'react';
import '../styles/navbar.css';
import logoBackgroundWhite from '@logos/logo-background-white.png'


function Header() {


    const onChange = (event)=> {
        console.log(event);
    }

    return (
            <section>
                <nav className="navbar" id="nav-bar">
                    <div className="navbar__logo">
                        <a href=""><img src={logoBackgroundWhite} alt="Logo Ilusion QB" /></a>
                        <a href=""><span>ILUSION QB</span></a>
                    </div>

                    <div className="navbar__menucategories">
                        <div className="navbar__menucategories-name" id="openClose">
                            <a href="#"><i className="bi bi-list"></i></a>
                            <div className="name__menu">
                                <span>Menú de</span>
                                <span>categorías</span>
                            </div>
                        </div>
                        <ul className="menu--categ desplegar" id="menuCateg">
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
                    </div>

                    <div className="navbar__search">
                        <input type="text" id="search" name="search" placeholder="Buscar productos" />
                            <a href="#"><i className="bi bi-search"></i></a>
                    </div>

                    <div className="navbar__login">
                        <i className="bi bi-person-circle"></i>
                        <a href="#">Hola, inicia sesión!</a>
                    </div>

                    <div className="navbar__shop">
                        <a href=""><i className="bi bi-cart"></i></a>
                        <div>18</div>
                    </div>
                </nav>
            </section>
        
    );
}

export default Header;