import React from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';

const MyOrder = () => {

    const { state } = React.useContext(AppContext);


    const sumTotal = () => {
        const reducer = (accumalator, currentValue) => accumalator + parseInt(currentValue.priceUnit);
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }


 
    return (
        <main>
            <div className="container-basquet">
                <div className="products-basquet">
                    <h1 className="title-shop">Productos en la bolsa (10)</h1>
                    {state.cart.map(product => (
                        <OrderItem product={product} key={`OrderItem-${product.id}`} />
                    ))}
                </div>

                <div className="card-total">
                    <h1 className="title-shop">Resumen de la compra</h1>
                    <div className="container-total">
                        <div className="quantity-total">
                            <div>Cant. de productos:</div>
                            <div>0</div>
                        </div>
                        <div className="total-price">
                            <div>Precio Total:</div>
                            <div>S/{sumTotal()}</div>
                        </div>
                        <div className="button-continue-shop">
                            <button>Continuar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
};
export default MyOrder;
