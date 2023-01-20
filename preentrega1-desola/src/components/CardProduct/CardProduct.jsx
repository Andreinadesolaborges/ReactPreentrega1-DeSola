
const Cardproduct = ({title,description,url}) => {
    return (
        <>
            <div className="card hvr-float-shadow">
                <img src={url} className="card-img-top img-fluid" alt={"img"} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary zoomIn">Agregar</a>
                </div>
            </div>
        </>
    );
}

export default Cardproduct;
