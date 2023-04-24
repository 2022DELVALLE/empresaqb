import React from 'react';

//import scss
import '../styles/Components/MyPayment.scss';

//import images
import yape from '../assets/img/yape.png';
import plin from '../assets/img/Plin.png';
import paypal from '../assets/img/paypl.png';
import bancoNacion from '../assets/img/Banco de la nación.png';
import bbva from '../assets/img/BBVa.png';
import bcp from '../assets/img/BCP.png';


const MyPayment = () => {
    return (
        <section className="ContainerPaymentMethods">
            <div className="ContenedorPaymentMethodsMain">
                <div className="ContainerDatesPaymentMethod">
                    <h1>Gracias por su compra</h1>
                    <h2>N° DE PEDIDO : 121238383</h2>
                    <div className="PaymentMethods_Location">
                        <div className="PaymentMethods_Location_icon">
                            <svg width="123" height="126" viewBox="0 0 123 126" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M61.2168 124.5C94.2398 124.5 120.934 96.9225 120.934 63C120.934 29.0775 94.2398 1.5 61.2168 1.5C28.1938 1.5 1.5 29.0775 1.5 63C1.5 96.9225 28.1938 124.5 61.2168 124.5Z"
                                    fill="#F5F5F5" stroke="#C00100" stroke-width="3" />
                                <path opacity="0.3" d="M40.2413 53L38.3008 63H83.3218L81.3812 53H40.2413Z" fill="#F24E1E" />
                                <path
                                    d="M34.9369 36.3333H86.6852V43H34.9369V36.3333ZM86.6852 46.3333H34.9369L31.7026 63V69.6666H34.9369V89.6666H67.2796V69.6666H80.2166V89.6666H86.6852V69.6666H89.9194V63L86.6852 46.3333ZM60.811 83H41.4054V69.6666H60.811V83ZM38.3005 63L40.2411 53H81.381L83.3215 63H38.3005Z"
                                    fill="#F24E1E" />
                            </svg>

                        </div>
                        <div className="PaymentMethods_Location_Place">
                            <div className="PaymentMethods_Location_Place_I">
                                RECEPCIÓN DE PEDIDO EN LA TIENDA
                            </div>
                            <div className="PaymentMethods_Location_Place_II">
                                <svg width="14" height="20" viewBox="0 0 14 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7 0C3.13 0 0 3.13 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 3.13 10.87 0 7 0ZM7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.66304 9.23661 8.29893 8.76777 8.76777C8.29893 9.23661 7.66304 9.5 7 9.5Z"
                                        fill="#F24E1E" />
                                </svg>
                                <span>Jirón Arequipa 623, Tarma 12651</span>
                            </div>
                        </div>
                    </div>
                    <div className="PaymentMethods_FormPays">
                        <div className="PaymentMethods_FormPay_I PaymentMethods_Location_Place_I">
                            MEDIOS DE PAGO
                        </div>
                        <div className="PaymentMethods_FormPay_II">
                            <div className="PaymentMethods_FormPay_II_circles">
                                <img src={yape} alt="" />
                                <img src={plin} alt="" />
                                <img src={paypal} alt="" />
                            </div>
                            <div className="PaymentMethods_FormPay_II_Banks">
                                <img src={bancoNacion} alt="" />
                                <img src={bbva} alt="" />
                                <img src={bcp} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MyPayment;