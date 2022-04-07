import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { CartContextProvider } from './context/CartContext';
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.render(
    <AuthContextProvider>
        <CartContextProvider>
            <App />
        </CartContextProvider>
    </AuthContextProvider>
    ,
    document.getElementById('root')
);

