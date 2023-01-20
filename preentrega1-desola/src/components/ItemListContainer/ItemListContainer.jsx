import Hero from "../Hero/Hero";
const Itemlistcontainer = ({mainHeader,subtitle}) => {
    return (
        <>
            <div className="container-fluid p-3">
                <div className="row align-items-center vh-100">
                    <Hero/>
                    <div className="col-12 offset-md-1 col-md-4 text-center align-self-center">
                    <h1 className="hoverLine">{mainHeader}</h1>
                    <h6>{subtitle}</h6>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Itemlistcontainer;
