import React from 'react';
import '../styles/Cart.scss';


const Cart = () => {
    return(
        <section>
        <div class="container">
            <h1>Productos en la bolsa</h1>
            <div class="cart">
                <div class="products">
                    <div class="product">
                        <img src="https://i.pinimg.com/originals/af/6e/cb/af6ecbaa11acf896b120498056ad29a5.jpg" alt="#"/ >
                        <div class="product-info">
                            <h3 class="product-name">Crisantemos</h3>
                            <h4 class="product-price">$8.99</h4>
                            <h4 class="product-offer">50%</h4>
                            <p class="product-quantity">Cant : <input value="1" name=""/></p>
                            <p class="product-remove">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span class="remove">Quitar</span>
                            </p>
                        </div>
                    </div>
                    <div class="product">
                        <img src="https://img.freepik.com/foto-gratis/hermoso-arreglo-papel-tapiz-flores_23-2149057015.jpg"
                            alt="#" />
                        <div class="product-info">
                            <h3 class="product-name">Rosas</h3>
                            <h4 class="product-price">$10.99</h4>
                            <h4 class="product-offer">10%</h4>
                            <p class="product-quantity">Cant : <input value="1" name=""/>
                            </p>
                            <p class="product-remove">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                <span class="remove">Quitar</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-total">
                    <p>
                        <span>Productos</span>
                        <span> 2 </span>
                    </p>
                    <p>
                        <span>Precio Total</span>
                        <span>$ 167.889</span>
                    </p>
                    <a href="#">Continuar compra</a>
                </div>
            </div>
        </div>
    </section>
    )
};
export default Cart;
