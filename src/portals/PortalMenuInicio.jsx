import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

//import scss
import '../styles/portal/PortalMenuInicio.scss';

//import appcontext
import AppContext from '../context/AppContext';

const PortalMenuInicio = ({ portalRef }) => {

    const navigate = useNavigate();

    // Recupero señal para abrir portal login y la señal para cerrar el portal meni inicio
    const { portalLogin, setPortalLogin, setShowPortal } = React.useContext(AppContext);


    //Function para ir a la pagina de registarse

    const handletoRegistration = () => {
        navigate('/createaccount')
        setShowPortal(false);
    }


    //Portal de login

    function handleClickLogin(event) {
        event.preventDefault();
        setPortalLogin(!portalLogin);
        setShowPortal(false);
    }



    return ReactDOM.createPortal(
        <div className="backgroundmobiledesktop">
            <div className="ComponentLoginDesplegable"
                ref={portalRef}
            >
                <div className="ComponentLoginDesplegable-triangulo">
                    <div className="triangulo"></div>
                </div>
                <div className="ComponentLoginDesplegable-container">
                    <div className="ComponentLoginDesplegable-box1">
                        <div className="ComponentLoginDesplegable-box1-label"
                            onClick={() => handleClickLogin(event)}
                        >
                            <a href="#">Iniciar Sesión</a>
                        </div>
                        <div className="ComponentLoginDesplegable-box1-label">
                            <a href="#">Mi cuenta</a>
                        </div>
                    </div>
                    <div className="ComponentLoginDesplegable-box2"
                        onClick={handletoRegistration}
                    >
                        <a href="#">Regístrate</a>
                    </div>
                </div>
            </div>
        </div>,
        document.getElementById('idopenmenu')
    );
}

export default PortalMenuInicio;