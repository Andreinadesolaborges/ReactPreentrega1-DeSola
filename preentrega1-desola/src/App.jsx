import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Itemlistcontainer from "./components/ItemListContainer/ItemListContainer";
import Cardcontainer from "./components/CardContainer/CardContainer";


const App = () => {
  return (
    <>
        <Navbar />
        <Itemlistcontainer mainHeader={"Bienvenid@s a la tienda de Nina"} subtitle={"La magia existe"} />
        <Cardcontainer/>
    </>
  );
}

export default App;
