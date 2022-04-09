import { Route, Routes } from "react-router-dom";
import Info from "./Info";
import ItemListContainer from "./ItemListContainer";
import Cart from "./Cart";
import Login from "./Login";
import ItemDetailContainer from "./ItemDetailContainer";
import RegisterAuth from "./RegisterAuth";
import Buy from "./Buy";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:name" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/info" element={<Info />} />
                <Route path="/login" element={<Login />} />
                <Route path="/regAuth" element={<RegisterAuth />} />
                <Route path="/buy/:idCompra" element={<Buy />} />
            </Routes>
        </main>
    );
};
export default Main;