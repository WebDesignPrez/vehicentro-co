import NavBar from "../NavBar"
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
import { useEffect, useState } from "react";
import { Slide } from 'react-slideshow-image';
import env from '../config';
import { Helmet } from "react-helmet";
import FormContactFicha from "../components/FormContactFicha";

let bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOBOTONCOT"
let nombreCamion = ""
let nombreSerie = "Serie 100"
let camionSerie = ""
let audio_motor = "../images/10-toneladas/motor.mp3"
let urlMedia = env.url
let prueba

function Inicio2() {

    const [modalFormIsOpen, setFormIsOpen] = useState(false);


    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotorHome')
        motorPlayer.src = audio_motor

        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeFormContact()
            }
        };

        const videoContainer = document.getElementById('videoContainer')
        const imgContainer = document.querySelectorAll('.imgContainerHeader')
        const mouseOverHandler = event => {
            if (!videoContainer.classList.contains("video50"))
                videoContainer.classList.add("video50");

            imgContainer.forEach(a => {
                if (!a.classList.contains("img25")) {
                    a.classList.add("img25")
                    a.querySelector('.linksBox').classList.add("imgHidden")
                }
            })
        }

        const mouseLeaveHandler = event => {
            if (videoContainer.classList.contains("video50")) {
                videoContainer.classList.remove("video50");
            }
            imgContainer.forEach(a => {
                if (a.classList.contains("img25")) {
                    a.classList.remove("img25")
                    a.querySelector('.linksBox').classList.remove("imgHidden")
                }
            })
        }

        videoContainer.addEventListener('mouseenter', mouseOverHandler);
        videoContainer.addEventListener('mouseleave', mouseLeaveHandler);


        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };

    }, []);


    function openFormContact() {
        setFormIsOpen(true)
    }

    function closeFormContact() {
        setFormIsOpen(false)
    }



    return (
        <>
            <Helmet>
                <title>Vehicentro | Importadores de la marca SINOTRUK. Venta de camiones</title>
                <meta name="description" content="Camiones de venta en Colombia · Puntos vehicentro a nivel nacional · VISÍTANOS EN BOGOTA" />
                <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador"></meta>
                <meta name="robots" content="index, follow"></meta>
            </Helmet>
            <NavBar />
            <Block1 />
            <Menu2 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Banner />
            <BannerContacto url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
            <Footer />
            <Modal />
        </>
    )
}

