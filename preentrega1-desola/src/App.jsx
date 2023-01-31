import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Herocontainer from "./components/HeroContainer/Herocontainer";
import Cardcontainer from "./components/CardContainer/CardContainer";
import { Itemlistcontainer } from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <>
        <Navbar />
        <Herocontainer mainHeader={"Bienvenid@s a la tienda de Nina"} subtitle={"La magia existe"} />
        <Cardcontainer/>
        
    </>
  );
}

export default App;
