import img from '../../img/items/Amatista.png'
const Cardproduct = ({title,description}) => {
    return (
        <>
            <div className="card">
                <img src={img} className="card-img-top img-fluid" alt={"img"} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">Agregar</a>
                </div>
            </div>
        </>
    );
}

export default Cardproduct;
