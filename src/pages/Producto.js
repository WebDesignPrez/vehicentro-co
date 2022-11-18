import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact";
import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import '../stylesIn.css';
import { useParams } from "react-router";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../slider.css';
let images
let motor

function Producto(props) {

    switch (props.name) {
        case "Camion_10_toneladas":
            console.log("entra")
            images = [
                "./images/slidecamion.webp",
                "./images/slidecamion.webp",
                "./images/slidecamion.webp",
            ];
            motor = "./images/Motor Sinotruk de camion de 10 toneladas Ecuador.webp"

            break;

        default:
            break;
    }



    return <>
        <NavBarTop />
        <div className="boxesIni posRelative content2">
            <div className="boxRight tecnologia">
                <Slide>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[0]})` }}>

                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})` }}>

                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})` }}>

                        </div>
                    </div>
                </Slide>
                <div className="boxPlay"></div>
            </div>
            <div className="boxLeft playMotor">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxPlayer">
                    <audio id="audioMotor" controls></audio>
                </div>
            </div>

        </div>
        <div className="contentProduct">
            <div className="banner"><img src="./images/banner.png" width="1400" height="400" /></div>
            <div className="boxesIni posRelative partesbg">
                <div>
                    <img src="./images/Camion de 10 toneladas potencia de motor 240hp sinotruk.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
                <div>
                    <img src="./images/Camion de 10 toneladas freno a las valvulas sinotruk.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
                <div>
                    <img src="./images/Camion de 10 toneladas 6 cilindros en linea sinotruk.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
                <div>
                    <img src="./images/Camion de 10 toneladas inyeccion common rail sinotruk.webp" width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
            </div>
            <div className="boxesIni posRelative">
                <div>
                    <img src="./images/Cabina interior de camion de 10 toneladas Ecuador Sinotruk.webp" width="1000" height="760" className="slideMain" alt="Punto de Venta" />
                </div>
                <div className="marcasbg">
                    <img src="./images/palanca.png" width="230" height="300" className="slideMain" alt="Punto de Venta" />
                    <img src="./images/Marcas con las que trabaja vehicentro.webp" width="1000" height="760" className="slideMain" alt="Punto de Venta" />
                </div>
            </div>
            <div className="bannerMedidas"><img src="../images/measure.png" width="1400" height="400" /></div>
        </div>
        <FormContact />
        <BannerContacto />
        <Footer />
    </>
}

export default Producto