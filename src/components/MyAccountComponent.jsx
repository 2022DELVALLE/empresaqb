import React from 'react';
import '../styles/Components/MyAccount.scss';
import Swal from 'sweetalert2';

import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

import useEditCustomer from '../hooks/useEditeCustomer';

const MyAccountComponent = () => {

    const navigate = useNavigate();

    // Recupero señal para abrir portal login y cerrar portal inicio
    const { portalLogin, setPortalLogin, setShowPortal, user, setUser } =
        React.useContext(AppContext);

    const { responseEdit, error, loading, editCustomer } = useEditCustomer();

    // Si NO hay usuario, devolvemos UI al final (NO antes de los hooks)

    // Hooks (deben ir siempre arriba)
    const [name, setName] = React.useState(user?.data.user.name || "");
    const [dni, setdni] = React.useState(user?.data.user.dni_ruc || "");
    const [telephone, settelephone] = React.useState(user?.data.user.telephone || "");
    const [email, setemail] = React.useState(user?.data.user.email || "");
    const [address, setaddress] = React.useState(user?.data.user.address || "");
    const [isEdit, setIsEdit] = React.useState(false);

    const handleopenLogin = () => {
        setPortalLogin(!portalLogin);
    };

    const handleSelectedEdit = (e) => {
        e.preventDefault();
        setIsEdit(!isEdit);
    };

    const handleSelectedSave = (e) => {
        e.preventDefault();
        const newUser = {
            name,
            dni_ruc: dni,
            email,
            address,
            telephone,
        };

        editCustomer(newUser, user.data.user.id);
        setIsEdit(false);
    };

    // Escuchar respuesta del hook editar
    React.useEffect(() => {
        if (responseEdit) {
            if (responseEdit.res === true) {
                Swal.fire(
                    'Felicitaciones!!!!',
                    'Se actualizó exitosamente',
                    'success'
                );
            }
        }
    }, [responseEdit]);

    React.useEffect(() => {
        if (error) {
            Swal.fire(
                'Upsss!!!!',
                error.message,
                'info'
            );
        }
    }, [error]);


    // Ahora, después de todos los hooks, se evalúa si NO hay usuario
    if (!user) {
        return (
            <div className='container-button-iniciar-sesion'>
                <button
                    className='button-iniciar-sesion'
                    onClick={handleopenLogin}
                >
                    Iniciar sesión
                </button>
            </div>
        );
    }

    // Render normal
    return (
        <section className="container_my_account">
            <div className="Name_user_my_account">
                <div className="Image_user_my_account">
                    <img
                        src="https://www.blogdelfotografo.com/wp-content/uploads/2022/01/girasol-foto-perfil.webp"
                        alt=""
                    />
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
                        <label>Nombre :</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="item_my_account_dato no_editable_item_my_account_dato">
                        <label>DNI/RUC</label>
                        <input value={dni} onChange={(e) => setdni(e.target.value)} />
                    </div>

                    <div className="item_my_account_dato no_editable_item_my_account_dato">
                        <label>Correo:</label>
                        <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>

                    <div className="item_my_account_dato">
                        <label>Teléfono:</label>
                        <div className="select_options_my_account">
                            <span>+51</span>
                            <input type="number" value={telephone} onChange={(e) => settelephone(e.target.value)} />
                        </div>
                    </div>

                    <div className="item_my_account_dato">
                        <label>Dirección :</label>
                        <input type="text" value={address} onChange={(e) => setaddress(e.target.value)} />
                    </div>

                </div>

                {!isEdit ? (
                    <div className="container_btn_edit_my_account" onClick={handleSelectedEdit}>
                        <a href="">Editar</a>
                    </div>
                ) : (
                    <div className="container_btn_edit_my_account" onClick={handleSelectedSave}>
                        <a href="">Guardar</a>
                    </div>
                )}

            </div>
        </section>
    );
};

export default MyAccountComponent;
