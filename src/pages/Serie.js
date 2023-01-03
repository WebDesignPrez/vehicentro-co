import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact";
import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import '../stylesIn.css';
import { useParams } from "react-router";
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../slider.css';
import { useEffect, useState } from "react";
import '../modalContact.css';
import FormContactFicha from "../components/FormContactFicha";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

let imagen
let imagen2
let images
let series
let nombreSerieInd
let motor

let cabina
let marcas
let internas1
let internas2
let internas3
let internas4

let audio_motor
let garantia

let tecnologia
let contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
let nombreCamion
let bdc
let nombreSerie
let camionSerie

function Serie() {
    const [modalFormIsOpen, setFormIsOpen] = useState(false);


    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotor')
        motorPlayer.src = audio_motor

        const keyDownHandler = event => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeFormContact()
            }
        };

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

    //Comparacion paginas
    switch ((useParams("id").id)) {

        //10 toneladas
        case "t5g":
            imagen = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            imagen2 = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            nombreSerie = "Serie T5G"
            nombreSerieInd = "T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB10TT5G1167"
            series = [{
                serie: "T5G 1167",
                modelo : "9 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T5G 1167",
                modelo : "10.8 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T5G 1167",
                modelo : "12 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T5G 1167",
                modelo : "13 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T5G 1167",
                modelo : "13 TON 330HP",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T5G 1167",
                modelo : "18 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T5G 1167",
                modelo : "19.5 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T5G 4187",
                modelo : "19.5 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }]

            console.log('10 Toneladas')
            images = [
                "../images/10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador.webp",
                "../images/10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador-de-frente.webp"
            ];
          
            motor = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            garantia = "../images/10-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/10-toneladas/tecnologia-alemana.webp"

            cabina = "../images/10-toneladas/cabina-de-camion-de-10-toneladas-sinotruk.webp"
            marcas = "../images/10-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/10-toneladas/volante-deportivo-de-camion-de-10-toneladas.webp",
                "../images/10-toneladas/palanca-de-cambios-de-camion-de-10-toneladas.webp",
                "../images/10-toneladas/asiento-neumatico-dos.webp",
                "../images/10-toneladas/eleva-vidrios-electricos.webp",
                "../images/10-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                "../images/10-toneladas/climatizador.webp",
                "../images/10-toneladas/radio-touch-mp5.webp",
                "../images/10-toneladas/cabina.webp",
                "../images/10-toneladas/portavasos.webp"
            ];
            internas3 = [
                "../images/12-toneladas/climatizador.webp",
                "../images/12-toneladas/radio-touch-mp5.webp",
                "../images/12-toneladas/cabina.webp",
                "../images/12-toneladas/portavasos.webp"
            ];

            internas4 = [
                "../images/12-toneladas/climatizador.webp",
                "../images/12-toneladas/radio-touch-mp5.webp",
                "../images/12-toneladas/cabina.webp",
                "../images/12-toneladas/portavasos.webp"
            ];

            audio_motor = "../images/10-toneladas/motor.mp3"
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"


            break;

        //9 toneladas
        case "t7h":
            imagen = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            imagen2 = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            nombreSerie = "Serie T7H"
            nombreSerieInd = "T7H"
            series = [{
                serie: "T7H 390",
                modelo : "28 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T7H 390",
                modelo : "42 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "T7H 430",
                modelo : "45 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }]


            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHCR9T1167"
            console.log('9 toneladas')
            images = [
                "../images/9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador.webp",
                "../images/9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador-de-frente.webp"
            ];
     
            motor = "../images/9-toneladas/motor-sinotruk-de-camion-de-9-toneladas-ecuador.webp"
            garantia = "../images/9-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/9-toneladas/tecnologia-alemana.webp"
     
            cabina = "../images/9-toneladas/cabina-de-camion-de-9-toneladas-sinotruk.webp"
            marcas = "../images/9-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/9-toneladas/volante-deportivo-de-camion-de-9-toneladas.webp",
                "../images/9-toneladas/palanca-de-cambios-de-camion-de-9-toneladas.webp",
                "../images/9-toneladas/asiento-neumatico.webp",
                "../images/9-toneladas/eleva-vidrios-electricos.webp"
            ];
            internas2 = [
                "../images/9-toneladas/climatizador.webp",
                "../images/9-toneladas/radio-touch-mp5.webp",
                "../images/9-toneladas/cabina.webp",
                "../images/9-toneladas/portavasos.webp"
            ];
            internas3 = [
                "../images/12-toneladas/climatizador.webp",
                "../images/12-toneladas/radio-touch-mp5.webp",
                "../images/12-toneladas/cabina.webp",
                "../images/12-toneladas/portavasos.webp"
            ];

            internas4 = [
                "../images/12-toneladas/climatizador.webp",
                "../images/12-toneladas/radio-touch-mp5.webp",
                "../images/12-toneladas/cabina.webp",
                "../images/12-toneladas/portavasos.webp"
            ];

            audio_motor = "../images/9-toneladas/motor.mp3"
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            break;

        //12 toneladas
        case "c7h":
            console.log('12 toneladas')
            imagen = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            imagen2 = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            nombreSerie = "Serie C7H"
            nombreSerieInd = "C7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB12TT5G1167"

            series = [{
                serie: "C7H 1256",
                modelo : "20 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "C7H 540",
                modelo : "48 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }, {
                serie: "C7H 540 CATALINAS",
                modelo : "48 TON",
                url : "/camiones/camion-de-3-5-toneladas-1057"
            }]

            images = [
                "../images/12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador.webp",
                "../images/12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador-de-frente.webp"
            ];

            motor = "../images/12-toneladas/motor-sinotruk-de-camion-de-12-toneladas-ecuador.webp"
            garantia = "../images/12-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/12-toneladas/tecnologia-alemana.webp"
            
            cabina = "../images/12-toneladas/cabina-de-camion-de-12-toneladas-sinotruk.webp"
            marcas = "../images/12-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/12-toneladas/volante-deportivo-de-camion-de-12-toneladas.webp",
                "../images/12-toneladas/palanca-de-cambios-de-camion-de-12-toneladas.webp",
                "../images/12-toneladas/asiento-neumatico-dos.webp",
                "../images/12-toneladas/eleva-vidrios-electricos.webp",
                "../images/12-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                "../images/12-toneladas/climatizador.webp",
                "../images/12-toneladas/radio-touch-mp5.webp",
                "../images/12-toneladas/cabina.webp",
                "../images/12-toneladas/portavasos.webp"
            ];

            internas3 = [
                "../images/12-toneladas/climatizador.webp",
                "../images/12-toneladas/radio-touch-mp5.webp",
                "../images/12-toneladas/cabina.webp",
                "../images/12-toneladas/portavasos.webp"
            ];

            internas4 = [
                "../images/12-toneladas/climatizador.webp",
                "../images/12-toneladas/radio-touch-mp5.webp",
                "../images/12-toneladas/cabina.webp",
                "../images/12-toneladas/portavasos.webp"
            ];

            audio_motor = "../images/12-toneladas/motor.mp3"

            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            break;

        default:
            break;
    }

    let slide2 = internas1.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    let slide2b = internas2.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    let slide2c = internas3.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    let slide2d = internas4.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    // ---- PÁGINA ----
    return <>
        <Helmet>
            <title>{nombreSerie} - Vehicentro</title>
            <meta name="description" content={nombreSerie} />
        </Helmet>

        <NavBarTop />
        <div className="boxesIni posRelative content2">
            <div className="boxRight tecnologia">
                <img src={imagen} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxPlayerMotor ">
                    <audio id="audioMotor" controls type="audio/mpeg"></audio>
                </div>
            </div>
        </div>
        <div className="boxesIni posRelative content2">
            
            <div className="boxRight nomSeries">
                <div className="serieTitle serieBox">
                    <p className="serieTitle1">SERIE</p>
                    <p>{nombreSerieInd}</p>
                </div> 
                <div className="serieList serieBox">
                    {series.map((item, index) => (
                        <NavLink className="serieContainer" to={item.url}>
                            <p className="nombreSerie">
                            {item.serie}
                            </p>
                            <span className="modeloSerie">
                            {item.modelo}    
                            </span>
                        </NavLink>
                    ))}
                </div>
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={imagen2} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
            </div>
        </div>
        <div className="serieMarcas marcasbg textoImagenesProducto" >

            <div className="boxRightHeader  half icon_center" >
                <div className="banner"><img src={tecnologia} /></div>
            </div>

            <div className="boxRightHeader  half text_icon_center" >
                <p className='vidaUtil'>{contenedorVidaUtil}</p>
            </div>

            <div className="boxRightHeader  half icon_right">
                <div className="banner"><img src={garantia} /></div>
            </div>

        </div>
        <div className="marcasSeries">
            <img src="../images/marcasSeries.png" alt="Marcas Series" width="1532"  height="355" />
        </div>
        
        <div className="boxesIni posRelative">
            <div className="marcasbg">
                <img src={cabina} width="1500" height="1500" className="slideMain" alt="Punto de Venta" />
            </div>

            <div className="marcasbg" style={{ display: `flex`, 'flexWrap': `wrap` }}>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    <Fade >
                        {slide2}
                    </Fade>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                    <Fade >
                        {slide2b}
                    </Fade>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                    <Fade >
                        {slide2c}
                    </Fade>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                    <Fade >
                        {slide2d}
                    </Fade>
                </div>
            </div>
        </div>

        <div className="boxesIni posRelative centrado">
            <div className="centrado">
                <img src={imagen} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
            </div>
            <div>
                <FormContact url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
            </div>
        </div>
        <BannerContacto url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} />
        <Footer />

        {modalFormIsOpen &&
            <FormContactFicha url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
        }
    </>
}

export default Serie