import React from 'react';
import { useNavigate } from 'react-router-dom';

//Archivo scs
import '../styles/Containers/S1_Navbar.scss';

//Imports portales
import PortalMenuInicio from '../portals/PortalMenuInicio.jsx';
import PortalMenuPrincipal from '../portals/PortalMenuPrincipal';
import Login from '../portals/Login';

//Import Imagenes
import logoBackgroundWhite from '@logos/logo-background-white.png';

//import AppContenxt
import AppContext from '../context/AppContext';

const S1_Navbar = () => {

    const navigate = useNavigate();

    //Metodo para retornar al home

    const hanldeToHome = () => {
        navigate('/');
    }

    //Portal menu iniciar sesion y crear cuenta
    const { showPortal, setShowPortal } = React.useContext(AppContext);

    const portalRef = React.useRef(null);


    function handleButtonClick() {
        setShowPortal(!showPortal);
    }

    function handleClickOutside(event) {
        if (showPortal && portalRef.current &&
            !portalRef.current.contains(event.target)) {
            setShowPortal(false);
        }
    }

    React.useEffect(() => {

        const event = window.innerWidth < 768 ? 'touchstart' : 'mousedown';

        document.addEventListener(event, handleClickOutside);

        return () => {
            document.removeEventListener(event, handleClickOutside);
        }
    });

    //Portal menu principal

    const { portalMenuP, setPortalMenuP } = React.useContext(AppContext);

    const portalRefMenuP = React.useRef(null);


    function handleClickMenuP() {
        setPortalMenuP(!portalMenuP);
    }

    function handleClickOutsideMenuP(event) {
        if (portalMenuP && portalRefMenuP.current &&
            !portalRefMenuP.current.contains(event.target)) {
            setPortalMenuP(false);
        }
    }

    React.useEffect(() => {

        const event = window.innerWidth < 768 ? 'touchstart' : 'mousedown';

        document.addEventListener(event, handleClickOutsideMenuP);

        return () => {
            document.removeEventListener(event, handleClickOutsideMenuP);
        }
    });


    //Almacenamos la palabra que se esta buscado

    const [wordSearch, setWordSearch] = React.useState('');

    const onChangeWordSearch = event => {
        event.preventDefault();
        setWordSearch(event.target.value);
        console.log(wordSearch);
    }

    //Lamammos al contexto y pasamos el metodo de filter por word search

    const { filterProductsBySearch } = React.useContext(AppContext);


    const searchProductsbyWordSearch = () => {
        filterProductsBySearch(wordSearch);
        navigate('/products')
    }

    //Arrow function para realia rla busqueda de productos por word search al dar enter en el input

    const searchProductsbyWordSearchonCkickDown = (event) => {
        if (event.key === 'Enter') {
            filterProductsBySearch(wordSearch);
            navigate('/products')
        }
    }


    // Recupero señal para abrir portal login
    const { portalLogin, setPortalLogin, } = React.useContext(AppContext);

    //Portal de login

    const portalRefLogin = React.useRef(null);

    function handleClickLogin() {
        setPortalLogin(!portalMenuP);
    }

    function handleClickOutsideLogin(event) {
        if (portalLogin && portalRefLogin.current &&
            !portalRefLogin.current.contains(event.target)) {
            setPortalLogin(false);
        }
    }

    React.useEffect(() => {

        const event = window.innerWidth < 768 ? 'touchstart' : 'mousedown';

        document.addEventListener(event, handleClickOutsideLogin);

        return () => {
            document.removeEventListener(event, handleClickOutsideLogin);
        }
    });

    //Ir a la cart
    const hanldeToCart = () => {
        navigate('/cart');
    }
    //Control de numerico encima del carrito
    const { stateCart } = React.useContext(AppContext);

    //Control del nombre inicio sesion por el nombre de usuario
    const { user } = React.useContext(AppContext);

    return (
        <>
            <header>
                <nav className={portalMenuP ? 'navbar ' : 'navbar prioridad'} id="nav-bar">
                    <div className="navbar__logo"
                        onClick={() => hanldeToHome()}
                    >
                        <a>
                            <span> EMPRESA</span>
                        </a>
                        <a >
                            <img src={logoBackgroundWhite} alt="Logo Ilusion QB" />
                        </a>
                    </div>
                    <div className="navbar__menucategories">
                        <div className="container-fluid">
                            <div
                                onClick={() => handleClickMenuP()}
                            >
                                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <i className="fa-solid fa-bars iconmenu"></i>
                                </button>
                                <a className="navbar__menucategory-name">Menú</a>
                            </div>
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
                        <div className="search_input">
                            <input type="text" id="search"
                                name="search" placeholder="Buscar productos"
                                onChange={onChangeWordSearch}
                                value={wordSearch}
                                onKeyDown={searchProductsbyWordSearchonCkickDown}
                            />
                        </div>
                        <div className="seach_icon"
                            onClick={searchProductsbyWordSearch}
                        ><i className="bi bi-search"></i>
                        </div>
                    </div>

                    <div className="navbar__login"
                        onClick={() => handleButtonClick()}
                    >
                        <i className="bi bi-person-circle login-icon"></i>
                        <div className="text-login">
                            <a href="#" value="" >Hola,<br />{user ? user.data.user.name.split(" ").slice(0, 2).join(" ") + '!' : 'inicia sesión!'}</a>
                        </div>
                    </div>
                    <div className="navbar__shop"
                        onClick={hanldeToCart}
                    >
                        <a href="#"><i className="bi bi-cart"></i></a>
                        {stateCart.cart.length > 0 ? <div>{stateCart.cart.length}</div> : null}

                    </div>


                </nav>
            </header>

            {/*Agrego la funcionalidad del Menu con un portal*/}

            {
                showPortal && (
                    <PortalMenuInicio
                        portalRef={portalRef} />
                )
            }

            {/*Agrego la funcionalidad del Menu con un portal principal*/}

            {
                portalMenuP && (
                    <PortalMenuPrincipal
                        portalRefMenuP={portalRefMenuP}
                        setPortalMenuP={setPortalMenuP}
                    />
                )
            }


            {
                portalLogin && (
                    <Login
                        portalRefLogin={portalRefLogin}
                    />
                )

            }

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
            ></script>
            {/*Revisar crossing anomimus*/}
        </>
    );



}

export default S1_Navbar;
