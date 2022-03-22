import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

import { Button } from '@mui/material';

const Cart = () => {
    const { cart, clear, removeItem } = useContext(CartContext);


    return (
        <>
            {(cart.length <= 0 ?
                <p> No hay viajes en el carrito</p>
                :
                cart.map((travel) =>
                    <>
                        <p>
                            Viaje: {travel.product.name}, Cantidad: {travel.count}
                            <Button
                                color="error"
                                size="small"
                                variant="outlined" 
                                onClick={() => removeItem(travel.product)}
                            >
                                X
                            </Button>
                        </p>
                    </>
                ))
            }
            <p>
                <Button
                    color="success"
                    size="small"
                    onClick={clear}
                >
                    Limpiar carrito
                </Button>
            </p>
        </>
    )
};
export default Cart;
