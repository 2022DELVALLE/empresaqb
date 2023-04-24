import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

//Import scss
import '../styles/portal/Login.scss'

//import imagenes
import logo_login from '../assets/logos/logo.jpg';
import { useNavigate } from 'react-router-dom';

//import appcontext
import AppContext from '../context/AppContext';

//import get customer
import useLoginCustomer from '../hooks/useLoginCustomer';

const Login = ({ portalRefLogin }) => {

    const navigate = useNavigate();

    // Recupero señal para cerrar portal login 
    const { portalLogin, setPortalLogin, saveUserLocalStorage } = React.useContext(AppContext);

    const handleToRegistration = () => {
        setPortalLogin(false);
        navigate('/createaccount');
    }

    // Cerrar el portal de login y abrir la pagina de recovering password

    const hanldeToRecoveringPassword = () => {
        setPortalLogin(false);
        navigate('/forgot-password');
    }

    //Recupero señal del portal login para cerrar al dar clin en x

    const handleCloseLogin = () => {
        setPortalLogin(false);
    }

    const { user, loginCustomer, error } = useLoginCustomer();

    console.log("user");
    console.log(user);
    React.useEffect(() => {
        if (error) {
            console.log(error);
            alert(error.message);
        }
    }, [error]);

    React.useEffect(() => {
        if (user) {
            if (user.res = true) {
                alert(user.message);
                saveUserLocalStorage(user);
                setPortalLogin(!portalLogin);
            }
        }

    }, [user]);

    const formLogin = useRef(null);

    const hanldeSubmitLogin = (event) => {
        event.preventDefault();
        const formData = new FormData(formLogin.current);
        const userrecovering = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        console.log(userrecovering);
        loginCustomer(userrecovering);

    }

    //Ver contraseña y ocultar
    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    return ReactDOM.createPortal(
        <div className='portal-login-background'>
            <section className="ComponentModalLogin" ref={portalRefLogin}>
                <div className="ComponentModalLogin__close"
                    onClick={handleCloseLogin}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                        className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path
                            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </div>

                <div className="ComponentModalLogin__header">
                    <div className="ComponentModalLogin__header-logo">
                        <img src={logo_login} alt="icono de Empresa QB" />

                    </div>
                    <div className="ComponentModalLogin__header-title">Bienvenido!</div>
                </div>


                <form action="/" className="ComponentModalLogin__FormLogin" ref={formLogin}>
                    <label className="labelFormLogin">Correo electrónico</label>
                    <input
                        className="inputFormLogin emailLoginInput"
                        type="text"
                        placeholder="Ingresa tu correo electronico"
                        name='email' />
                    <label className="labelFormLogin">Contraseña</label>
                    <div className="passwordLoginInput">
                        <div className="password">
                            <input
                                className="inputFormLogin"
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Ingresa tu contraseña"
                                name='password'
                            />
                        </div>
                        <div className="iconShow-hideLogin"
                            onClick={() => handleShowPassword(event)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path
                                    d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </div>
                    </div>

                    <span className="forgotPasswordLogin"
                        onClick={hanldeToRecoveringPassword}
                    >
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </span>

                    <button
                        className="buttonLogin"
                        onClick={() => hanldeSubmitLogin(event)}
                    >
                        Inicia Sesión
                    </button>

                </form>
                <div className="ComponentModalLogin__o"><span>o</span></div>
                <div className="ComponentModalLogin__signUp">
                    <span>¿Aún no tienes una cuenta? <a href="#"
                        onClick={handleToRegistration}
                    >Regístrate</a></span>
                </div>
            </section>
        </div>
        , document.getElementById('openlogin')
    );
}

export default Login;