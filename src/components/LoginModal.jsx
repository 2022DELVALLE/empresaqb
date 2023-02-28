import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginModal.scss'

function MoginModal() {
    return (
        <div className="login-modal-container">
            <div className="login-modal">
                <form action="" className="form-login-modal">
                    <div>
                        <input type="text" placeholder="Usuario" className="input-user" />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="*********" className="input-password" id="password" />
                        <i className="bi bi-eye" id="show"></i>
                    </div>
                    <div>
                        <a href="" className="ancle">¿Olvidaste tu contraseña?</a>
                        <input type="submit" value="Iniciar sesión" className="primary-button" />
                        <a href="" className="ancle">¿Aún no tienes cuenta con nosotros?</a>
                        <Link
                        to={"/CreateAcount"}
                        >
                            <input type="submit" value="Crea tu cuenta" className="secondary-button-login-modal" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default MoginModal;
