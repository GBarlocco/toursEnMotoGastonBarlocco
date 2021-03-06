import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
      <ToastContainer autoClose={3000} />
    </BrowserRouter>
  );
};
export default App;
