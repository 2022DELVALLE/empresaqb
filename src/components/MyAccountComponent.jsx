import React from 'react';

//import scss
import '../styles/Components/MyAccount.scss';

//import app context
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const MyAccountComponent = () => {

    const navigate = useNavigate();

    // Recupero señal para abrir portal login y la señal para cerrar el portal menu inicio
    const { portalLogin, setPortalLogin, setShowPortal } = React.useContext(AppContext);

    const handleopenLogin = () => {
        setPortalLogin(!portalLogin);
    }

    //Recuperamos el usuario activo

    const { user, setUser } = React.useContext(AppContext);

    if (!user) {
        return (
            <div className='container-button-iniciar-sesion'>
                <button
                    className='button-iniciar-sesion'
                    onClick={() => handleopenLogin()}
                >Iniciar sesión</button>
            </div>
        );
    }


    return (
        <section className="container_my_account">
            <div className="Name_user_my_account">
                <div className="Image_user_my_account">
                    <img src="https://www.blogdelfotografo.com/wp-content/uploads/2022/01/girasol-foto-perfil.webp" alt="" />
                </div>
                <div className="Name_my_account">
                    <p>HOLA</p>
                    <b>{user.name + ' ' + user.lastName}</b>
                </div>
            </div>
            <div className="Datos_personales_my_account">
                <div className="title_date_personal_my_account">Datos Personales</div>
                <div className="items_datos_personales_my_account">
                    <div className="item_my_account_dato">
                        <label htmlFor="">Nombre :</label>
                        <input type="text" value={user.name} />
                    </div>
                    <div className="item_my_account_dato">
                        <label htmlFor="">Apellido Paterno :</label>
                        <input type="text" value={user.lastName} />
                    </div>
                    <div className="item_my_account_dato">
                        <label htmlFor="">Apellido Materno :</label>
                        <input type="text" value={user.lastName} />
                    </div>
                    <div className="item_my_account_dato no_editable_item_my_account_dato">
                        <label htmlFor="">Tipo de documento:</label>
                        <div className="select_options_my_account">
                            <span>DNI:</span>
                            <input type="" value="18927656" />
                        </div>

                    </div>
                    <div className="item_my_account_dato">
                        <label htmlFor="">Celular:</label>
                        <div className="select_options_my_account">
                            <span> +51</span>
                            <input type="number" value="986334467" />
                        </div>

                    </div>
                    <div className="item_my_account_dato no_editable_item_my_account_dato">
                        <label htmlFor="">Correo:</label>
                        <input type="email" value={user.email} />
                    </div>
                </div>
                <div className="container_btn_edit_my_account">
                    <a href="">EDITAR</a>
                </div>
            </div>
        </section>
    );
}

export default MyAccountComponent;