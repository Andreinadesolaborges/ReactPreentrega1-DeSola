import React from 'react';
import Itemcount from '../ItemCount/ItemCount';
const Item = ({ item }) => {
    return (
        <>
            
                <div className="col-6 col-sm-4 col-md-3 text-center align-self-center">
                    <div className="card hvr-float-shadow my-3">
                        <img src={item.img} className="card-img-top img-fluid" alt={"img"} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <p className="card-text">{item.descripcion}</p>
                            <h6 className="price-text badge rounded-pill bg-light d-block"> ${item.precio}</h6>
                            <Itemcount valInicial={1} stock={10} />
                            <a id={item.id} href="#" className="btn btn-primary d-block zoomIn ">Agregar</a>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Item;
