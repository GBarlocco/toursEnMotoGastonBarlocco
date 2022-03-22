import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const { Provider } = CartContext;


export const CartContextProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (product, count) => {
        let cartProduct = { product, count };
        let cartAux = [];

        if (isInCart(product)) {
            cart.map((travel) => {
                if (travel.product.id === product.id) {
                    travel.count = travel.count + count;
                };
            });
            cartAux = [...cart];
        } else {
            cartAux = [cartProduct, ...cart];
        }
        setCart(cartAux);
    }

    const removeItem = (product) => {
        if (isInCart (product)){
            const cartAux = cart.filter (travel => travel.product !== product);
            setCart(cartAux);
        }
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (product) => {
        let travelInCart = false;

        cart.map((travel) => {
            if (travel.product.id === product.id) {
                travelInCart = true;
            }
        })
        return travelInCart;
    }

    return (
        <Provider
            value={{
                addItem,
                removeItem,
                clear,
                cart
            }}
        >
            {children}
        </Provider>
    );
};

