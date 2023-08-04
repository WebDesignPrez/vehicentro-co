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
import env from '../config';
let urlMedia = env.url

let imagen
let imagen2
let images
let series
let nombreSerieInd
let motor
let video

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
let desx
function Serie() {
    const [modalFormIsOpen, setFormIsOpen] = useState(false);
    const [selectedSeries, setSelectedSeries] = useState(null);


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


    function openFormContact(selectedSeries) {
        setSelectedSeries(selectedSeries); // Set the selected series data
        setFormIsOpen(true); // Open the form popup
      }

    function closeFormContact() {
        setFormIsOpen(false)
    }

    //Comparacion paginas
    switch ((useParams("id").id)) {

        //t5g
        case "t5g":
            video = urlMedia + "t5g/video.mp4"
            imagen = urlMedia + "t5g/contacto.webp"
            imagen2 = urlMedia + "t5g/camion.webp"
            motor = urlMedia + "t5g/motor.webp"
            nombreSerie = "Serie T5G"
            nombreSerieInd = "T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIET5G"
            series = [{
                serie: "CAMION T5G",
                modelo: "250HP 17000",
                url: "/camiones/camion-de-9-toneladas",
                nombreCamion: "CAMION T5G 250HP 17000",
                camionSerie: "T5G 250HP 17000",
                nombreSerie: "Serie T5G",
                bdc: "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G17000"

            }, {
                serie: "CAMION T5G",
                modelo: "250HP 17000 AMT",
                url: "/camiones/camion-10-toneladas-t5g-1167",
                nombreCamion: "CAMION T5G 250HP 17000 AMT",
                camionSerie: "T5G 250HP 17000 AMT",
                nombreSerie: "Serie T5G",
                bdc: "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G17000AMT"
            }, {
                serie: "MINIMULA T5G",
                modelo: "350HP 40500",
                url: "/camiones/camion-12-toneladas-t5g-1167",
                nombreCamion: "MINIMULA T5G 350HP 40500",
                camionSerie: "T5G 350HP 40500",
                nombreSerie: "Serie T5G",
                bdc: "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G40500"
    
            }, {
                serie: "MINIMULA T5G",
                modelo: "350HP 40500 AMT",
                url: "/camiones/camion-13-toneladas-t5g-1167",
                nombreCamion: "MINIMULA T5G 350HP 40500 AMT",
                camionSerie: "T5G 350HP 40500 AMT",
                nombreSerie: "Serie T5G",
                bdc: "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G40500AMT"
            }]

            images = [
                urlMedia + "10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador.webp",
                urlMedia + "10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador-de-frente.webp"
            ];

            garantia = urlMedia + "10-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "10-toneladas/tecnologia-alemana.webp"

            cabina = urlMedia + "10-toneladas/cabina-de-camion-de-10-toneladas-sinotruk.webp"
            marcas = urlMedia + "10-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "10-toneladas/volante-deportivo-de-camion-de-10-toneladas.webp",
                urlMedia + "10-toneladas/palanca-de-cambios-de-camion-de-10-toneladas.webp",
                urlMedia + "10-toneladas/asiento-neumatico-dos.webp"
            ];
            internas2 = [
                urlMedia + "10-toneladas/climatizador.webp",
                urlMedia + "10-toneladas/radio-touch-mp5.webp"
            ];
            internas3 = [
                urlMedia + "10-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "10-toneladas/radio-touch-mp5.webp"
            ];

            internas4 = [
                urlMedia + "10-toneladas/cabina.webp",
                urlMedia + "10-toneladas/portavasos.webp"
            ];

            audio_motor = urlMedia + "10-toneladas/motor.mp3"
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            desx = "Aumenta la rentabilidad de tu negocio y reduce el costo de mantenimiento con los camiones T5G. Pura eficiciencia y garantía."

            break;

        //t7h
        case "t7h":
            video = urlMedia + "t7h/video.mp4"
            imagen = urlMedia + "t7h/contacto.webp"
            imagen2 = urlMedia + "t7h/camion.webp"
            motor = urlMedia + "t7h/motor.webp"
            nombreSerie = "Serie T7H"
            nombreSerieInd = "T7H"
            series = [{
                serie: "SUPER MINIMULA",
                modelo: "T7H 400HP 40500",
                url: "/cabezales/cabezal-t7h-390-28-toneladas",
                nombreCamion: "SUPER MINIMULA T7H 400HP 40500",
                camionSerie: "T7H 400HP 40500",
                nombreSerie: "Serie T7H",
                bdc: "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT7H40500"

            }, {
                serie: "SUPER MINIMULA",
                modelo: "T7H 400HP 40500 AMT",
                url: "/cabezales/cabezal-t7h-390-42-toneladas",
                nombreCamion: "SUPER MINIMULA T7H 400HP 40500 AMT",
                camionSerie: "T7H 400HP 40500 AMT",
                nombreSerie: "Serie T7H",
                bdc: "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT7H40500AMT"
            }]


            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIET7H"
            console.log('9 toneladas')
            images = [
                urlMedia + "9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador.webp",
                urlMedia + "9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador-de-frente.webp"
            ];

            garantia = urlMedia + "9-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "9-toneladas/tecnologia-alemana.webp"

            cabina = urlMedia + "9-toneladas/cabina-de-camion-de-9-toneladas-sinotruk.webp"
            marcas = urlMedia + "9-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "45-toneladas/volante-deportivo.webp",
                urlMedia + "45-toneladas/pantalla-android.webp",
                urlMedia + "45-toneladas/palanca.webp"
            ];
            internas2 = [
                urlMedia + "45-toneladas/computadora-bosch.webp",
                urlMedia + "45-toneladas/wabco-dos.webp"
            ];
            internas3 = [
                urlMedia + "45-toneladas/uneta.webp",
                urlMedia + "45-toneladas/wabco.webp"
            ];

            internas4 = [
                urlMedia + "45-toneladas/bloqueo.webp",
                urlMedia + "45-toneladas/control-hidraulico.webp"
            ];

            audio_motor = urlMedia + "9-toneladas/motor.mp3"
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            desx = "Conoce la Serie T7H. Camiones #Sinotruk con carga de alto rendimiento. ¡Somos la potencia que levanta al Ecuador!"

            break;

        //c7h
        case "c7h":
            console.log('12 toneladas')
            video = urlMedia + "c7h/video.mp4"
            imagen = urlMedia + "c7h/contacto.webp"
            imagen2 = urlMedia + "c7h/camion.webp"
            motor = urlMedia + "c7h/motor.webp"
            nombreSerie = "Serie C7H"
            nombreSerieInd = "C7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBVHSERIEC7H"

            series = [{
                serie: "TRACTO MULA",
                modelo: "C7H 540HP 52000 AMT",
                url: "/camiones/camion-20-toneladas-1256",
                nombreCamion: "TRACTO MULA C7H 540HP 52000 AMT",
                camionSerie: "C7H 540HP 52000 AMT",
                nombreSerie: "Serie C7H",
                bdc: "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOC7H52000AMT"
            }]


            garantia = urlMedia + "12-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "12-toneladas/tecnologia-alemana.webp"

            cabina = urlMedia + "20-toneladas/cabina-de-camion-de-20-toneladas-sinotruk.webp"
            marcas = urlMedia + "20-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "20-toneladas/palanca-de-cambios.webp",
                urlMedia + "20-toneladas/litera-de-descanso.webp",
                urlMedia + "20-toneladas/asiento-neumatico.webp"
            ];
            internas2 = [
                urlMedia + "20-toneladas/volante-deportivo.webp",
                urlMedia + "20-toneladas/radio-touch-mp5.webp",
                urlMedia + "20-toneladas/componentes-wabco.webp"

            ];
            internas3 = [
                urlMedia + "20-toneladas/comportamiento-en-el-panel.webp",
                urlMedia + "20-toneladas/climatizador-y-mandos.webp"
            ];

            internas4 = [
                urlMedia + "20-toneladas/retardador.webp",
                urlMedia + "20-toneladas/bodega.webp"
            ];

            audio_motor = urlMedia + "12-toneladas/motor.mp3"

            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            desx = "Conoce la Serie T7H. Camiones #Sinotruk con carga de alto rendimiento. ¡Somos la potencia que levanta al Ecuador!"
            
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
            <title>Camiones {nombreSerie} | Vehicentro</title>
            <meta name="description" content={desx} />
            <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador"></meta>
            <meta name="robots" content="index, follow"></meta>
        </Helmet>

        <NavBarTop />
        <div className="boxesIni posRelative content2 fondonegro">
            <div className="boxRight">
                <div className="boxLeft c7h">
                    <video width="320" height="240" autoPlay={true} preload="none" playsInline={true} controls loop muted src={video} className="videoWidth" />
                </div>
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxPlayerMotor ">
                    <audio id="audioMotor" controls type="audio/mpeg"></audio>
                </div>
            </div>
        </div>
        <div className="boxesIni posRelative content2 fondonegro">

            <div className="boxRight nomSeries">

                <div className="serieTitle serieBox">


                    <p className="serieTitle1">SERIE</p>
                    <p>{nombreSerieInd}</p>
                </div>
                <div className="serieList serieBox">
                    {series.map((item, index) => (
                        <a
                        className="serieContainer"
                        onClick={() => {
                          openFormContact(item); // Pass the item (selected series) to the function
                        }}
                      >
                        <p className="nombreSerie">{item.serie}</p>
                        <span className="modeloSerie">{item.modelo}</span>
                      </a>
                    ))}
                </div>
            </div>
            {/* Garantias celular */}
            <div className="boxRight nomSeries responsive">

                <div className="serieTitle serieBox seriecompletomovil">

                    <img src={urlMedia + "home/logo-negro-tecnologia-alemana.webp"} width="590" height="170" alt="Tecnologia Alemana" />

                    <p className="serieTitle1">Vida útil de más de 1.5 MILLONES de kilómetros
                    </p>

                    <img src={urlMedia + "9-toneladas/5-anos-de-garantia.webp"} width="590" height="170" alt="Tecnologia Alemana" />
                </div>

            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={imagen2} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
            </div>
        </div>
        <div className="marcasSeries fondonegro">
            <img src={urlMedia + "marcasSeries.webp"} alt="Marcas Series" width="1532" height="355" />
        </div>

        {/* <div className="boxesIni posRelative fondonegro">
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
        </div> */}

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

        {modalFormIsOpen && selectedSeries && (
        <FormContactFicha
          url={selectedSeries.bdc}
          camion={selectedSeries.nombreCamion}
          serie={selectedSeries.nombreSerie}
          camionSerie={selectedSeries.camionSerie}
          close={closeFormContact}
        />
      )}
    </>
}

export default Serie