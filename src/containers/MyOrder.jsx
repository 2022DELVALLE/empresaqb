import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

//Import scss
import '../styles/MyOrder.scss';

//import componentes
import OrderItem from '../components/OrderItem';

//import app context
import AppContext from '../context/AppContext';

//improt use save pedido
import useSavePedido from '../hooks/useSavePedido';

const MyOrder = () => {

    const navigate = useNavigate();

    //Control del nombre inicio sesion por el nombre de usuario
    const { user } = React.useContext(AppContext);

    //Hacemos calculos
    const { stateCart, quantityCart, setStateCart, total, setNumeroPedido } = React.useContext(AppContext);

    //Pedidos
    const { stateCartPedido, setStateCartPedido } = React.useContext(AppContext);

    //invoco al metodo guardar pedido
    const { responseSavePedido, SavePedido, error } = useSavePedido();

    const createdModeloPedido = () => {
        if (user) {
            const objetoPedidoFinal = {
                'user_id': user.data.user.id,
                'productos': stateCartPedido.cartPedido,
                'total_amount': total
            }
            SavePedido(objetoPedidoFinal);
        } else {
            Swal.fire(
                'Upsss!!!!',
                'Inicia sesión para realizar la compra',
                'info'
            );
        }
    }

    //Mensajes
    React.useEffect(() => {
        if (responseSavePedido) {
            if (responseSavePedido.res = true) {
                setStateCartPedido({ cartPedido: [] });
                setStateCart({ cart: [] });
                Swal.fire(
                    'Felicitaciones!!!!',
                    responseSavePedido.message,
                    'success'
                );
                navigate('/payment');
                setNumeroPedido(responseSavePedido.numero_pedido)
            }
        }

    }, [responseSavePedido]);

    React.useEffect(() => {
        if (error) {
            Swal.fire(
                'Upsss!!!!',
                error.message,
                'info'
            );
        }
    }, [error]);

    //Control de carrito vacio
    if (stateCart.cart.length === 0) {
        const handleToHomeBuy = () => {
            navigate('/');
        }
        return (
            <>
                <div className='container-button-to-bay'>
                    <p className='text_cart'>No tiene productos añadidos</p>
                    <button className='button-cart-to-bay'
                        onClick={() => handleToHomeBuy()}
                    >
                        Ir a comprar
                    </button>
                </div>
            </>
        )

    }
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

};
export default MyOrder;
