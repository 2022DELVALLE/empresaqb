import React from 'react';
import '../styles/LoginModal.scss'


function MoginModal() {
    return (
        <div class="login-modal-container">
        <div class="login-modal">
            <form action="" class="form-login-modal">
                <div>
                    <input type="text" placeholder="Usuario" class="input-user" />
                </div>
                <div class="password">
                    <input type="password" placeholder="*********" class="input-password" id="password" />
                    <i class="bi bi-eye" id="show"></i>
                </div>
                <div>
                    <a href="" class="ancle">¿Olvidaste tu contraseña?</a>
                    <input type="submit" value="Iniciar sesión" class="primary-button" />
                    <a href="" class="ancle">¿Aún no tienes cuenta con nosotros?</a>
                    <input type="submit" value="Crea tu cuenta" class="secondary-button" />
                </div>
            </form>
        </div>
    </div>
    );
}

export default MoginModal;
