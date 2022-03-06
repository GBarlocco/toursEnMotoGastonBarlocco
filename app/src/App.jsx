import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main"
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ItemListContainer greeting="Web en construcción..." />
      <Main />
    </>
  );
};
export default App;
