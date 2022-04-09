import { useState, createContext } from 'react';
export const CartContext = createContext();
const { Provider } = CartContext;

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [cartCount, setcartCount] = useState(0);

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
        setcartCount(cartCount + count);
        setTotal(total + product.price * count);
        setCart(cartAux);
    }

    const removeItem = (product, count) => {
        if (isInCart(product)) {
            const cartAux = cart.filter(travel => travel.product !== product);
            setTotal(total - product.price * count);
            setcartCount(cartCount - count);
            setCart(cartAux);
        }
    }

    const clear = () => {
        setCart([]);
        setcartCount(0);
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
                cart,
                total,
                cartCount
            }}
        >
            {children}
        </Provider>
    );
};

