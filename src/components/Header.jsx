import React from 'react';
import '../styles/componentsStyles/Header.scss';
import logoBackgroundWhite from '@logos/logo-background-white.png';
import { Link } from 'react-router-dom';



const Header = () => {

    const [search, setSearch] = React.useState('');

    const onSeacrhValueChange = (event) => {
        console.log(event.target.value);
        setSearch(event.target.value);
    }

    return (
        <header>
            <nav class="navbar" id="nav-bar">
                <Link
                    to={"/"}
                >
                    <div class="navbar__logo" >
                        <a href=""><img src={logoBackgroundWhite} alt="Logo Ilusion QB" /></a>
                        <a href=""><span>ILUSION QB</span></a>
                    </div>
                </Link>
                <div class="navbar__menucategories">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <i class="fa-solid fa-bars iconmenu"></i>
                        </button>
                        <a class="navbar__menucategory-name">Menú</a>
                        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Categorias</h5>
                                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close">
                                </button>
                            </div>
                            <div class="offcanvas-body">
                                <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li class="nav-item"><a class="nav-link" href="#">Accesorios de Madera</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Cuadernos personalizados</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Poleras personalizadas</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Recordatorio en madera</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Llaveros en madera</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Casacas personalizadas</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Peluches personalizados</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Popsocket</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Llaveros destacados</a></li>
                                    <li class="nav-item"><a class="nav-link" href="#">Tazas personalizadas</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar__search">
                    <input type="text" id="search" name="search" placeholder="Buscar productos" 
                    onChange={onSeacrhValueChange}
                    value={search}
                    />
                    <a href="#"><i class="bi bi-search"></i></a>
                </div>
                <div class="navbar__login">
                    <i class="bi bi-person-circle"></i>
                    <a href="#">Hola, inicia sesión!</a>
                </div>
                <Link
                    to={"/DetailsCart"}
                >
                    <div class="navbar__shop">
                        <a href="#"><i class="bi bi-cart"></i></a>
                        <div>18</div>
                    </div>
                </Link>
            </nav>
        </header>

    );
}

export default Header;