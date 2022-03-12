import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer";

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ItemListContainer greeting="Web en construcción..." />
      <Main />
      <ToastContainer />
    </>
  );
};
export default App;
