import React from 'react';

function AcountCreate() {
    return (

        <section>
            <div className="create-acount">
                <div className="container-create-acount">
                    <h1 className="title-create-acount">¡Crea tu cuenta!</h1>
                    <h2 className="subtitle-create-acount">Completa el siguiente formulario</h2>

                    <form action="/" className="form-create-acount">
                        <label className="label-description-create-acount">Nombre:</label>
                        <input type="text" name="input-name" placeholder="Ingresa tu nombre" className="label-input-create-acount" />
                        <label className="label-description-create-acount">Apellido:</label>
                        <input type="text" name="input-lastname" placeholder="Ingresa tu apellido" className="label-input-create-acount" />
                        <label className="label-description-create-acount">DNI:</label>
                        <input type="text" name="input-DNI" placeholder="Ingresa tu DNI" className="label-input-create-acount" />
                        <label className="label-description-create-acount">E-mail:</label>
                        <input type="text" name="input-email" placeholder="Ingresa un e-mail de contacto"
                            className="label-input-create-acount" />
                        <label className="label-description-create-acount">Contraseña de acceso:</label>

                        <input type="password" name="input-password" placeholder="Ingresa tu contraseña"
                            className="label-input-create-acount" />
                        <i id="etiqueta-i" className="bi bi-eye"></i>

                        <div className="container-check-create-acount">
                            <label>
                                <input type="checkbox" className="checbox-create-create-acount" checked />
                                Acepto los <a href="/">Términos y condiciones</a>
                            </label>
                            <label>
                                <input type="checkbox" className="checbox-create-create-acount" />
                                Acepto recibir publicidad y novedades en mi email.
                            </label>
                        </div>

                        <input type="submit" value="Crear cuenta" className="button-create-create-acount" />
                    </form>
                </div>
            </div>
        </section>
    )
};

export default AcountCreate;