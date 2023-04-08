import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';

//import scss
import '../styles/Components/ResetPassword.scss'

//import hoooks de reset password
import useResetPasssword from '../hooks/useResetPasssword.js';


const ResetPasswordComponent = () => {

    //Recuperamos el token
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const form = useRef(null);

    const { responseResetPassword, resetPassword, error } = useResetPasssword();
    console.log(responseResetPassword);

    //Utilizamos el reset password
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const credencialesPassword = {
            token: token,
            email: formData.get('email'),
            password: formData.get('password1'),
            password_confirmation: formData.get('password2')
        }
        console.log(credencialesPassword);
        resetPassword(credencialesPassword);
    }

    //Mensajes
    React.useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);

    React.useEffect(() => {
        if (responseResetPassword) {
            alert(responseResetPassword.message);
        }

    }, [responseResetPassword]);

    return (
        <section className="recovering-password-container">
            <div className="recoverin-password-container-of-container">
                <div className="recovering-password-image">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="528"
                        height="410"
                        fill="none"
                        viewBox="0 0 528 410"
                    >
                        <path
                            fill="#C00100"
                            d="M493.888 112.92c-21.539-24.863-49.142-43.36-76.432-61.552-32.991-22.024-67.424-44.62-106.504-50.082-37.327-5.22-75.443 5.958-108.522 24.302-33.079 18.345-61.885 43.552-90.441 68.554l-67.198 58.891C30.658 165.42 16.123 178.316 8.08 195.426c-6.83 14.512-8.446 31.113-7.142 47.103a139.056 139.056 0 0015.114 52.115c8.402 16.177 19.899 30.486 33.815 42.09 19.522 16.079 43.065 26.225 66.484 35.569 43.027 17.11 87.383 32.208 133.406 36.409 49.142 4.494 98.46-3.59 147.151-11.648 59.793-9.892 94.099-35.722 103.998-95.568 5.375-32.386 22.804-61.73 26.463-94.205 3.972-34.971-11.214-68.618-33.48-94.371z"
                            opacity="0.18"
                        ></path>
                        <path
                            fill="#C00100"
                            d="M469.38 41.884H106.088c-9.287 0-16.816 7.649-16.816 17.084v250.816c0 9.435 7.529 17.084 16.816 17.084H469.38c9.287 0 16.815-7.649 16.815-17.084V58.968c0-9.435-7.528-17.084-16.815-17.084z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M457.214 51.571H118.343c-8.588 0-15.55 7.074-15.55 15.799v229.963c0 8.725 6.962 15.799 15.55 15.799h338.871c8.588 0 15.55-7.074 15.55-15.799V67.37c0-8.725-6.962-15.799-15.55-15.799z"
                        ></path>
                        <path
                            fill="url(#paint0_linear_403_446)"
                            d="M335.36 282.057l-58.214-29.573H90.451v-68.287h267.852l-23.82 48.873.877 48.987z"
                        ></path>
                        <path
                            fill="#C00100"
                            d="M358.303 85.447v133.301c0 4.661-1.819 9.131-5.057 12.431a17.189 17.189 0 01-12.221 5.175H73.95c-2.274 0-4.526-.455-6.626-1.341a17.263 17.263 0 01-5.615-3.818 17.582 17.582 0 01-3.745-5.712 17.816 17.816 0 01-1.306-6.735v-133.3c0-4.66 1.822-9.129 5.065-12.423a17.155 17.155 0 0112.227-5.146h267.075a17.18 17.18 0 0112.211 5.158 17.733 17.733 0 015.067 12.41z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M207.217 102.061a3.155 3.155 0 01-2.391-.093 3.227 3.227 0 01-1.657-1.753l-3.032-8.186a9.08 9.08 0 00-4.727-5.007 8.865 8.865 0 00-6.826-.192 9.056 9.056 0 00-4.993 4.734 9.278 9.278 0 00-.282 6.932l4.198 11.267c.068.185.118.377.15.572h-6.64l-3.572-9.586a15.734 15.734 0 01.508-11.732c1.676-3.692 4.713-6.567 8.456-8.006a15.04 15.04 0 0111.555.313c3.662 1.639 6.544 4.674 8.025 8.452l3.044 8.173a3.225 3.225 0 01-.778 3.452c-.3.287-.653.511-1.038.66z"
                        ></path>
                        <path
                            fill="#C00100"
                            d="M494.064 324.182H72.583c-8.318 0-15.061 6.851-15.061 15.302v1.655c0 8.451 6.743 15.302 15.06 15.302h421.482c8.318 0 15.061-6.851 15.061-15.302v-1.655c0-8.451-6.743-15.302-15.061-15.302z"
                        ></path>
                        <path
                            fill="url(#paint1_linear_403_446)"
                            d="M494.064 324.182H72.583c-8.318 0-15.061 6.851-15.061 15.302v1.655c0 8.451 6.743 15.302 15.06 15.302h421.482c8.318 0 15.061-6.851 15.061-15.302v-1.655c0-8.451-6.743-15.302-15.061-15.302z"
                        ></path>
                        <path
                            fill="#C00100"
                            d="M282.434 235.463l52.926 46.594v-56.906l-52.926 10.312z"
                        ></path>
                        <path
                            fill="#fff"
                            d="M307.907 162.568H103.494c-4.283 0-7.756 3.528-7.756 7.881v22.482c0 4.352 3.473 7.88 7.756 7.88h204.413c4.284 0 7.756-3.528 7.756-7.88v-22.482c0-4.353-3.472-7.881-7.756-7.881z"
                        ></path>
                        <path
                            fill="url(#paint2_linear_403_446)"
                            d="M175.854 110.412h41.161v38.637h-41.161v-38.637z"
                        ></path>
                        <path
                            fill="url(#paint3_linear_403_446)"
                            d="M191.153 110.335h25.812v38.637h-25.812v-38.637z"
                        ></path>
                        <path
                            fill="url(#paint4_linear_403_446)"
                            d="M195.451 128.438s-4.059-3.437-.514-6.365c3.546-2.928 7.518 3.182 3.759 6.365l2.644 7.167h-8.921l3.032-7.167z"
                        ></path>
                        <path
                            fill="#000"
                            d="M127.226 188.781c4.339 0 7.857-3.574 7.857-7.982 0-4.409-3.518-7.982-7.857-7.982s-7.856 3.573-7.856 7.982c0 4.408 3.517 7.982 7.856 7.982zM148.414 188.781c4.339 0 7.856-3.574 7.856-7.982 0-4.409-3.517-7.982-7.856-7.982s-7.856 3.573-7.856 7.982c0 4.408 3.517 7.982 7.856 7.982zM169.602 188.781c4.339 0 7.856-3.574 7.856-7.982 0-4.409-3.517-7.982-7.856-7.982s-7.856 3.573-7.856 7.982c0 4.408 3.517 7.982 7.856 7.982zM190.79 188.781c4.339 0 7.856-3.574 7.856-7.982 0-4.409-3.517-7.982-7.856-7.982s-7.856 3.573-7.856 7.982c0 4.408 3.517 7.982 7.856 7.982zM213.645 188.781c4.339 0 7.856-3.574 7.856-7.982 0-4.409-3.517-7.982-7.856-7.982s-7.856 3.573-7.856 7.982c0 4.408 3.517 7.982 7.856 7.982zM234.833 188.781c4.339 0 7.856-3.574 7.856-7.982 0-4.409-3.517-7.982-7.856-7.982s-7.856 3.573-7.856 7.982c0 4.408 3.517 7.982 7.856 7.982zM256.021 188.781c4.339 0 7.856-3.574 7.856-7.982 0-4.409-3.517-7.982-7.856-7.982s-7.856 3.573-7.856 7.982c0 4.408 3.517 7.982 7.856 7.982zM277.221 188.781c4.339 0 7.857-3.574 7.857-7.982 0-4.409-3.518-7.982-7.857-7.982-4.338 0-7.856 3.573-7.856 7.982 0 4.408 3.518 7.982 7.856 7.982z"
                        ></path>
                        <path
                            fill="#C00100"
                            d="M67.22 55.416a6.195 6.195 0 01-3.43-1.04 6.342 6.342 0 01-2.308-2.779L47.95 19.924a6.46 6.46 0 011.235-6.97 6.273 6.273 0 012.01-1.42 6.19 6.19 0 014.8-.088 6.264 6.264 0 012.06 1.343 6.378 6.378 0 011.397 2.043l13.52 31.686a6.455 6.455 0 01-.503 6.036 6.303 6.303 0 01-2.266 2.113 6.188 6.188 0 01-2.983.762v-.013zM6.475 98.84a6.212 6.212 0 01-4.49-1.716 6.414 6.414 0 01-1.982-4.44 6.427 6.427 0 011.69-4.562 6.226 6.226 0 014.369-2.013l33.893-2.304a6.217 6.217 0 014.553 1.563 6.417 6.417 0 012.132 4.376 6.444 6.444 0 01-1.538 4.626 6.244 6.244 0 01-4.307 2.166L6.889 98.827l-.414.013zM42.524 67.51a6.123 6.123 0 01-3.47-1.095l-28.156-19.4a6.376 6.376 0 01-2.563-4.065 6.447 6.447 0 01.98-4.724 6.26 6.26 0 013.962-2.665 6.184 6.184 0 014.663.925l28.105 19.401a6.353 6.353 0 012.382 3.155 6.461 6.461 0 01.074 3.975 6.364 6.364 0 01-2.261 3.245 6.2 6.2 0 01-3.716 1.248z"
                        ></path>
                        <path
                            fill="url(#paint5_linear_403_446)"
                            d="M238.629 324.474h91.619v9.561h-91.619v-9.561z"
                        ></path>
                        <defs>
                            <linearGradient
                                id="paint0_linear_403_446"
                                x1="213.845"
                                x2="259.481"
                                y1="132.104"
                                y2="494.275"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopOpacity="0"></stop>
                                <stop offset="0.99"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_403_446"
                                x1="283.787"
                                x2="281.963"
                                y1="357.612"
                                y2="291.3"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopOpacity="0"></stop>
                                <stop offset="0.99"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint2_linear_403_446"
                                x1="254.066"
                                x2="137.442"
                                y1="92.856"
                                y2="165.15"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopOpacity="0"></stop>
                                <stop offset="0.99"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint3_linear_403_446"
                                x1="248.102"
                                x2="158.975"
                                y1="101.475"
                                y2="156.722"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopOpacity="0"></stop>
                                <stop offset="0.99"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint4_linear_403_446"
                                x1="197.042"
                                x2="196.642"
                                y1="143.295"
                                y2="125.79"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopOpacity="0"></stop>
                                <stop offset="0.99"></stop>
                            </linearGradient>
                            <linearGradient
                                id="paint5_linear_403_446"
                                x1="284.664"
                                x2="284.043"
                                y1="302.973"
                                y2="375.294"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopOpacity="0"></stop>
                                <stop offset="0.99"></stop>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div className="recoverin-password-container-content">
                    <div className="recovering-password-header">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            fill="none"
                            viewBox="0 0 40 40"
                        >
                            <path
                                fill="#000"
                                d="M35.663 9.338l-5-5a.938.938 0 00-1.326 0l-15 15a.937.937 0 00-.274.662v5a.937.937 0 00.937.938h5c.249 0 .487-.1.663-.275l15-15a.937.937 0 000-1.325zM19.61 24.063h-3.674v-3.674L26.25 10.077l3.673 3.673-10.312 10.313zm11.639-11.64L27.577 8.75 30 6.327 33.673 10l-2.423 2.424zm3.438 6.327V32.5a2.188 2.188 0 01-2.188 2.188h-25A2.187 2.187 0 015.312 32.5v-25A2.188 2.188 0 017.5 5.313h13.75a.937.937 0 010 1.875H7.5a.312.312 0 00-.313.312v25a.313.313 0 00.313.313h25a.313.313 0 00.313-.313V18.75a.938.938 0 011.874 0z"
                            ></path>
                        </svg>
                        <p>Crear nueva contraseña</p>
                    </div>
                    <div className="recoverin-password-image-letter">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="180"
                            height="180"
                            fill="none"
                            viewBox="0 0 180 180"
                        >
                            <path
                                fill="#C00100"
                                d="M94.725 15C136.2 15 169.8 48.75 169.8 90s-33.6 75-75.075 75c-26.325 0-49.35-13.65-62.775-34.275l11.85-9.375C54.375 138.525 73.2 150 94.8 150a59.996 59.996 0 0042.426-17.574 59.996 59.996 0 000-84.852A59.999 59.999 0 0094.8 30C64.2 30 39 52.95 35.325 82.5h20.7l-28.05 27.975L0 82.5h20.175c3.75-37.875 35.7-67.5 74.55-67.5zm22.2 61.8c3.75.075 6.825 3.075 6.825 6.9v34.575c0 3.75-3.075 6.9-6.9 6.9H75.375c-3.825 0-6.9-3.15-6.9-6.9V83.7c0-3.825 3.075-6.825 6.825-6.9v-7.575c0-11.475 9.375-20.775 20.775-20.775 11.475 0 20.85 9.3 20.85 20.775V76.8zm-20.85-17.85c-5.625 0-10.275 4.575-10.275 10.275V76.8h20.625v-7.575c0-5.7-4.65-10.275-10.35-10.275z"
                            ></path>
                        </svg>
                    </div>
                    <form className="recoverin-password-form"
                        onSubmit={handleFormSubmit}
                        ref={form}
                    >
                        <p className="recoverin-password-info">
                            Elige una nueva contraseña para esta cuenta de usuario. Esta contraseña reemplazará a la antigua
                            pero el resto de la información de la cuenta se mantendrá.
                        </p>
                        <div className="recovering_password_container_new_contraseña">
                            <label className="recoverin-password-text-label-correo">
                                Correo Electronico
                            </label>
                            <input type="email" name="email" className="recoverin-password-text-input" />
                        </div>
                        <div className="recovering_password_container_new_contraseña">
                            <label className="recoverin-password-text-label-correo">
                                Contraseña
                            </label>
                            <input type="password" name="password1" className="recoverin-password-text-input" />
                        </div>
                        <div className="recovering_password_container_confirm_contraseña">
                            <label className="recoverin-password-text-label-correo">
                                Confirmar contraseña
                            </label>
                            <input type="password" name="password2" className="recoverin-password-text-input" />
                        </div>
                        <input type="submit" value="Guardar" className="recoverin-password-button" />
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ResetPasswordComponent;