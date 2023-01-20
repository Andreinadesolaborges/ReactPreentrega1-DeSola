import Cardproduct from "../CardProduct/CardProduct";
import amatista from '../../img/items/Amatista.png';
import obsidiana from '../../img/items/obsidiana.png';
const Cardcontainer = () => {
    return (
        <>
            <div className="container-fluid p-3 border-top border-bottom">
                <div className="row align-items-center py-3">
                    <div className="col-12 text-center align-self-center">
                        <h2>Productos</h2>
                    </div>
                </div>
                <div className="row align-items-center py-3">
                    <div className="col-6 col-sm-4 col-md-3 text-center align-self-center">
                        <Cardproduct title={"Amatista"} description={"Una amatista es una piedra preciosa de color violeta que pertenece a la familia de minerales de cuarzo."} url={amatista}/>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 text-center align-self-center">
                        <Cardproduct title={"Obsidiana"} description={"La obsidiana es un vidrio volcánico natural formado a partir de lava enfriada rápidamente. Es un tipo de roca ígnea, caracterizada por su superficie lisa, bordes afilados y una textura vítrea."} url={obsidiana} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardcontainer;
