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
import env from '../config';
import precios from '../precios';

let imagen
let images
let motor
let caracteristicas
let cabina
let marcas
let internas1
let internas2
let internas1b
let internas2b
let internas
let medidas
let medidasMovil
let audio_motor
let garantia
let textoMotor1
let textoMotor2
let textoMotor3
let precio
let contenedorMarcas
let tecnologia
let slide3
let slide3b
let contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
let nombreCamion
let bdc
let bdcFicha = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOBOTONCOT"
let nombreSerie
let camionSerie
let cuotas
let urlMedia = env.url

function Camion() {

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
        case "camion-40500-AMT":
        
        nombreCamion = "Cabezal 40500"
        camionSerie = "T5G 350HP 40500 AMT"
        nombreSerie = "Serie T5G"
        bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G40500AMT"
        images = [
            urlMedia + "19-toneladas/19tonHeroR.jpeg",
            urlMedia + "19-toneladas/camion-amarillo-sinotruk-de-19-toneladas-ecuador.webp"
        ];
        textoMotor1 = "350 HP"
        textoMotor2 = "MINIMULA T5G 40500"
        textoMotor3 = "Ficha técnica"
        precio = precios.d_nueve
        cuotas = `Cuotas desde: ${precios.d_nueve_cuota}`
        motor = urlMedia + "19-toneladas/motor-sinotruk-de-camion-de-19-toneladas-ecuador.webp"
        garantia = urlMedia + "19-toneladas/5-anos-de-garantia.webp"
        tecnologia = urlMedia + "19-toneladas/tecnologia-alemana.webp"
        caracteristicas = [
            urlMedia + "19-toneladas/camion-de-19-toneladas-potencia-340hp.webp",
            urlMedia + "19-toneladas/camion-de-19-toneladas-6-cilindros-en-linea.webp",
            urlMedia + "19-toneladas/camion-de-19-toneladas-freno-a-las-valvulas.webp",
            urlMedia + "19-toneladas/camion-de-19-toneladas-inyeccion-common-rail.webp"
        ]
        cabina = urlMedia + "19-toneladas/cabina-de-camion-de-19-toneladas-sinotruk.webp"
        marcas = urlMedia + "19-toneladas/marcas-vehicentro.webp"
        internas1 = [
            urlMedia + "19-toneladas/volante-deportivo-de-camion-de-19-toneladas.webp",
            urlMedia + "19-toneladas/palanca-de-cambios-de-camion-de-19-toneladas.webp",
            urlMedia + "19-toneladas/asiento-neumatico.webp",
            urlMedia + "19-toneladas/eleva-vidrios-electricos.webp",
            urlMedia + "19-toneladas/radio-touch-mp5.webp"
        ];
        internas2 = [
            urlMedia + "19-toneladas/climatizador.webp",
            urlMedia + "19-toneladas/radio-touch-mp5.webp",
            urlMedia + "19-toneladas/cabina.webp",
            urlMedia + "19-toneladas/portavasos.webp"
        ];
        medidas = urlMedia + "19-toneladas/dimensiones-de-camion-de-19-toneladas-sinotruk.webp"
        medidasMovil = urlMedia + "19-toneladas/dimensiones-de-camion-de-19-toneladas-sinotruk-responsive.webp"
        audio_motor = urlMedia + "19-toneladas/motor.mp3"

        internas = internas1.concat(internas2)
        contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
        contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
            <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
        </div>


            break;

        //9 toneladas
        case "camion-40500":
            nombreCamion = "Cabezal 40500"
            camionSerie = "T5G 350HP 40500"
            nombreSerie = "Serie T5G"
            bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G40500"
            images = [
                urlMedia + "19-toneladas/19tonHeroR.jpeg",
                urlMedia + "19-toneladas/camion-amarillo-sinotruk-de-19-toneladas-ecuador.webp"
            ];
            textoMotor1 = "350 HP"
            textoMotor2 = "MINIMULA T5G 40500"
            textoMotor3 = "Ficha técnica"
            precio = precios.d_nueve
            cuotas = `Cuotas desde: ${precios.d_nueve_cuota}`
            motor = urlMedia + "19-toneladas/motor-sinotruk-de-camion-de-19-toneladas-ecuador.webp"
            garantia = urlMedia + "19-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "19-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "19-toneladas/camion-de-19-toneladas-potencia-340hp.webp",
                urlMedia + "19-toneladas/camion-de-19-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "19-toneladas/camion-de-19-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "19-toneladas/camion-de-19-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "19-toneladas/cabina-de-camion-de-19-toneladas-sinotruk.webp"
            marcas = urlMedia + "19-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "19-toneladas/volante-deportivo-de-camion-de-19-toneladas.webp",
                urlMedia + "19-toneladas/palanca-de-cambios-de-camion-de-19-toneladas.webp",
                urlMedia + "19-toneladas/asiento-neumatico.webp",
                urlMedia + "19-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "19-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "19-toneladas/climatizador.webp",
                urlMedia + "19-toneladas/radio-touch-mp5.webp",
                urlMedia + "19-toneladas/cabina.webp",
                urlMedia + "19-toneladas/portavasos.webp"
            ];
            medidas = urlMedia + "19-toneladas/dimensiones-de-camion-de-19-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "19-toneladas/dimensiones-de-camion-de-19-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "19-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>
            break;

        //12 toneladas
        case "camion-17000":
            console.log('camion-17000')
            nombreCamion = "Camión 17000"
            camionSerie = "T5G 250HP 17000"
            nombreSerie = "Serie T5G"
            bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G17000"
            images = [
                urlMedia + "12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador.webp",
                urlMedia + "12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador-de-frente.webp"
            ];
            textoMotor1 = "250 HP"
            textoMotor2 = "T5G 17000"
            textoMotor3 = "Ficha técnica"
            precio = precios.doce
            cuotas = `Cuotas desde: ${precios.doce_cuota}`
            motor = urlMedia + "12-toneladas/motor-sinotruk-de-camion-de-12-toneladas-ecuador.webp"
            garantia = urlMedia + "12-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "12-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "12-toneladas/camion-de-12-toneladas-potencia-240hp.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "12-toneladas/cabina-de-camion-de-12-toneladas-sinotruk.webp"
            marcas = urlMedia + "12-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "12-toneladas/volante-deportivo-de-camion-de-12-toneladas.webp",
                urlMedia + "12-toneladas/palanca-de-cambios-de-camion-de-12-toneladas.webp",
                urlMedia + "12-toneladas/asiento-neumatico-dos.webp",
                urlMedia + "12-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "12-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "12-toneladas/climatizador.webp",
                urlMedia + "12-toneladas/radio-touch-mp5.webp",
                urlMedia + "12-toneladas/cabina.webp",
                urlMedia + "12-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "12-toneladas/dimensiones-de-camion-de-12-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "12-toneladas/dimensiones-de-camion-de-12-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "12-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>
            break;

        //13 toneladas
        case "camion-17000-AMT":
            console.log('camion-17000-AMT')
            nombreCamion = "Camión 17000-AMT"
            camionSerie = "T5G 250HP 17000 AMT"
            nombreSerie = "Serie T5G"
            bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOT5G17000AMT"
            images = [
                urlMedia + "12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador.webp",
                urlMedia + "12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador-de-frente.webp"
            ];
            textoMotor1 = "250 HP"
            textoMotor2 = "T5G 17000 AMT"
            textoMotor3 = "Ficha técnica"
            precio = precios.doce
            cuotas = `Cuotas desde: ${precios.doce_cuota}`
            motor = urlMedia + "12-toneladas/motor-sinotruk-de-camion-de-12-toneladas-ecuador.webp"
            garantia = urlMedia + "12-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "12-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "12-toneladas/camion-de-12-toneladas-potencia-240hp.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "12-toneladas/camion-de-12-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "12-toneladas/cabina-de-camion-de-12-toneladas-sinotruk.webp"
            marcas = urlMedia + "12-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "12-toneladas/volante-deportivo-de-camion-de-12-toneladas.webp",
                urlMedia + "12-toneladas/palanca-de-cambios-de-camion-de-12-toneladas.webp",
                urlMedia + "12-toneladas/asiento-neumatico-dos.webp",
                urlMedia + "12-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "12-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "12-toneladas/climatizador.webp",
                urlMedia + "12-toneladas/radio-touch-mp5.webp",
                urlMedia + "12-toneladas/cabina.webp",
                urlMedia + "12-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "12-toneladas/dimensiones-de-camion-de-12-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "12-toneladas/dimensiones-de-camion-de-12-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "12-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //3.5 toneladas
        case "FRS":
            console.log('FRS')
            nombreCamion = "FRS"
            camionSerie = "FRS 170HP 10500"
            nombreSerie = "Serie 100"
            bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCOFRS"
            images = [
                urlMedia + "8-toneladas/camion-blanco-sinotruk-de-8-toneladas-ecuador.webp",
                urlMedia + "8-toneladas/camion-blanco-sinotruk-de-8-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "170 HP"
            textoMotor2 = "Camión FRS 10500"
            textoMotor3 = "Ficha técnica"
            precio = precios.ocho
            cuotas = `Cuotas desde: ${precios.ocho_cuota}`
            motor = urlMedia + "8-toneladas/motor-sinotruk-de-camion-de-8-toneladas-ecuador.webp"
            garantia = urlMedia + "8-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "8-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "8-toneladas/camion-de-8-toneladas-potencia-180hp.webp",
                urlMedia + "8-toneladas/camion-de-8-toneladas-cilindraje.webp",
                urlMedia + "8-toneladas/camion-de-8-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "8-toneladas/inyeccion.webp"
            ]
            cabina = urlMedia + "8-toneladas/cabina-de-camion-de-8-toneladas-sinotruk.webp"
            marcas = urlMedia + "8-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "8-toneladas/palanca-de-cambios.webp",
                urlMedia + "8-toneladas/volante-deportivo.webp",
                urlMedia + "8-toneladas/radio-mp5.webp",
                urlMedia + "8-toneladas/cabina-amplia.webp"
            ];
            internas2 = [
                urlMedia + "8-toneladas/mandos-al-volante.webp",
                urlMedia + "8-toneladas/vidrios-amplios.webp",
                urlMedia + "8-toneladas/bloqueo.webp"
            ];
            medidas = urlMedia + "8-toneladas/dimensiones-de-camion-de-8-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "8-toneladas/dimensiones-de-camion-de-8-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "8-toneladas/motor.mp3"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            break;

        //3.6 toneladas
        case "NQS":
            console.log('NQS')
            nombreCamion = "NQS"
            camionSerie = "NQS 156HP 9900"
            nombreSerie = "Serie 100"
            bdc = "https://bdcco.vehicentro.com:8443/ords/ws_vehicentro/api/conexiones/web/WEBVHCONQS"
            images = [
                urlMedia + "6-toneladas/camion-blanco-sinotruk-de-6-toneladas-ecuador.webp",
                urlMedia + "6-toneladas/camion-blanco-sinotruk-de-6-toneladas-de-frente-ecuador.webp"

            ];
            textoMotor1 = "156 HP"
            textoMotor2 = "Camión NQS 9900"
            textoMotor3 = "Ficha técnica"
            precio = precios.seis
            cuotas = `Cuotas desde: ${precios.seis_cuota}`
            motor = urlMedia + "6-toneladas/motor-sinotruk-de-camion-de-6-toneladas-ecuador.webp"
            garantia = urlMedia + "6-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "serie-100/serie100Solos.webp"

            caracteristicas = [
                urlMedia + "6-toneladas/camion-de-6-toneladas-potencia-154hp.webp",
                urlMedia + "6-toneladas/camion-de-6-toneladas-cilindraje.webp",
                urlMedia + "6-toneladas/camion-de-6-toneladas-freno-de-aire.webp",
                urlMedia + "6-toneladas/camion-de-6-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "6-toneladas/cabina-de-camion-de-6-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "6-toneladas/palanca-de-cambios.webp",
                urlMedia + "6-toneladas/Mandos-al-volante.webp",
                urlMedia + "6-toneladas/vidrios-electricos.webp"
            ];
            internas2 = [
                urlMedia + "6-toneladas/frenos-de-aire.webp",
                urlMedia + "6-toneladas/bloqueo.webp"
            ];
            internas1b = [
                urlMedia + "6-toneladas/tablero-con-pantalla.webp",
                urlMedia + "6-toneladas/ventilacion.webp"
            ];
            internas2b = [
                urlMedia + "6-toneladas/radio-android-con-icar.webp",
                urlMedia + "6-toneladas/Litera.webp"
            ];
            medidas = urlMedia + "6-toneladas/dimensiones-de-camion-de-6-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "6-toneladas/dimensiones-de-camion-de-6-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "6-toneladas/motor.mp3"


            internas = ((internas1.concat(internas2)).concat(internas1b)).concat(internas2b)
            //loop slider

            slide3 = internas1b.map((interna) =>
                <div className="each-slide-effect" >
                    <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
                    </div>
                </div>
            );

            slide3b = internas2b.map((interna) =>
                <div className="each-slide-effect" >
                    <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
                    </div>
                </div>
            );

            contenedorMarcas = <div style={{ display: `contents` }} >
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    <Fade >
                        {slide3}
                    </Fade>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    <Fade >
                        {slide3b}
                    </Fade>
                </div>
            </div>

            contenedorVidaUtil = "Disponible con caja Eaton"

            break;
        default:
            break;
    }




    switch ((useParams("id").id)) {

        case "camion-de-3-5-toneladas-1057":
            imagen = urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-de-3-6-toneladas":
            imagen = urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-de-5-toneladas-1067":
            imagen = urlMedia + "5-toneladas/camion-de-5-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "NQS":
            imagen = urlMedia + "6-toneladas/camion-de-6-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "FRS":
            imagen = urlMedia + "8-toneladas/camion-de-8-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-de-9-toneladas":
            imagen = urlMedia + "9-toneladas/camion-de-9-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-10-toneladas-t5g-1167":
            imagen = urlMedia + "10-toneladas/camion-de-10-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-17000":
            imagen = urlMedia + "12-toneladas/camion-de-12-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-13-toneladas-t5g-1167":
            imagen = urlMedia + "13-toneladas/camion-de-13-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-13-toneladas-t5g-1167-330hp":
            imagen = urlMedia + "13-toneladas-330/camion-de-13-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-de-18-toneladas-t5g-1257":
            imagen = urlMedia + "18-toneladas/camion-de-18-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-40500":
            imagen = urlMedia + "19-toneladas/camion-de-19-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "camion-40500-amt":
            imagen = urlMedia + "19-toneladas/camion-de-19-toneladas-en-la-carretera-sinotruk.webp"
            break;

        default:
            break;
    }


    //loop primer slide
    let slide1 = images.map((image) =>
        <div className="each-slide-effect">
            <div style={{ 'backgroundImage': `url(${image})`, height: `41vw` }}>
            </div>
        </div>
    );
    //loop segundo slide

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
    //loop slide movil
    let slide2c = internas.map((interna) =>
        <div className="each-slide-effect" >
            <div style={{ 'backgroundImage': `url(${interna})`, height: `25vw` }}>
            </div>
        </div>
    );

    // ---- PÁGINA ----
    return <>
        <Helmet>
            <title>{nombreCamion} - Vehicentro</title>
            <meta name="description" content={'Venta del ' + nombreCamion + ' Sinotruk de la ' + nombreSerie + ' en Ecuador'} />
            <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador"></meta>
            <meta name="robots" content="index, follow"></meta>
        </Helmet>
        <NavBarTop />
        <div className="boxesIni posRelative content2">
            <div className="boxRight">
                {images.length > 1 &&
                    <Slide>
                        {slide1}
                    </Slide>
                }
                {images.length == 1 &&
                    <img src={images[0]} alt="" />
                }
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxText flex-table row textoSobrepuesto">
                    <div onClick={openFormContact} className="flex-row textoMotor1">{textoMotor1}</div>
                    <div onClick={openFormContact} className="flex-row textoMotor2"><h1>{`${textoMotor2}`}</h1></div>
                    <div onClick={openFormContact} className="flex-row textoMotor3">{textoMotor3}</div>
                    <div onClick={openFormContact} className="flex-row textoMotorFlecha"><img src={urlMedia + "arrow-rojo.png"} alt="arrow" /></div>
                    <div onClick={openFormContact} className="flex-row textoMotor4">Escucha tu motor</div>
                </div>
                <div className="boxPlayerMotor ">
                    <audio id="audioMotor" controls type="audio/mpeg"></audio>
                </div>
            </div>

        </div>

        <div className="contentProduct">

            <div className="marcasbg textoImagenesProducto" >

                <div className="boxRightHeader  half text_icon_left" >
                    <p className='vidaUtil'>DESDE</p>
                    <p className='precioCamiones' >{precio}</p>
                    <p className='cuotas'>{cuotas}</p>
                </div>

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


            <div className="boxesIni posRelative partesbg">

                <div className="caracteristicasProductos" >
                    <img src={caracteristicas[0]} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>

                <div className="caracteristicasProductos" >
                    <img src={caracteristicas[1]} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>

                <div className="caracteristicasProductos" >
                    <img src={caracteristicas[2]} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>

                <div className="caracteristicasProductos" >
                    <img src={caracteristicas[3]} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                </div>

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
                    <div className="boxRightHeader  half responsive" style={{ width: `100%` }} >
                        <Fade >
                            {slide2c}
                        </Fade>
                    </div>
                    {contenedorMarcas}

                </div>


            </div>
            <div className="bannerMedidas noResponsive"><img src={medidas} /></div>
            <div className="bannerMedidas responsive"><img src={medidasMovil} /></div>
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
            <FormContactFicha url={bdcFicha} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
        }
    </>
}

export default Camion