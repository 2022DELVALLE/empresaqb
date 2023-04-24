import React from 'react';
//Import scss
import '../styles/Containers/Section6_Footer.scss'

//Import Images
import logoBackgroundWhite from '@logos/logo-background-white.png';

function Section6_Footer() {
    return (
        <footer className="sectionFooter">

            <div className="Footer__box1">
                <div className="Footer__box1-logo">
                    <img src={logoBackgroundWhite} alt="logo de Empresa QB" />
                </div>

                <div className="Footer__box1-datos">
                    <div className="Footer__box1_SobreNosotros">
                        <span>SOBRE NOSOTROS</span>
                        <p>Lorem ipsum dolor sit amet consectetur. Facilisi feugiat dignissim id aenean convallis auctor.
                            Rhoncus massa consectetur lorem malesuada neque sit id. Mi lectus quis faucibus in urna cursus
                            sollicitudin eu tellus. Ornare sollicitudin dolor ultrices volutpat scelerisque enim massa ut.
                            Platea ultrices dolor a est maecenas id elit tortor.</p>
                    </div>
                    <div className="Footer__box1_OtherInfo">
                        <div className="Footer__OtherInfo">
                            <div className="Footer__OtherInfo_RedesSociales">
                                <span>¡SÍGUENOS EN NUESTRAS REDES SOCIALES!</span>
                                <div className="RedesSociales_icons">
                                    <div className="RedesSociales_Facebook" >
                                        <a href="https://www.facebook.com/EMPRESAQB">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="40"
                                                height="40"
                                                fill="none"
                                                viewBox="0 0 40 40"
                                            >
                                                <path
                                                    fill="#fff"
                                                    d="M37.969.469H2.03A1.56 1.56 0 00.47 2.03V37.97A1.56 1.56 0 002.03 39.53H37.97a1.56 1.56 0 001.562-1.562V2.03A1.56 1.56 0 0037.97.47zM33.457 11.87h-3.12c-2.446 0-2.92 1.162-2.92 2.871v3.765h5.84l-.762 5.893h-5.078v15.132h-6.089V24.404h-5.093v-5.898h5.093V14.16c0-5.044 3.081-7.793 7.583-7.793 2.158 0 4.009.161 4.55.235v5.268h-.004z"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="RedesSociales_Instagram">
                                        <a href="https://www.instagram.com/illusion.qb/">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="42"
                                                height="48"
                                                fill="none"
                                                viewBox="0 0 42 48"
                                            >
                                                <g clipPath="url(#clip0_450_575)">
                                                    <path
                                                        fill="#fff"
                                                        d="M21 19a5 5 0 10.003 10A5 5 0 0021 19zm11.692-3.844a5.063 5.063 0 00-2.851-2.851c-1.97-.777-6.657-.603-8.841-.603-2.184 0-6.867-.181-8.842.603a5.063 5.063 0 00-2.85 2.85c-.777 1.97-.603 6.662-.603 8.844 0 2.183-.174 6.87.606 8.844a5.063 5.063 0 002.851 2.851c1.969.778 6.656.603 8.842.603 2.185 0 6.866.181 8.84-.603a5.063 5.063 0 002.851-2.85c.783-1.97.603-6.662.603-8.844 0-2.183.18-6.868-.603-8.843l-.003-.001zM21 31.688A7.688 7.688 0 1128.688 24 7.678 7.678 0 0121 31.688zm8.004-13.904a1.794 1.794 0 111.794-1.794 1.792 1.792 0 01-1.79 1.798l-.004-.004zM37.5 3h-33A4.5 4.5 0 000 7.5v33A4.5 4.5 0 004.5 45h33a4.5 4.5 0 004.5-4.5v-33A4.5 4.5 0 0037.5 3zm-1.605 27.188c-.12 2.402-.67 4.531-2.423 6.28-1.755 1.75-3.882 2.31-6.282 2.424-2.476.14-9.899.14-12.375 0-2.402-.12-4.524-.67-6.28-2.423-1.758-1.753-2.31-3.883-2.424-6.282-.14-2.476-.14-9.9 0-12.375.12-2.402.662-4.531 2.423-6.28 1.76-1.75 3.888-2.303 6.281-2.418 2.476-.14 9.9-.14 12.375 0 2.403.121 4.531.67 6.282 2.424 1.75 1.753 2.309 3.883 2.423 6.286.14 2.467.14 9.885 0 12.363z"
                                                    ></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_450_575">
                                                        <path fill="#fff" d="M0 0H42V48H0z"></path>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="RedesSociales_Youtube">
                                        <a href="https://www.youtube.com/@Empresaqb21">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="44"
                                                height="50"
                                                fill="none"
                                                viewBox="0 0 44 50"
                                            >
                                                <g clipPath="url(#clip0_450_577)">
                                                    <path3
                                                        fill="#fff"
                                                        d="M18.242 19.736l9.297 5.284-9.297 5.283V19.736zM43.75 7.812v34.376c0 2.587-2.1 4.687-4.688 4.687H4.688A4.689 4.689 0 010 42.187V7.813c0-2.588 2.1-4.688 4.688-4.688h34.374c2.588 0 4.688 2.1 4.688 4.688zM39.648 25.03s0-5.82-.742-8.613a4.457 4.457 0 00-3.144-3.164c-2.764-.752-13.887-.752-13.887-.752s-11.123 0-13.887.752a4.457 4.457 0 00-3.144 3.164c-.742 2.783-.742 8.613-.742 8.613s0 5.82.742 8.614c.41 1.542 1.611 2.705 3.144 3.115 2.764.742 13.887.742 13.887.742s11.123 0 13.887-.752c1.533-.41 2.734-1.572 3.144-3.115.742-2.783.742-8.604.742-8.604z"
                                                    ></path3>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_450_577">
                                                        <path fill="#fff" d="M0 0H43.75V50H0z"></path>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className="RedesSociales_Tiktok">
                                        <a href="https://www.tiktok.com/@empresaqb">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="50"
                                                height="50"
                                                fill="none"
                                                viewBox="0 0 50 50"
                                            >
                                                <g
                                                    stroke="#fff"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="3.125"
                                                    clipPath="url(#clip0_450_587)"
                                                >
                                                    <path d="M49.25 18.194v19.112A11.945 11.945 0 0137.306 49.25H18.194A11.945 11.945 0 016.25 37.306V18.194A11.944 11.944 0 0118.194 6.25h19.112A11.945 11.945 0 0149.25 18.194z"></path>
                                                    <path d="M22.972 27.75a7.167 7.167 0 107.167 7.167v-21.5c.795 2.389 3.822 7.166 9.555 7.166"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_450_587">
                                                        <path fill="#fff" d="M0 0H50V50H0z"></path>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="Footer__OtherInfo_Ubicación">
                                <span>NUESTRA UBICACIÓN</span>
                                <div className="OtherInfo_Location">

                                    <svg width="27" height="39" viewBox="0 0 27 39" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M13.5 19.6762C14.4281 19.6762 15.2229 19.2906 15.8844 18.5193C16.5459 17.748 16.8761 16.8219 16.875 15.741C16.875 14.6588 16.5442 13.7321 15.8827 12.9607C15.2212 12.1894 14.427 11.8044 13.5 11.8057C12.5719 11.8057 11.7771 12.1914 11.1156 12.9627C10.4541 13.734 10.1239 14.6601 10.125 15.741C10.125 16.8232 10.4558 17.7499 11.1173 18.5213C11.7788 19.2926 12.573 19.6776 13.5 19.6762ZM13.5 38.6146C13.275 38.6146 13.05 38.5654 12.825 38.4671C12.6 38.3687 12.4031 38.2375 12.2344 38.0735C8.12812 33.8431 5.0625 29.9158 3.0375 26.2914C1.0125 22.667 0 19.2814 0 16.1345C0 11.2155 1.35731 7.29661 4.07194 4.37797C6.78656 1.45932 9.92925 0 13.5 0C17.0719 0 20.2151 1.45932 22.9297 4.37797C25.6444 7.29661 27.0011 11.2155 27 16.1345C27 19.2827 25.9875 22.669 23.9625 26.2934C21.9375 29.9177 18.8719 33.8445 14.7656 38.0735C14.5969 38.2375 14.4 38.3687 14.175 38.4671C13.95 38.5654 13.725 38.6146 13.5 38.6146Z"
                                            fill="white" />
                                    </svg>

                                    <a href="https://goo.gl/maps/236DkeE3Mw1xFoSt9">Jirón Arequipa 623, Tarma 12651</a>
                                </div>
                            </div>
                        </div>
                        <div className="Footer__OtherInfo_Contactos">
                            <span>CONTÁCTANOS</span>
                            <div className="Other_Form_Contacts">
                                <div className="Contact_Call">
                                    <div className="Contact_Whatssapp">
                                        <div className="Footer_Whatsapp_icon">
                                            <svg width="42" height="45" viewBox="0 0 42 45" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M35.6875 6.78307C33.7775 4.73799 31.5024 3.1165 28.9951 2.01318C26.4877 0.909864 23.7981 0.346796 21.0833 0.356821C9.70831 0.356821 0.43748 10.1839 0.43748 22.2414C0.43748 26.106 1.39581 29.8602 3.18748 33.1727L0.270813 44.5235L11.2083 41.476C14.2291 43.2206 17.625 44.1481 21.0833 44.1481C32.4583 44.1481 41.7292 34.321 41.7292 22.2635C41.7292 16.4114 39.5833 10.9127 35.6875 6.78307ZM21.0833 40.4381C18 40.4381 14.9791 39.5547 12.3333 37.8985L11.7083 37.501L5.20831 39.3118L6.93748 32.5985L6.52081 31.9139C4.80778 29.0143 3.89819 25.6626 3.89581 22.2414C3.89581 12.2156 11.6041 4.04474 21.0625 4.04474C25.6458 4.04474 29.9583 5.94391 33.1875 9.38891C34.7864 11.076 36.0535 13.0827 36.9154 15.2927C37.7772 17.5027 38.2167 19.8721 38.2083 22.2635C38.25 32.2893 30.5416 40.4381 21.0833 40.4381ZM30.5 26.8347C29.9791 26.5697 27.4375 25.2447 26.9791 25.046C26.5 24.8693 26.1666 24.781 25.8125 25.311C25.4583 25.8631 24.4791 27.0997 24.1875 27.4531C23.8958 27.8285 23.5833 27.8727 23.0625 27.5856C22.5416 27.3206 20.875 26.7243 18.9166 24.8693C17.375 23.4118 16.3541 21.6231 16.0416 21.071C15.75 20.5189 16 20.2318 16.2708 19.9447C16.5 19.7018 16.7916 19.3043 17.0416 18.9952C17.2916 18.686 17.3958 18.4431 17.5625 18.0897C17.7291 17.7143 17.6458 17.4052 17.5208 17.1402C17.3958 16.8752 16.3541 14.181 15.9375 13.0768C15.5208 12.0168 15.0833 12.1493 14.7708 12.1272H13.7708C13.4166 12.1272 12.875 12.2597 12.3958 12.8118C11.9375 13.3639 10.6041 14.6889 10.6041 17.3831C10.6041 20.0772 12.4583 22.6831 12.7083 23.0364C12.9583 23.4118 16.3541 28.9327 21.5208 31.2956C22.75 31.8697 23.7083 32.201 24.4583 32.4439C25.6875 32.8635 26.8125 32.7972 27.7083 32.6647C28.7083 32.5102 30.7708 31.3397 31.1875 30.0589C31.625 28.7781 31.625 27.696 31.4791 27.4531C31.3333 27.2102 31.0208 27.0997 30.5 26.8347Z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                        <a href="https://api.whatsapp.com/send?phone=%2B51930820893&data=AWBSqMg4WzEBzFb9AQi6eaXVGIZqMY3c5GbM9Z3xG6Qs7Twqm8AGZjicA2Ek9p53xbm14G94hdb5tUu5Vft63hGOg5HLgwLxE-8FI2QjMSgragCmqfnEiWyylY8ELwszI0Bz2Xkm9ATgepGlWqY2SH6bHB-j05w7HUNbnDraGXOhu4ZpaetRlytP3IPEnLQnot4i4Y19gR6kAmx9BxAPk7s12S08H405_YRtqPG27hvt5b0WS5YZQhX-njcUpIfCMdQ0MbwlPQoJJkpXLvSIlb_9Osz9IFpaYpifezsM-_GHSiyYFOE&source=FB_Page&app=facebook&entry_point=page_cta&fbclid=IwAR12t0uprByw4ZrFJ6gc0ThMNi_HzAeVvg8XKM8ZBVyowI7jZ2aVaMWeqU8"> 930 820 893 </a>
                                    </div>
                                    <div className="Contact_Mobile">
                                        <div className="Footer_Mobile_icon">
                                            <svg width="33" height="35" viewBox="0 0 33 35" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M30.8512 24.1299C28.6475 24.1299 26.5154 23.7549 24.5267 23.0799C24.2151 22.9693 23.8801 22.9529 23.56 23.0325C23.24 23.1121 22.9478 23.2845 22.7171 23.5299L19.9042 27.2236C14.8337 24.6924 10.0858 19.9111 7.55958 14.4174L11.0533 11.3049C11.5371 10.7799 11.6804 10.0486 11.4833 9.39236C10.8204 7.31111 10.48 5.07986 10.48 2.77361C10.48 1.76111 9.67375 0.917358 8.70625 0.917358H2.50708C1.53958 0.917358 0.375 1.36736 0.375 2.77361C0.375 20.1924 14.2246 34.6674 30.8512 34.6674C32.1233 34.6674 32.625 33.4861 32.625 32.4549V25.9861C32.625 24.9736 31.8187 24.1299 30.8512 24.1299Z"
                                                    fill="white" />
                                            </svg>

                                        </div>
                                        <a> 955 404 270</a>
                                    </div>
                                </div>
                                <div className="Contact_Outlook">
                                    <div className="Outlook_icon">
                                        <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.5843 10.0222L22.3843 21.5732L5.18428 10.0222V5.40177L22.3843 16.9528L39.5843 5.40177M39.5843 0.781372H5.18428C2.79778 0.781372 0.884277 2.83745 0.884277 5.40177V33.1242C0.884277 34.3496 1.33731 35.5248 2.14372 36.3913C2.95012 37.2578 4.04385 37.7446 5.18428 37.7446H39.5843C40.7247 37.7446 41.8184 37.2578 42.6248 36.3913C43.4312 35.5248 43.8843 34.3496 43.8843 33.1242V5.40177C43.8843 4.17636 43.4312 3.00115 42.6248 2.13466C41.8184 1.26816 40.7247 0.781372 39.5843 0.781372Z" fill="white" />
                                        </svg>
                                    </div>
                                    <a href="mailto:miguel_bqb@outlook.es">miguel_bqb@outlook.es</a>
                                </div>
                                <div className="Contact_Gmail">
                                    <div className="Gmail_icon">
                                        <svg width="44" height="32" viewBox="0 0 44 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M43.7289 3.20295V28.8462C43.7289 30.3014 42.5665 31.4105 41.0414 31.4105H38.3539V8.13799L22.2289 19.1902L6.10388 8.13799V31.4105H3.41638C1.89123 31.4105 0.728882 30.3014 0.728882 28.8462V3.20295C0.728882 2.47468 1.01644 1.8336 1.49885 1.37972C1.7501 1.13986 2.04932 0.950652 2.37873 0.82334C2.70814 0.696029 3.06102 0.633213 3.41638 0.638628H4.31266L22.2289 13.0333L40.1451 0.638628H41.0414C41.8046 0.638628 42.4765 0.913011 42.9589 1.37972C43.4413 1.8336 43.7289 2.47468 43.7289 3.20295Z" fill="white" />
                                        </svg>

                                    </div>
                                    <a href="mailto:qbcorporacion@gmail.com">qbcorporacion@gmail.com</a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="Footer__box2">
                <span>&copy; 2023 <b>EMPRESA QB</b> - Todos los derechos reservados</span>
            </div>
        </footer>

    );
}


export default Section6_Footer;