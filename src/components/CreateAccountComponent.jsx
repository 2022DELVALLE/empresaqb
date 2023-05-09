import React, { useRef } from 'react';
import Swal from 'sweetalert2';

//import scss
import '../styles/Components/CreateAcountComponent.scss';


//Imprort app content
import AppContext from '../context/AppContext';

//import save customer
import useSaveCustomer from '../hooks/useSaveCustomer';

const CreateAccountComponent = () => {

    //Traemos la señal para cerrar el portla login
    const { setPortalLogin, } = React.useContext(AppContext);

    const hanldeToLogin = () => {
        setPortalLogin(true);
    }

    //Recuperando informacion para agregar un user

    const form = useRef(null);

    const { responseRegister, error, saveCustomer } = useSaveCustomer();

    React.useEffect(() => {
        if (responseRegister) {
            if (responseRegister.res = true) {
                Swal.fire(
                    'Felicitaciones!!!!',
                    'Se registro exitosamente',
                    'success'
                );
            }
        }
    }, [responseRegister]);

    React.useEffect(() => {
        if (error) {
            Swal.fire(
                'Upsss!!!!',
                error.message,
                'info'
            );
        }
    }, [error]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const user = {
            name: formData.get('name'),
            dni_ruc: formData.get('dni_ruc'),
            email: formData.get('email'),
            password: formData.get('password'),
            address: formData.get('address'),
            telephone: formData.get('telefono'),
        }

        if (termsChecked === true && (promotionsChecked === true || promotionsChecked === false)) {
            saveCustomer(user);        
        } else {
            Swal.fire(
                'Upss!!!!',
                'Seleccion terminos y condiciones',
                'error'
            );
        }
    }

    //Ver contraseña y ocultar
    const [showPassword, setShowPassword] = React.useState(false);

    const handleShowPassword = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
    }

    // Checked terminos y promociones

    const [termsChecked, setTermsChecked] = React.useState(false);
    const [promotionsChecked, setPromotionsChecked] = React.useState(false);

    const hanldeTermsChange = (event) => {
        setTermsChecked(!termsChecked);
    }

    const handlePromotionsChange = () => {
        setPromotionsChecked(!promotionsChecked);
    }

    return (
        <section className="SectionCreateAccount">
            <div className="SectionCreateAccount-container">
                <div className="SectionCreateAccount-Image">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 524.67 627.583">
                        <path
                            fill="#2f2e41"
                            d="M420.808 216.843h-51.762V199.8c0-28.568 23.194-51.762 51.762-51.762v68.805z"
                        ></path>
                        <path
                            fill="#a0616a"
                            d="M409.33502 185.02664L418.23482 225.05637 366.08305 216.39672 387.33502 178.53845 409.33502 185.02664z"
                        ></path>
                        <path
                            d="M409.33502 185.02664L418.23482 225.05637 366.08305 216.39672 387.33502 178.53845 409.33502 185.02664z"
                            opacity="0.1"
                        ></path>
                        <path
                            fill="#a0616a"
                            d="M359.335 270.538H409.335V344.538H359.335z"
                            transform="rotate(-180 384.335 307.538)"
                        ></path>
                        <path
                            fill="#2f2e41"
                            d="M441.835 405.038l-11 59s7 41-14 83l-14 43-21-3s13-32 13-46 3-68 3-68l-1.5-61.618 45.5-6.382z"
                        ></path>
                        <path
                            fill="#2f2e41"
                            d="M378.835 586.038s24-9 26 4l-1 6s9 27-4 29-25 5-26-1-.984-13.49 1.508-18.744c2.492-5.256 3.492-19.256 3.492-19.256z"
                        ></path>
                        <g fill="#2f2e41">
                            <path d="M366.134 395.886l-5.842 59.732s-18.126 37.436-9.635 83.619l1.489 45.197 21.006 2.959s-3.588-34.353.305-47.8c3.894-13.449 16.03-66.153 16.03-66.153l18.578-58.77-41.93-18.784z"></path>
                            <path d="M376.311 587.267s-20.55-15.32-26.086-3.389l-.709 6.041s-16.153 23.432-4.223 28.969c11.931 5.536 22.624 11.755 25.253 6.27 2.63-5.485 4.697-12.684 3.765-18.425-.933-5.74 2-19.466 2-19.466z"></path>
                        </g>
                        <path
                            fill="#2f2e41"
                            d="M429.835 310.538c23.52 21.948 25.264 56.674 11.5 98 0 0-44 30-76-8l-16-77 80.5-13z"
                        ></path>
                        <path
                            fill="#c00100"
                            d="M390.335 203.538l25 4-2 63 28 56-36 18s-28-53-33-86-2-57-2-57l20 2z"
                        ></path>
                        <path
                            fill="#c00100"
                            d="M371.335 205.538l-25 4 2 63-6 58 14 16s28-53 33-86 2-57 2-57l-20 2zM401.335 207.038l5.5-1.5s19.5-2.5 22.5 5.5 2 55 2 55 5.16 57.685-14.92 58.343c-20.08.657-16.08-47.343-16.08-47.343l1-70z"
                        ></path>
                        <circle cx="400.608" cy="170.131" r="25.881" fill="#a0616a"></circle>
                        <path
                            fill="#c00100"
                            d="M368.335 209.038l-5.5-1.5s-19.5-2.5-22.5 5.5-2 55-2 55-5.16 57.685 14.92 58.343 16.08-47.343 16.08-47.343l-1-70z"
                        ></path>
                        <path
                            fill="#a0616a"
                            d="M385.658 205.75c-5.552-1.408-11.847 4.522-14.061 13.249a22.525 22.525 0 00-.254 10.635l-2.386 9.92-.175-.008-18.818 44.348c-4.376 10.312-3.913 22.15 1.667 31.862 3.32 5.778 7.678 9.662 12.795 5.697 8.491-6.579 14.037-44.249 16.57-65.888l5.854-21.996a22.527 22.527 0 004.851-9.472c2.215-8.724-.491-16.938-6.043-18.347z"
                        ></path>
                        <path
                            fill="#2f2e41"
                            d="M351.06 191.07c1.316-4.003 3.915-7.508 5.078-11.558 1.544-5.378 4.83 6.552 5.151.967.61-10.617 16.813-37.927 26.063-43.172 9.25-5.246 14.563-3.665 23.988 1.262 0 0 4.574.291 10.27 3.103 5.695 2.812 10.82 7.315 13.036 13.267 1.756 4.719 1.562 9.9 2.148 14.9 1.635 13.93 9.443 27.178 7.767 41.103-.523 4.345-2.174 8.837-5.726 11.393-3.552 2.555-9.291 2.277-11.63-1.422-.797-1.262-1.135-2.76-1.819-4.087-.683-1.327-1.919-2.565-3.412-2.524-2.243.063-3.385 3.073-2.5 5.136s2.963 3.308 4.915 4.416c-4.649 2.091-10.416 1.44-14.482-1.636-4.065-3.075-6.26-8.448-5.512-13.49 1.054-7.107 11.406-5.636 12.626-12.716.887-5.153 4.005-13.777 3.156-18.937-.85-5.16-4.928 1.088-.631-1.894-4.727 2.279-14.838-13.31-19.786-15.056-4.948-1.746-9.144-5.526-11.394-10.267-5.248 7.609-9.865 5.542-11.745 14.592-1.88 9.05-.142 29.61 7.598 34.662a19.726 19.726 0 00-7.02 8.593c-.823 1.958-1.357 4.1-2.724 5.727-2.61 3.106-7.429 3.295-11.27 1.989-4.763-1.62-8.835-5.176-11.08-9.678-2.246-4.502-2.637-9.895-1.065-14.674z"
                        ></path>
                        <path
                            fill="#3f3d56"
                            d="M0 626.136c0 .66.53 1.19 1.19 1.19h522.29c.66 0 1.19-.53 1.19-1.19 0-.66-.53-1.19-1.19-1.19H1.19c-.66 0-1.19.53-1.19 1.19z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M340.038 1h-205.67c-23.322 0-42.23 18.907-42.23 42.23v540.433c0 23.323 18.908 42.23 42.23 42.23h205.67c23.323 0 42.23-18.907 42.23-42.23V43.23c0-23.323-18.907-42.23-42.23-42.23z"
                        ></path>
                        <path
                            fill="#3f3d56"
                            d="M340.038 626.892h-205.67c-23.836 0-43.23-19.392-43.23-43.23V43.23c0-23.837 19.394-43.23 43.23-43.23h205.67c23.837 0 43.23 19.393 43.23 43.23v540.433c0 23.837-19.393 43.23-43.23 43.23zM134.368 2c-22.734 0-41.23 18.496-41.23 41.23v540.433c0 22.734 18.497 41.23 41.23 41.23h205.67c22.734 0 41.23-18.496 41.23-41.23V43.23c0-22.734-18.496-41.23-41.23-41.23h-205.67zM75.144 94.566a3.277 3.277 0 00-3.274 3.274v26.192c0 1.805 1.468 3.274 3.274 3.274s3.274-1.469 3.274-3.274V97.84a3.277 3.277 0 00-3.274-3.274z"
                        ></path>
                        <path
                            fill="#e6e6e6"
                            d="M354.936 87.461h-82.668c-3.507 0-6.36-2.852-6.36-6.359s2.853-6.359 6.36-6.359h82.668c3.506 0 6.359 2.853 6.359 6.36s-2.853 6.358-6.36 6.358z"
                        ></path>
                        <path
                            fill="#c00100"
                            d="M277.382 137.469h-80.357c-2.026 0-3.674-1.649-3.674-3.675s1.648-3.673 3.674-3.673h80.357a3.677 3.677 0 013.674 3.673 3.678 3.678 0 01-3.674 3.675z"
                        ></path>
                        <ellipse
                            cx="78.322"
                            cy="92.07"
                            fill="#c00100"
                            rx="64.899"
                            ry="63.532"
                        ></ellipse>
                        <path
                            fill="#fff"
                            d="M100.35 60.024l-25.921 47.198c-5.507-9.73-10.983-19.476-16.504-29.198-1.906-3.357-7.092-.337-5.18 3.029 6.399 11.27 12.732 22.577 19.13 33.847 1.095 1.927 4.099 1.971 5.182 0 9.49-17.283 18.982-34.565 28.473-51.847 1.86-3.387-3.32-6.418-5.18-3.029z"
                        ></path>
                        <rect
                            width="46.498"
                            height="5.961"
                            x="117.618"
                            y="14.658"
                            fill="#e6e6e6"
                            rx="0.31"
                            ry="0.31"
                        ></rect>
                        <circle cx="318.336" cy="15.85" r="4.769" fill="#e6e6e6"></circle>
                        <circle cx="331.451" cy="15.85" r="4.769" fill="#e6e6e6"></circle>
                        <circle cx="344.566" cy="15.85" r="4.769" fill="#e6e6e6"></circle>
                        <path
                            fill="#3f3d56"
                            d="M133.868 157.136c0 .66.53 1.19 1.19 1.19h204.29c.66 0 1.19-.53 1.19-1.19 0-.66-.53-1.19-1.19-1.19h-204.29c-.66 0-1.19.53-1.19 1.19z"
                        ></path>
                        <path
                            fill="#c00100"
                            d="M319.758 250.667H197.16c-2.026 0-3.675-1.649-3.675-3.675s1.649-3.673 3.675-3.673h122.598a3.677 3.677 0 013.673 3.673 3.678 3.678 0 01-3.673 3.675zM319.758 303.667H197.16c-2.026 0-3.675-1.649-3.675-3.675s1.649-3.673 3.675-3.673h122.598a3.677 3.677 0 013.673 3.673 3.678 3.678 0 01-3.673 3.675zM319.758 356.667H197.16c-2.026 0-3.675-1.649-3.675-3.675s1.649-3.673 3.675-3.673h122.598a3.677 3.677 0 013.673 3.673 3.678 3.678 0 01-3.673 3.675z"
                        ></path>
                        <circle cx="159.975" cy="246.538" r="9" fill="#c00100"></circle>
                        <path
                            fill="#3f3d56"
                            d="M158.975 261.538v-2c7.444 0 13.5-6.056 13.5-13.5s-6.056-13.5-13.5-13.5v-2c8.547 0 15.5 6.954 15.5 15.5s-6.953 15.5-15.5 15.5z"
                        ></path>
                        <circle cx="159.975" cy="299.538" r="9" fill="#c00100"></circle>
                        <path
                            fill="#3f3d56"
                            d="M158.975 314.538v-2c7.444 0 13.5-6.055 13.5-13.5 0-7.443-6.056-13.5-13.5-13.5v-2c8.547 0 15.5 6.954 15.5 15.5s-6.953 15.5-15.5 15.5z"
                        ></path>
                        <circle cx="159.975" cy="352.538" r="9" fill="#c00100"></circle>
                        <path
                            fill="#3f3d56"
                            d="M158.975 367.538v-2c7.444 0 13.5-6.055 13.5-13.5s-6.056-13.5-13.5-13.5v-2c8.547 0 15.5 6.954 15.5 15.5s-6.953 15.5-15.5 15.5z"
                        ></path>
                        <path
                            fill="#a0616a"
                            d="M384.012 203.75c5.552-1.408 11.847 4.522 14.061 13.249.933 3.474 1.02 7.12.254 10.635l2.386 9.92.175-.008 18.818 44.348c4.376 10.312 3.913 22.15-1.667 31.862-3.32 5.778-7.678 9.662-12.795 5.697-8.491-6.579-14.037-44.249-16.57-65.888l-5.854-21.996a22.527 22.527 0 01-4.851-9.472c-2.215-8.724.491-16.938 6.043-18.347z"
                        ></path>
                        <path
                            fill="#c00100"
                            d="M405.38874 228.05282L384.33502 243.01874 394.86188 309.31266 408.0646 326.38767 423.44391 321.0686 427.94066 289.72998 422.64886 259.42289 405.38874 228.05282z"
                        ></path>
                    </svg>
                </div>

                <div className="SectionCreateAccount-Form">
                    <div className="SectionCreateAccount-form-title">REGÍSTRATE</div>
                    <div className="SectionCreateAccount-form-subtitle">Completa el siguiente formulario</div>
                    <form action="/" className="SectionCreateAccount-Form-contain" ref={form}>
                        <label htmlFor="" className="SectionCreateAccount-Form-contain-label">Nombre/Empresa</label>
                        <input type="text" name="name" placeholder="Ingresa tu nombre completo o empresa" className="SectionCreateAccount-Form-contain-input" />
                        <label htmlFor="" className="SectionCreateAccount-Form-contain-label">DNI/RUC</label>
                        <input type="text" name="dni_ruc" placeholder="Ingresa tu N° DNI o RUC" className="SectionCreateAccount-Form-contain-input" />
                        <label htmlFor="" className="SectionCreateAccount-Form-contain-label">Teléfono</label>
                        <input type="text" name="telefono" placeholder="Ingresa un teléfono" className="SectionCreateAccount-Form-contain-input" />

                        <label htmlFor="" className="SectionCreateAccount-Form-contain-label">Dirección</label>
                        <input type="text" name="address" placeholder="Ingresa tu dirección" className="SectionCreateAccount-Form-contain-input" />

                        <label htmlFor="" className="SectionCreateAccount-Form-contain-label">Correo electrónico</label>
                        <input type="text" name="email" placeholder="Ingresa un correo electrónico" className="SectionCreateAccount-Form-contain-input" />
                        <label htmlFor="" className="SectionCreateAccount-Form-contain-label">Contraseña</label>
                        <div className="passwordSignUpInput">
                            <div className="passwordSignUp">
                                <input className="inputSignUp" type={showPassword ? 'text' : 'password'}
                                    placeholder="Ingresa una contraseña" name='password' />
                            </div>
                            <div className="iconShow-hideSignUp"
                                onClick={() => handleShowPassword(event)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                </svg>
                            </div>
                        </div>
                        <div className="passwordSecurityRecomendations">
                            <div className="passwordSecurityRecomendations__box1">Debes usar al menos:</div>
                            <div className="passwordSecurityRecomendations__box2">
                                <ul className="RecomendationsList1">
                                    <li>Mínimo 8 caracteres</li>
                                    <li>1 mayúscula</li>
                                    <li>1 minuscula</li>
                                </ul>
                            </div>
                            <div className="passwordSecurityRecomendations__box3">
                                <ul className="RecomendationsList2">
                                    <li>Ningún espacio</li>
                                    <li>No compartas tu contraseña</li>
                                </ul>
                            </div>
                        </div>
                        <div className="termsConditionsPromotions">
                            <label htmlFor="termsConditions" className="TemsConditions">
                                <input
                                    type="checkbox"
                                    checked={termsChecked}
                                    className="termsConditionsPromotions-checkbox"
                                    onChange={() => hanldeTermsChange(event)}

                                />
                                <span>Acepto los <a href="#">Terminos y Condiciones.</a></span>
                            </label>
                            <label htmlFor="promotions" className="TemsConditions">
                                <input
                                    type="checkbox"
                                    id="promotions"
                                    className={promotionsChecked ? 'termsConditionsPromotions-checkbox fondo' :
                                        'termsConditionsPromotions-checkbox'}
                                    checked={promotionsChecked}
                                    onChange={handlePromotionsChange}
                                />
                                <span>Acepto recibir información sobre ofertas y promociones.</span>
                            </label>
                        </div>
                        <button
                            type="submit"
                            className="SignUp-button"
                            onClick={() => handleSubmit(event)}
                        >
                            Registrarme
                        </button>

                        <label htmlFor="" className="LoginQuestion">¿Ya tienes una cuenta?
                            <a
                                onClick={hanldeToLogin}
                                href="#">Inicia sesión{termsChecked ? 'true' : 'false'}</a>
                        </label>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default CreateAccountComponent;