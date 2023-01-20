import Navbar from "./Navbar/Navbar";
import './App.css';
import Itemlistcontainer from "./ItemListContainer/ItemListContainer";
import Cardcontainer from "./CardContainer/CardContainer";


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
