import Cardproduct from "../CardProduct/CardProduct";
import amatista from '../../img/items/amatista.png';
import obsidiana from '../../img/items/obsidiana.png';
import vela from '../../img/items/vela.png'
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
                    <div className="col-6 col-sm-4 col-md-3 text-center align-self-center">
                        <Cardproduct title={"Vela simple"} description={"Una vela es un objeto de forma cilíndrica o cónica hecho de cera, sebo u otro material inflamable, con una mecha central que se enciende para producir luz y calor."} url={vela} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardcontainer;