function Block1() {
    return (
        <div className="block1 boxBlock" height="1080">
            <div id="videoContainer">
                <div className="boxRight tecnologia" height="1080">
                    <div className="boxLeft c7h">
                        <video preload="none" autoPlay={true} width="930" height="1080" playsInline={true} controls loop muted id="myVideo" src={urlMedia + "home/camiones.mp4"} className="videoWidth produ" />
                    </div>
                </div>
                <div className="overlayBox" height="200">
                    <p className="titleBox">PRODUCTOS</p>
                    <div className="linksBox">
                        <NavLink src="" to="/serie/100">SERIE <span className="boldserie">100</span></NavLink>
                        <NavLink src="" to="/serie/t5g">SERIE <span className="boldserie">T5G</span></NavLink>
                        <NavLink src="" to="/serie/t7h">SERIE <span className="boldserie">T7H</span></NavLink>
                        <NavLink src="" to="/serie/c7h">SERIE <span className="boldserie">C7H</span></NavLink>
                    </div>
                </div>
            </div>
            <div className="imgContainerHeader imgHeader1" height="600">

                <div className="overlayBox" height="200">
                    <p className="titleBox "><span className="rojo">R</span>ESPALDO - <span className="rojo">R</span>EPUESTOS</p>
                    <div className="linksBox testimonio test">
                        <NavLink to="/garantia" src="">LA MEJOR GARANTÍA DEL PAÍS</NavLink>
                    </div>
                </div>
            </div>
            <div id="videoContainer" className="responsive">
                <div className="boxRight tecnologia" height="1080">
                    <div className="boxLeft c7h">
                        <video preload="none" autoPlay={true} width="930" height="1080" playsInline={true} controls loop muted id="myVideo" src={urlMedia + "home/testimonio-movil.mp4"} className="videoWidth produ" />
                    </div>
                </div>
                <div className="overlayBox" height="200">
                    <a href="/experiencia" className="titleBox">SINOTRUKEROS</a>
                    <div className="linksBox testimonio">
                        <a href="/experiencia" className="line2" src="">VIDEOS TESTIMONIALES</a>
                    </div>
                </div>
                <h1>Venta de camiones en Ecuador</h1>
                <h2>En vehicentro encuentra camiones Sinotruk</h2>
            </div>
            <div className="imgContainerHeader imgHeader2 noResponsive" height="600">
                <div className="overlayBox" height="200">
                    <a href="/experiencia" className="titleBox">SINOTRUKEROS</a>
                    <div className="linksBox testimonio">
                        <a href="/experiencia" className="line2" src="">VIDEOS TESTIMONIALES</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Block2() {
    return (
        < div className="block2 noResponsive" >
            <video preload="none" width="1920" height="1076" controls autoPlay={true} playsInline={true} muted loop src={urlMedia + "home/vehinstein-tv.mp4"} className="videoWidth" />
        </div >
    )
}


function Block3() {

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

            //CAMION T5G 250HP 17000 
            case "camion-T5G-250HP-17000":
                nombreCamion = "CAMION T5G 250HP 17000"
                camionSerie = "T5G 250HP 17000"
                nombreSerie = "Serie T5G"
                bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G17000"

                break;

            //CAMION T5G 250HP 17000 AMT
            case "camion-T5G-250HP-17000-AMT":
                nombreCamion = "CAMION T5G 250HP 17000 AMT"
                camionSerie = "T5G 250HP 17000 AMT"
                nombreSerie = "Serie T5G"
                bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G17000AMT"

                break;

            //MINIMULA T5G 350HP 40500
            case "MINIMULA-T5G-350HP-40500":
                nombreCamion = "MINIMULA T5G 350HP 40500"
                camionSerie = "T5G 350HP 40500"
                nombreSerie = "Serie T5G"
                bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G40500"

                break;

            //MINIMULA T5G 350HP 40500 AMT
            case "MINIMULA-T5G-350HP-40500-AMT":
                nombreCamion = "MINIMULA T5G 350HP 40500 AMT"
                camionSerie = "T5G 350HP 40500 AMT"
                nombreSerie = "Serie T5G"
                bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G40500AMT"

                break;

                
                //SUPER MINIMULA T7H 400HP 40500
                case "SUPER-MINIMULA-T7H-400HP-40500":
                    nombreCamion = "SUPER MINIMULA T7H 400HP 40500"
                    camionSerie = "T7H 400HP 40500"
                    nombreSerie = "Serie T7H"
                    bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT7H40500"
                    
                    break;

                    //SUPER MINIMULA T7H 400HP 40500 AMT
                    case "SUPER-MINIMULA-T7H-400HP-40500-AMT":
                        nombreCamion = "SUPER MINIMULA T7H 400HP 40500 AMT"
                        camionSerie = "T7H 400HP 40500 AMT"
                        nombreSerie = "Serie T7H"
                        bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT7H40500AMT"
        
                        break;
                    
            
             //TRACTO MULA C7H 540HP 52000 AMT
             case "TRACTO-MULA-C7H-540HP-52000-AMT":
                nombreCamion = "TRACTO MULA C7H 540HP 52000 AMT"
                camionSerie = "C7H 540HP 52000 AMT"
                nombreSerie = "Serie C7H"
                bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOC7H52000AMT"

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
            <div className="block3 boxBlock">
                <div>
                    <a href="/serie/100"><img src={urlMedia + "home/serie-100.webp"} width="500" height="389" alt="Camiones de carga liviana en Ecuador" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <NavLink className="titleBox2" to="/serie/100">100</NavLink>
                        <div className="linksBox">
                            <a className="line2" to="/camiones/NQS" onClick={() => { openFormContact("camion-NQS-156HP-9900") }}>NQS</a>
                            <a className="line2" to="/camiones/FRS" onClick={() => { openFormContact("camion-FRS-170HP-10500") }}>FRS</a>
                            {/* <NavLink className="line2" to="/camiones/FRS" >FRS</NavLink>
                            <NavLink className="line2" to="/camiones/NQS" >NQS</NavLink> */}
                        </div>
                    </div>
                </div>
                <div>


                    <Slide duration={2000}>

                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(../images/home/motor.webp)`, height: `23.2vw` }}>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(../images/home/veinstein.webp)`, height: `23.2vw` }}>
                            </div>
                        </div>
                    </Slide>


                    <div className="bottomContainer">
                        <div className="bannerTec">
                            <img src={urlMedia + "home/tecnologia-alemana.webp"} width="590" height="170" alt="Tecnologia Alemana" />
                        </div>
                        <div className="boxPlayerMotor audiohome">
                            <audio id="audioMotorHome" controls type="audio/mpeg"></audio>
                        </div>
                        <div className="linksBox iniciocentrado">
                            <a className="line2" src="">ESCUCHA TU MOTOR</a>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="/serie/t5g"><img src={urlMedia + "home/serie-t5g.webp"} width="900" height="700" alt="Camiones de carga pesada en Ecuador" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <NavLink className="titleBox2" to="/serie/t5g">T5G</NavLink>
                        <div className="linksBox">
                            <a className="line2" to="/camiones/camion-17000" onClick={() => { openFormContact("camion-T5G-250HP-17000") }}>17.000</a>
                            <a className="line2" to="/camiones/camion-17000-AMT" onClick={() => { openFormContact("camion-T5G-250HP-17000-AMT") }}>17.000 AMT</a>
                            <a className="line2" to="/camiones/camion-40500" onClick={() => { openFormContact("MINIMULA-T5G-350HP-40500") }}>40.500</a>
                            <a className="line2" to="/camiones/camion-40500-AMT" onClick={() => { openFormContact("MINIMULA-T5G-350HP-40500-AMT") }}>40.500 AMT</a>
                            {/* <NavLink className="line2" to="/camiones/camion-40500">40.500</NavLink><br></br>
                            <NavLink className="line2" to="/camiones/camion-40500-AMT">40.500 AMT</NavLink><br></br>
                            <NavLink className="line2" to="/camiones/camion-17000">17.000</NavLink><br></br>
                            <NavLink className="line2" to="/camiones/camion-17000-AMT">17.000 AMT</NavLink><br></br> */}
                        </div>
                    </div>
                </div>
                <div>
                    <a href="/serie/t7h"> <img src={urlMedia + "home/serie-t7h.webp"} width="900" height="700" alt="Cabezales de venta en Ecuador" /></a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <NavLink className="titleBox2" to="/serie/t7h">T7H</NavLink>
                        <div className="linksBox">
                            {/* <NavLink className="line2" to="/cabezales/cabezal-40500">40.500</NavLink>
                            <NavLink className="line2" to="/cabezales/cabezal-40500-AMT">40.500 AMT</NavLink> */}
                            <a className="line2" to="/cabezales/cabezal-40500" onClick={() => { openFormContact("SUPER-MINIMULA-T7H-400HP-40500") }}>40.500</a>
                            <a className="line2" to="/cabezales/cabezal-40500-AMT" onClick={() => { openFormContact("SUPER-MINIMULA-T7H-400HP-40500-AMT") }}>40.500 AMT</a>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="/serie/c7h"> <img src={urlMedia + "home/serie-c7h.webp"} width="900" height="700" alt="Cabezales de venta en Ecuador" /> </a>
                    <div className="bottomContainer">
                        <p className="titleBox">SERIE</p>
                        <NavLink className="titleBox2" to="/serie/c7h">C7H</NavLink>
                        <div className="linksBox">
                            {/* <NavLink className="line2" to="/cabezales/cabezal-52000-AMT">52.000 AMT</NavLink> */}
                            <a className="line2" to="/cabezales/cabezal-52000-AMT" onClick={() => { openFormContact("TRACTO-MULA-C7H-540HP-52000-AMT") }}>52.000 AMT</a>
                        </div>
                    </div>
                </div>
            </div>

            {modalFormIsOpen &&
                <FormContactFicha url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
            }
        </>
    )
}

