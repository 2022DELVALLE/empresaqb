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
            <nav className="navbar" id="nav-bar">
                <Link
                    to={"/"}
                >
                    <div className="navbar__logo" >
                        <img src={logoBackgroundWhite} alt="Logo Ilusion QB" />
                        <span>ILUSION QB</span>
                    </div>
                </Link>
                <div className="navbar__menucategories">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <i className="fa-solid fa-bars iconmenu"></i>
                        </button>
                        <a className="navbar__menucategory-name">Menú</a>
                        <div className="offcanvas offcanvas-end" id="offcanvasNavbar"
                            aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Categorias</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                                    aria-label="Close">
                                </button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="#">Accesorios de Madera</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Cuadernos personalizados</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Poleras personalizadas</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Recordatorio en madera</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Llaveros en madera</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Casacas personalizadas</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Peluches personalizados</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Popsocket</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Llaveros destacados</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#">Tazas personalizadas</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar__search">
                    <input type="text" id="search" name="search" placeholder="Buscar productos"
                        onChange={onSeacrhValueChange}
                        value={search}
                    />
                    <a href="#"><i className="bi bi-search"></i></a>
                </div>
                <div className="navbar__login">
                    <i className="bi bi-person-circle"></i>
                    <a href="#">Hola, inicia sesión!</a>
                </div>
                <Link
                    to={"/DetailsCart"}
                >
                    <div className="navbar__shop">
                        <i className="bi bi-cart"></i>
                        <div>18</div>
                    </div>
                </Link>
            </nav>
        </header>

    );
}

export default Header;