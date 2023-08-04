import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import FormContact from "../components/FormContact";
import env from '../config';
import { useEffect, useState } from "react";
import FormContactFicha from "../components/FormContactFicha";

let series
let nombreCamion
let camionSerie
let urlMedia = env.url
let audio_motor = "../images/10-toneladas/motor.mp3"
let bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOBOTONCOT"
let nombreSerie = "Serie 100"


function Serie_100() {

    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotor')
        motorPlayer.src = audio_motor

    }, []);

    return (
        <>
            <Helmet>
                <title>Camiones Serie 100 | Vehicentro</title>
                <meta name="description" content="Camiones de la Serie 100 de Sinotruk, diseñados para máxima seguridad, confianza y comodidad." />
                <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador, serie 100"></meta>
                <meta name="robots" content="index, follow"></meta>
            </Helmet>
            <NavBarTop />
            <Content1 />
            <Content2 />
            <Content3 />
            <Content4 />
            <Content5 />
            <BannerContacto />
            <Footer />
        </>
    )
}

function Content1() {
    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">
                <div className="boxRight">
                    <div className="boxLeft c7h">
                        <img src={urlMedia + "serie-100/serie-100.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                    </div>
                </div>
                <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                    <img src={urlMedia + "serie-100/motor-serie-100.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                    <div className="boxPlayerMotor ">
                        <audio id="audioMotor" controls type="audio/mpeg"></audio>
                    </div>
                </div>
            </div>
        </>
    )
}

function Content2() {

    series = [{
        serie: "CAMION NQS",
        modelo: "156HP 9900",
        url: "/camiones/camion-de-3-5-toneladas-1057"

    }, {
        serie: "CAMION FRS",
        modelo: "170HP 10500",
        url: "/camiones/camion-de-3-6-toneladas"
    }
    ]

    const [modalFormIsOpen, setFormIsOpen] = useState(false);

    function openFormContact(cam) {
        console.log(cam)

        switch (cam) {

            //NQS
            case "camion-NQS-156HP-9900":
                nombreCamion = "CAMION NQS 156HP 9900"
                camionSerie = "NQS 156HP 9900"
                nombreSerie = "Serie 100"
                bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCONQS"

                break;

            //CAMION FRS
            case "camion-FRS-170HP-10500":
                nombreCamion = "CAMION FRS 170HP 10500"
                camionSerie = "FRS 170HP 10500"
                nombreSerie = "Serie 100"
                bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOFRS"


                break;
            default:
            break;
        }


        setFormIsOpen(true)
    }

    function closeFormContact() {
        setFormIsOpen(false)
    }

    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">

                <div className="boxRight nomSeries">

                    <div className="serieTitle serieBox">
                        <p className="serieTitle1">SERIE</p>
                        <p>100</p>
                    </div>

                    <div className="serieList serieBox">
                        {/* {series.map((item, index) => (
                             <NavLink className="serieContainer" to={item.url}>
                                 <p className="nombreSerie">
                                     {item.serie}
                             </p>
                                 <span className="modeloSerie">
                                     {item.modelo}
                                 </span>
                            </NavLink>
                        ))} */}

                        <a className="serieContainer" onClick={() => { openFormContact("camion-NQS-156HP-9900") }}>
                              <p className="nombreSerie">
                                CAMION NQS
                                </p>
                                <span className="modeloSerie">
                                156HP 9900
                               </span>
                         </a>

                         <a className="serieContainer" onClick={() => { openFormContact("camion-FRS-170HP-10500") }}>
                              <p className="nombreSerie">
                              CAMION FRS
                                </p>
                                <span className="modeloSerie">
                                170HP 10500
                               </span>
                         </a>
                    </div>
                </div>
                <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                    <img src={urlMedia + "serie-100/serie-100-lateral.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
            </div>

            {modalFormIsOpen &&
                <FormContactFicha url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
            }
        </>
    )
}

function Content3() {
    return (
        <>

            <div className="contentProduct">

                <div className="marcasbg textoImagenesProducto" >

                    <div className="boxRightHeader  half icon_center series" >
                        <div className="banner"><img src={urlMedia + "serie-100/serie-100-texto.webp"} /></div>
                    </div>

                    <div className="boxRightHeader  half text_icon_center series" >
                        <p className='vidaUtil'>Vida útil de más de 1.5 MILLONES de kilómetros</p>
                    </div>

                    <div className="boxRightHeader  half icon_right series">
                        <div className="banner"><img src={urlMedia + "serie-100/garantia.webp"} /></div>
                    </div>

                </div>


            </div>
        </>
    )
}

function Content4() {
    return (
        <>
            <div className="boxesIni posRelative content2 fondonegro">

                <div className="boxLeft playMotor contenedorTextoSobrepuesto logoCenter">
                    <img src={urlMedia + "serie-100/cumins-logo.webp"} width="1400" height="1000" className="slideMain logoSerie" alt="Punto de Venta" />
                </div>
            </div>
        </>
    )
}

function Content5() {
    return (
        <>
            <div className="boxesIni posRelative centrado">
                <div className="centrado">
                    <img src={urlMedia + "serie-100/serie-100-en-carretera.webp"} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>
                <div>
                    <FormContact url="https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIE100" camion={nombreCamion} serie="Serie 100" camionSerie={camionSerie} />
                </div>
            </div>
        </>
    )
}

export default Serie_100