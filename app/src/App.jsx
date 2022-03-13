import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ItemDetailContainer from "./components/ItemDetailContainer";


const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ItemListContainer greeting="Web en construcción..." />
      <Main />
      <ToastContainer />

      <ItemDetailContainer
        position="bottom-right"
      />
    </>
  );
};
export default App;
