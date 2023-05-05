import React from 'react';

//Import scss
import '../styles/MyOrder.scss';

//import componentes
import OrderItem from '../components/OrderItem';

//import app context
import AppContext from '../context/AppContext';

//improt use save pedido
import useSavePedido from '../hooks/useSavePedido';

const MyOrder = () => {

    //Control del nombre inicio sesion por el nombre de usuario
    const { user } = React.useContext(AppContext);

    //Hacemos calculos
    const { stateCart, quantityCart, setStateCart, total } = React.useContext(AppContext);
    //console.log("carta de orden")
    //console.log(stateCart);

    //Pedidos
    const { stateCartPedido, setStateCartPedido } = React.useContext(AppContext);

    //invoco al metodo guardar pedido
    const { responseSavePedido, SavePedido, error } = useSavePedido();

    //console.log("carta pedido")
    //console.log(stateCartPedido)

    const createdModeloPedido = () => {
        if (user) {
            const objetoPedidoFinal = {
                'user_id': user.data.user.id,
                'productos': stateCartPedido.cartPedido,
                'total_amount': total
            }
            console.log(objetoPedidoFinal);
            SavePedido(objetoPedidoFinal);
        } else {
            alert("Inicia sesión para realizar la compra");
        }
    }

    //Mensajes
    React.useEffect(() => {
        if (responseSavePedido) {
            if (responseSavePedido.res = true) {
                setStateCartPedido({ cartPedido: [] });
                setStateCart({ cart: [] });
                alert(responseSavePedido.message);
            }
        }

    }, [responseSavePedido]);

    React.useEffect(() => {
        if (error) {
            alert(error.message);
        }
    }, [error]);

    //Control de carrito vacio
    if (stateCart.cart.length === 0) {
        return (
            <>
                <div className='container-button-to-bay'>
                    <button className='button-cart-to-bay'>
                        Ir a comprar
                    </button>
                </div>
            </>
        )

    } else {
        return (
            <main>
                <div className="container-basquet">
                    <div className="products-basquet">
                        <h1 className="title-shop">Productos en la bolsa (10)</h1>
                        {stateCart.cart.map(product => (
                            <OrderItem product={product} key={`OrderItem-${product.id}`} />
                        ))}
                    </div>

                    <div className="card-total">
                        <h1 className="title-shop">Resumen de la compra</h1>
                        <div className="container-total">
                            <div className="quantity-total">
                                <div>Cant. de productos:</div>
                                <div>{quantityCart}</div>
                            </div>
                            <div className="total-price">
                                <div>Precio Total:</div>
                                <div>S/{total}</div>
                            </div>
                            <div className="button-continue-shop"
                                onClick={() => createdModeloPedido()}
                            >
                                <button>Continuar Compra</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
};
export default MyOrder;
