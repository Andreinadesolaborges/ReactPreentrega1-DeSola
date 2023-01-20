import hero from '../../img/hero.png'
const Hero = () => {
    return (
        <>
            <div className="col-12 col-md-6 align-self-center">
                <img className="align-self-center d-inline-block align-text-center img-responsive w-100 saturate zoomIn" src={hero} alt={"hero"} />
            </div>

        </>
    );
}

export default Hero;
