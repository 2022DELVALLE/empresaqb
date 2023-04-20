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

    //Variables para mostrar datos del usuario

    const [name, setName] = React.useState(user.data.user.name);
    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const [dni, setdni] = React.useState(user.data.user.dni_ruc);
    const handledniChange = (event) => {
        setdni(event.target.value);
    }

    const [telephone, settelephone] = React.useState(user.data.user.telephone);
    const handletelephoneChange = (event) => {
        settelephone(event.target.value);
    }

    const [email, setemail] = React.useState(user.data.user.email);
    const handleemailChange = (event) => {
        setemail(event.target.value);
    }

    const [address, setaddress] = React.useState(user.data.user.address);
    const handleaddressChange = (event) => {
        setaddress(event.target.value);
    }
    return (
        <section className="container_my_account">
            <div className="Name_user_my_account">
                <div className="Image_user_my_account">
                    <img src="https://www.blogdelfotografo.com/wp-content/uploads/2022/01/girasol-foto-perfil.webp" alt="" />
                </div>
                <div className="Name_my_account">
                    <p>HOLA</p>
                    <b>{name}</b>
                </div>
            </div>
            <div className="Datos_personales_my_account">
                <div className="title_date_personal_my_account">Datos Personales</div>
                <div className="items_datos_personales_my_account">
                    <div className="item_my_account_dato">
                        <label htmlFor="">Nombre :</label>
                        <input type="text" value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="item_my_account_dato no_editable_item_my_account_dato">
                        <label htmlFor="">Tipo de documento:</label>
                        <div className="select_options_my_account">
                            <span>DNI:</span>
                            <input type="" value={dni}
                                onChange={handledniChange}
                            />
                        </div>
                    </div>
                    <div className="item_my_account_dato no_editable_item_my_account_dato">
                        <label htmlFor="">Correo:</label>
                        <input type="email"
                            onChange={handleemailChange}
                            value={email} />
                    </div>
                    <div className="item_my_account_dato">
                        <label htmlFor="">Teléfono:</label>
                        <div className="select_options_my_account">
                            <span> +51</span>
                            <input type="number" value={telephone}
                                onChange={handletelephoneChange}
                            />
                        </div>
                    </div>
                    <div className="item_my_account_dato">
                        <label htmlFor="">Apellido Paterno :</label>
                        <input type="text" value={address}
                            onChange={handleaddressChange}
                        />
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