function Block4() {
    return (
        <div className="block4 boxBlock boxesIni posRelative content3">
            <div className="boxLeft playMotor colorLinksSobreTexto">

                <Slide>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(../images/home/camion-sinotruk-basura.webp)`, height: `43vw` }}>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(../images/home/camion-con-balde.webp)`, height: `43vw` }}>
                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(../images/home/camion-verde-basura.webp)`, height: `43vw` }}>
                        </div>
                    </div>
                </Slide>
                <div className="boxText flex-table row linksBox">
                    <a href="/proximamente"><div className="flex-row textMain textMain2">VEHÍCULOS ESPECIALES</div></a>
                </div>
            </div>
            <div className="boxRight tecnologia">
                <div className="boxLeft c7h">
                    <video preload="none" width="320" height="240" controls autoPlay={true} playsInline={true} muted loop src={urlMedia + "home/tamara2.mp4"} className="videoWidth" />
                </div>
            </div>
        </div>
    )
}

function Menu2() {
    return (
        <nav className="menu2 home2">
            <ul className="nav-links-h">
                <li><a className="sunward mouseA" option="sinotruk">CAMIONES</a></li>             
                <li><a className="tecnologia mouseA" option="tecnologia">TECNOLOGÍA</a></li>
                <li><NavLink to="/camion-en-uso/camion-de-48-toneladas" className="camionesCss">CAMIONES EN USO</NavLink></li>
                <li><NavLink to="/concesionarios" className="concesionarios mouseA">CONCESIONARIOS</NavLink></li>
            </ul>
            <a href="tel:+59332994740" className="telefonoInicio">032994740</a>
        </nav>
    )
}

function Banner() {
    return (
        <div className="posRelative banner">
            <a href="/concesionarios"><img className="desktopImg slideMain" src={urlMedia + "home/webMapaColombia2.jpg"} width="1790" height="590" alt="Puntos de Venta de Camiones Sinotruk en Ecuador" /></a>
            <img className="movilImg slideMain" src={urlMedia + "home/movilColombiaMapa.jpg"} width="2432" height="1675" alt="Punto de Venta" />
            <div className="boxText flex-table row">
                <a href="/concesionarios"><div className="flex-row textMain textMain2 noResponsive">Puntos Vehicentro a nivel Nacional</div></a>
            </div>
        </div>
    )
}

function Modal() {
    return (
        <div id="modalContainer"></div>
    )
}

export default Inicio2