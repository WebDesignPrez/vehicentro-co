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
let bdcFicha = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEBFICHTEC"
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
        case "10-ton":
            nombreCamion = "Camion de 10 toneladas | T5G-1167"
            camionSerie = "T5G 1167 / 10 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO10TON"
            console.log('10 Toneladas')
            images = [
                urlMedia + "10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador.webp",
                urlMedia + "10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador-de-frente.webp"
            ];
            textoMotor1 = "240 HP"
            textoMotor2 = "Modelo T5G-1167 - 10 Ton"
            textoMotor3 = "Ficha Técnica"
            precio = precios.diez
            cuotas = `Cuotas desde: ${precios.diez_cuota}`
            motor = urlMedia + "10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            garantia = urlMedia + "10-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "10-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "10-toneladas/camion-de-10-toneladas-potencia-240hp.webp",
                urlMedia + "10-toneladas/camion-de-10-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "10-toneladas/camion-de-10-toneladas-freno-a-camion-de-10-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "10-toneladas/camion-de-10-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "10-toneladas/cabina-de-camion-de-10-toneladas-sinotruk.webp"
            marcas = urlMedia + "10-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "10-toneladas/volante-deportivo-de-camion-de-10-toneladas.webp",
                urlMedia + "10-toneladas/palanca-de-cambios-de-camion-de-10-toneladas.webp",
                urlMedia + "10-toneladas/asiento-neumatico-dos.webp",
                urlMedia + "10-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "10-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "10-toneladas/climatizador.webp",
                urlMedia + "10-toneladas/radio-touch-mp5.webp",
                urlMedia + "10-toneladas/cabina.webp",
                urlMedia + "10-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "10-toneladas/dimensiones-de-camion-de-10-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "10-toneladas/dimensiones-de-camion-de-10-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "10-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>


            break;

        //9 toneladas
        case "9-ton":
            nombreCamion = "Camion de 9 toneladas | T5G-1167"
            camionSerie = "T5G 1167 / 9 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO9TON"
            console.log('9 toneladas')
            images = [
                urlMedia + "9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador.webp",
                urlMedia + "9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador-de-frente.webp"
            ];
            textoMotor1 = "210 HP"
            textoMotor2 = "Modelo T5G-1167 - 9 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.nueve
            cuotas = `Cuotas desde: ${precios.nueve_cuota}`
            motor = urlMedia + "9-toneladas/motor-sinotruk-de-camion-de-9-toneladas-ecuador.webp"
            garantia = urlMedia + "9-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "9-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "9-toneladas/camion-de-9-toneladas-potencia-210hp.webp",
                urlMedia + "9-toneladas/camion-de-9-toneladas-4-cilindros-en-linea.webp",
                urlMedia + "9-toneladas/camion-de-9-toneladas-freno-a-camion-de-10-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "9-toneladas/camion-de-9-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "9-toneladas/cabina-de-camion-de-9-toneladas-sinotruk.webp"
            marcas = urlMedia + "9-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "9-toneladas/volante-deportivo-de-camion-de-9-toneladas.webp",
                urlMedia + "9-toneladas/palanca-de-cambios-de-camion-de-9-toneladas.webp",
                urlMedia + "9-toneladas/asiento-neumatico.webp",
                urlMedia + "9-toneladas/eleva-vidrios-electricos.webp"
            ];
            internas2 = [
                urlMedia + "9-toneladas/climatizador.webp",
                urlMedia + "9-toneladas/radio-touch-mp5.webp",
                urlMedia + "9-toneladas/cabina.webp",
                urlMedia + "9-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "9-toneladas/dimensiones-de-camion-de-9-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "9-toneladas/dimensiones-de-camion-de-9-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "9-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //12 toneladas
        case "12-ton":
            console.log('12 toneladas')
            nombreCamion = "Camion de 12 toneladas | T5G-1167"
            camionSerie = "T5G 1167 / 12 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO12TON"
            images = [
                urlMedia + "12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador.webp",
                urlMedia + "12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador-de-frente.webp"
            ];
            textoMotor1 = "240 HP"
            textoMotor2 = "Modelo T5G-1167 - 12 Ton"
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
        case "13-ton":
            console.log('13 toneladas')
            nombreCamion = "Camion de 13 toneladas | T5G-1167"
            camionSerie = "T5G 1167 / 13 TON (280HP)"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO13TON280"
            images = [
                urlMedia + "13-toneladas/camion-blanco-sinotruk-de-13-toneladas-ecuador.webp",
                urlMedia + "13-toneladas/camion-blanco-sinotruk-de-13-toneladas-ecuador-de-frente.webp"
            ];
            textoMotor1 = "280 HP"
            textoMotor2 = "Modelo T5G-1167 - 13 Ton"
            textoMotor3 = "Ficha Técnica"
            precio = precios.trece
            cuotas = `Cuotas desde: ${precios.trece_cuota}`
            motor = urlMedia + "13-toneladas/motor-sinotruk-de-camion-de-13-toneladas-ecuador.webp"
            garantia = urlMedia + "13-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "13-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "13-toneladas/camion-de-13-toneladas-potencia-280hp.webp",
                urlMedia + "13-toneladas/camion-de-13-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "13-toneladas/camion-de-13-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "13-toneladas/camion-de-13-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "13-toneladas/cabina-de-camion-de-13-toneladas-sinotruk.webp"
            marcas = urlMedia + "13-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "13-toneladas/volante-deportivo-de-camion-de-13-toneladas.webp",
                urlMedia + "13-toneladas/palanca-de-cambios-de-camion-de-13-toneladas.webp",
                urlMedia + "13-toneladas/asiento-neumatico.webp",
                urlMedia + "13-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "13-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "13-toneladas/climatizador.webp",
                urlMedia + "13-toneladas/radio-touch-mp5.webp",
                urlMedia + "13-toneladas/cabina.webp",
                urlMedia + "13-toneladas/portavasos.webp"
            ];

            medidas = urlMedia + "13-toneladas/dimensiones-de-camion-de-13-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "13-toneladas/dimensiones-de-camion-de-13-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "13-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //13 toneladas 330hp
        case "13-ton-330":
            console.log('13 toneladas 330Hp')
            nombreCamion = "Camion de 13 toneladas 330Hp | T5G-1167"
            camionSerie = "T5G 1167 / 13 TON (330HP)"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO13TON330"
            images = [
                urlMedia + "13-toneladas-330/camion-blanco-sinotruk-de-13-toneladas-ecuador.webp",
                urlMedia + "13-toneladas-330/camion-blanco-sinotruk-de-13-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "330 HP"
            textoMotor2 = "Modelo T5G-1167 - 13 Ton"
            textoMotor3 = "Ficha Técnica"
            precio = precios.trece_330
            cuotas = `Cuotas desde: ${precios.trece_330_cuota}`
            motor = urlMedia + "13-toneladas-330/motor-sinotruk-de-camion-de-13-toneladas-ecuador.webp"
            garantia = urlMedia + "13-toneladas-330/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "13-toneladas-330/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "13-toneladas-330/camion-de-13-toneladas-potencia-330hp.webp",
                urlMedia + "13-toneladas-330/camion-de-13-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "13-toneladas-330/camion-de-13-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "13-toneladas-330/camion-de-13-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "13-toneladas-330/cabina-de-camion-de-13-toneladas-sinotruk.webp"
            marcas = urlMedia + "13-toneladas-330/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "13-toneladas-330/volante-deportivo-de-camion-de-13-toneladas.webp",
                urlMedia + "13-toneladas-330/palanca-de-cambios-de-camion-de-13-toneladas.webp",
                urlMedia + "13-toneladas-330/asiento-neumatico.webp",
                urlMedia + "13-toneladas-330/eleva-vidrios-electricos.webp",
                urlMedia + "13-toneladas-330/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "13-toneladas-330/climatizador.webp",
                urlMedia + "13-toneladas-330/radio-touch-mp5.webp",
                urlMedia + "13-toneladas-330/cabina.webp",
                urlMedia + "13-toneladas-330/portavasos.webp"
            ];
            medidas = urlMedia + "13-toneladas-330/dimensiones-de-camion-de-13-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "13-toneladas-330/dimensiones-de-camion-de-13-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "13-toneladas-330/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //18 toneladas
        case "18-ton":
            console.log('18 toneladas')
            nombreCamion = "Camion de 18 toneladas | T5G-1257"
            camionSerie = "T5G 1257 / 18 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO18TON"
            images = [
                urlMedia + "18-toneladas/camion-blanco-sinotruk-de-18-toneladas-ecuador.webp"
            ];
            textoMotor1 = "340 HP"
            textoMotor2 = "Modelo T5G-1257 - 18 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.d_ocho
            cuotas = `Cuotas desde: ${precios.d_ocho_cuota}`
            motor = urlMedia + "18-toneladas/motor-sinotruk-de-camion-de-18-toneladas-ecuador.webp"
            garantia = urlMedia + "18-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "18-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "18-toneladas/camion-de-18-toneladas-potencia-340hp.webp",
                urlMedia + "18-toneladas/camion-de-18-toneladas-6-cilindros-en-linea.webp",
                urlMedia + "18-toneladas/camion-de-18-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "18-toneladas/camion-de-18-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "18-toneladas/cabina-de-camion-de-18-toneladas-sinotruk.webp"
            marcas = urlMedia + "18-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "18-toneladas/volante-deportivo-de-camion-de-18-toneladas.webp",
                urlMedia + "18-toneladas/palanca-de-cambios-de-camion-de-18-toneladas.webp",
                urlMedia + "18-toneladas/asiento-neumatico.webp",
                urlMedia + "18-toneladas/eleva-vidrios-electricos.webp",
                urlMedia + "18-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                urlMedia + "18-toneladas/eje.webp",
                urlMedia + "18-toneladas/climatizador.webp",
                urlMedia + "18-toneladas/radio-touch-mp5.webp",
                urlMedia + "18-toneladas/cabina.webp",
                urlMedia + "18-toneladas/portavasos.webp"
            ];
            medidas = urlMedia + "18-toneladas/dimensiones-de-camion-de-18-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "18-toneladas/dimensiones-de-camion-de-18-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "18-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //19 toneladas
        case "19-ton":
            console.log('19 toneladas')
            nombreCamion = "Camion de 19 toneladas | T5G-1257"
            camionSerie = "T5G 1257 / 19.5 TON"
            nombreSerie = "Serie T5G"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO19.5TON"
            images = [
                urlMedia + "19-toneladas/camion-blanco-sinotruk-de-19-toneladas-ecuador.webp",
                urlMedia + "19-toneladas/camion-amarillo-sinotruk-de-19-toneladas-ecuador.webp"
            ];
            textoMotor1 = "340 HP"
            textoMotor2 = "Modelo T5G-1257"
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

        //3.5 toneladas
        case "3-5-ton":
            console.log('3.5 toneladas')
            nombreCamion = "Camion de 3.5 toneladas | 1057"
            camionSerie = "1057 / 3.5 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO3.5TON"
            images = [
                urlMedia + "3.5-toneladas/camion-blanco-sinotruk-de-3.5-toneladas-ecuador.webp",
                urlMedia + "3.5-toneladas/camion-blanco-sinotruk-de-3.5-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "100% Aire"
            textoMotor2 = "Modelo 1057 - 3.5 Ton"
            textoMotor3 = "Ficha técnica"
            precio = "$23.990"
            cuotas = 'Cuotas desde: $301.00'
            motor = urlMedia + "3.5-toneladas/motor-sinotruk-de-camion-de-3.5-toneladas-ecuador.webp"
            garantia = urlMedia + "3.5-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "3.5-toneladas/serie-100.webp"

            caracteristicas = [
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-potencia-87hp.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-cilindraje.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-freno-de-aire.webp",
                urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "3.5-toneladas/cabina-de-camion-de-3.5-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "3.5-toneladas/volante-deportivo.webp",
                urlMedia + "3.5-toneladas/ventilacion.webp"
            ];
            internas2 = [
                urlMedia + "3.5-toneladas/palanca-de-cambios.webp",
                urlMedia + "3.5-toneladas/bloqueo.webp"
            ];
            internas1b = [
                urlMedia + "3.5-toneladas/radio-mp5.webp",
                urlMedia + "3.5-toneladas/vidrios-electricos.webp"
            ];
            internas2b = [
                urlMedia + "3.5-toneladas/cabina.webp"
            ];
            medidas = urlMedia + "3.5-toneladas/dimensiones-de-camion-de-3.5-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "3.5-toneladas/dimensiones-de-camion-de-3.5-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "3.5-toneladas/motor.mp3"


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
                {internas1b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade >
                            {slide3}
                        </Fade>
                    </div>
                }
                {internas1b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas1b[0]} alt="" />
                    </div>
                }

                {internas2b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade >
                            {slide3b}
                        </Fade>
                    </div>
                }
                {internas2b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas2b[0]} alt="" />
                    </div>
                }
            </div>

            contenedorVidaUtil = <div className="banner"><img src={urlMedia + "3.5-toneladas/homologado.webp"} /></div>
            break;


        //3.6 toneladas
        case "3-6-ton":
            console.log('3.6 toneladas')
            nombreCamion = "Camion de 3.6 toneladas | 1047"
            camionSerie = "1047 / 3.6 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO3.6TON"
            images = [
                urlMedia + "3.6-toneladas/camion-blanco-sinotruk-de-3.6-toneladas-ecuador.webp",
                urlMedia + "3.6-toneladas/camion-blanco-sinotruk-de-3.6-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "100% Aire"
            textoMotor2 = "Modelo 1047 - 3.6 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.tres_seis
            cuotas = `Cuotas desde: ${precios.tres_seis_cuota}`
            motor = urlMedia + "3.6-toneladas/motor-sinotruk-de-camion-de-3.6-toneladas-ecuador.webp"
            garantia = urlMedia + "3.6-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "3.6-toneladas/serie-100.webp"

            caracteristicas = [
                urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-potencia-87hp.webp",
                urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-cilindraje.webp",
                urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-freno-de-aire.webp",
                urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "3.6-toneladas/cabina-de-camion-de-3.6-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "3.6-toneladas/volante-deportivo.webp",
                urlMedia + "3.6-toneladas/ventilacion.webp"
            ];
            internas2 = [
                urlMedia + "3.6-toneladas/palanca-de-cambios.webp",
                urlMedia + "3.6-toneladas/bloqueo.webp"
            ];
            internas1b = [
                urlMedia + "3.6-toneladas/radio-mp5.webp",
                urlMedia + "3.6-toneladas/vidrios-electricos.webp"
            ];
            internas2b = [
                urlMedia + "3.6-toneladas/cabina.webp"
            ];
            medidas = urlMedia + "3.6-toneladas/dimensiones-de-camion-de-3.6-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "3.6-toneladas/dimensiones-de-camion-de-3.6-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "3.6-toneladas/motor.mp3"


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
                {internas1b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade >
                            {slide3}
                        </Fade>
                    </div>
                }
                {internas1b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas1b[0]} alt="" />
                    </div>
                }

                {internas2b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade >
                            {slide3b}
                        </Fade>
                    </div>
                }
                {internas2b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas2b[0]} alt="" />
                    </div>
                }
            </div>

            contenedorVidaUtil = <div className="banner"><img src={urlMedia + "3.6-toneladas/homologado.webp"} /></div>
            break;


        //5 toneladas
        case "5-ton":
            console.log('5 toneladas')
            nombreCamion = "Camion de 5 toneladas | 1067"
            camionSerie = "1067 / 5 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO5TON"
            images = [
                urlMedia + "5-toneladas/camion-blanco-sinotruk-de-5-toneladas-ecuador.webp",
                urlMedia + "5-toneladas/camion-blanco-sinotruk-de-5-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "141 HP"
            textoMotor2 = "Modelo 1067 - 5 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.cinco
            cuotas = `Cuotas desde: ${precios.cinco_cuota}`
            motor = urlMedia + "5-toneladas/motor-sinotruk-de-camion-de-5-toneladas-ecuador.webp"
            garantia = urlMedia + "5-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "5-toneladas/serie-100.webp"

            caracteristicas = [
                urlMedia + "5-toneladas/camion-de-5-toneladas-potencia-141hp.webp",
                urlMedia + "5-toneladas/camion-de-5-toneladas-cilindros.webp",
                urlMedia + "5-toneladas/camion-de-5-toneladas-freno-de-aire.webp",
                urlMedia + "5-toneladas/camion-de-5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = urlMedia + "5-toneladas/cabina-de-camion-de-5-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                urlMedia + "5-toneladas/cabina-media.webp",
                urlMedia + "5-toneladas/cabina-amplia.webp"
            ];
            internas2 = [
                urlMedia + "5-toneladas/radio.webp",
                urlMedia + "5-toneladas/palanca.webp"
            ];
            internas1b = [
                urlMedia + "5-toneladas/mandos-al-volante.webp",
                urlMedia + "5-toneladas/ventilacion.webp"
            ];
            internas2b = [
                urlMedia + "5-toneladas/bloqueo.webp"
            ];
            medidas = urlMedia + "5-toneladas/dimensiones-de-camion-de-5-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "5-toneladas/dimensiones-de-camion-de-5-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "5-toneladas/motor.mp3"


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
                {internas1b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade >
                            {slide3}
                        </Fade>
                    </div>
                }
                {internas1b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas1b[0]} alt="" />
                    </div>
                }

                {internas2b.length > 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Fade >
                            {slide3b}
                        </Fade>
                    </div>
                }
                {internas2b.length == 1 &&
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <img src={internas2b[0]} alt="" />
                    </div>
                }
            </div>
            contenedorVidaUtil = <div className="banner"><img src={urlMedia + "5-toneladas/chasis.webp"} /></div>


            break;

        //6 toneladas
        case "6-ton":
            console.log('6 toneladas')
            nombreCamion = "Camion de 6 toneladas | 1067"
            camionSerie = "1067 / 6 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO6TON"
            images = [
                urlMedia + "6-toneladas/camion-blanco-sinotruk-de-6-toneladas-ecuador.webp",
                urlMedia + "6-toneladas/camion-blanco-sinotruk-de-6-toneladas-de-frente-ecuador.webp"

            ];
            textoMotor1 = "154 HP"
            textoMotor2 = "Modelo 1067 - 6 Ton"
            textoMotor3 = "Ficha técnica"
            precio = precios.seis
            cuotas = `Cuotas desde: ${precios.seis_cuota}`
            motor = urlMedia + "6-toneladas/motor-sinotruk-de-camion-de-6-toneladas-ecuador.webp"
            garantia = urlMedia + "6-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "6-toneladas/serie-100.webp"

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

        //8 toneladas
        case "8-ton":
            console.log('8 toneladas')
            nombreCamion = "Camion de 8 toneladas | 1147"
            camionSerie = "1147 / 8 TON"
            nombreSerie = "Serie 100"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO8TON"
            images = [
                urlMedia + "8-toneladas/camion-blanco-sinotruk-de-8-toneladas-ecuador.webp",
                urlMedia + "8-toneladas/camion-blanco-sinotruk-de-8-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "180 HP"
            textoMotor2 = "Modelo 1147 - 8 Ton"
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

        //20 toneladas
        case "20-ton":
            console.log('20 toneladas')
            nombreCamion = "Camion de 20 toneladas | C7H-1256"
            camionSerie = "C7H 1256 / 20 TON"
            nombreSerie = "Serie C7H"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/LDCO20TON"
            images = [
                urlMedia + "20-toneladas/camion-blanco-sinotruk-de-20-toneladas-ecuador.webp",
                urlMedia + "20-toneladas/camion-blanco-sinotruk-de-20-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "430 HP"
            textoMotor2 = "Modelo C7H-1256"
            textoMotor3 = "20 Ton"
            precio = precios.veinte
            cuotas = `Cuotas desde: ${precios.veinte_cuota}`
            motor = urlMedia + "20-toneladas/motor-sinotruk-de-camion-de-20-toneladas-ecuador.webp"
            garantia = urlMedia + "20-toneladas/5-anos-de-garantia.webp"
            tecnologia = urlMedia + "20-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                urlMedia + "20-toneladas/camion-de-20-toneladas-potencia-430hp.webp",
                urlMedia + "20-toneladas/camion-de-20-toneladas-cilindraje.webp",
                urlMedia + "20-toneladas/camion-de-20-toneladas-freno-a-las-valvulas.webp",
                urlMedia + "20-toneladas/inyeccion.webp"
            ]
            cabina = urlMedia + "20-toneladas/cabina-de-camion-de-20-toneladas-sinotruk.webp"
            marcas = urlMedia + "20-toneladas/marcas-vehicentro.webp"
            internas1 = [
                urlMedia + "20-toneladas/palanca-de-cambios.webp",
                urlMedia + "20-toneladas/litera-de-descanso.webp",
                urlMedia + "20-toneladas/asiento-neumatico.webp",
                urlMedia + "20-toneladas/comportamiento-en-el-panel.webp",
                urlMedia + "20-toneladas/climatizador-y-mandos.webp"
            ];
            internas2 = [
                urlMedia + "20-toneladas/volante-deportivo.webp",
                urlMedia + "20-toneladas/radio-touch-mp5.webp",
                urlMedia + "20-toneladas/componentes-wabco.webp",
                urlMedia + "20-toneladas/retardador.webp",
                urlMedia + "20-toneladas/bodega.webp"
            ];
            medidas = urlMedia + "20-toneladas/dimensiones-de-camion-de-20-toneladas-sinotruk.webp"
            medidasMovil = urlMedia + "20-toneladas/dimensiones-de-camion-de-20-toneladas-sinotruk-responsive.webp"
            audio_motor = urlMedia + "20-toneladas/motor.mp3"

            internas = internas1.concat(internas2)
            contenedorVidaUtil = "Vida útil de más de 1.5 MILLONES de kilómetros"
            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;




        default:
            break;
    }




    switch ((useParams("id").id)) {

        case "3-5-ton":
            imagen = urlMedia + "3.5-toneladas/camion-de-3.5-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "3-6-ton":
            imagen = urlMedia + "3.6-toneladas/camion-de-3.6-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "5-ton":
            imagen = urlMedia + "5-toneladas/camion-de-5-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "6-ton":
            imagen = urlMedia + "6-toneladas/camion-de-6-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "8-ton":
            imagen = urlMedia + "8-toneladas/camion-de-8-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "9-ton":
            imagen = urlMedia + "9-toneladas/camion-de-9-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "10-ton":
            imagen = urlMedia + "10-toneladas/camion-de-10-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "12-ton":
            imagen = urlMedia + "12-toneladas/camion-de-12-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "13-ton":
            imagen = urlMedia + "13-toneladas/camion-de-13-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "13-ton-330":
            imagen = urlMedia + "13-toneladas-330/camion-de-13-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "18-ton":
            imagen = urlMedia + "18-toneladas/camion-de-18-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "19-ton":
            imagen = urlMedia + "19-toneladas/camion-de-19-toneladas-en-la-carretera-sinotruk.webp"
            break;

        case "20-ton":
            imagen = urlMedia + "20-toneladas/camion-de-20-toneladas-en-la-carretera-sinotruk.webp"
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
    return <div className="landing">
        <Helmet>
            <title>{nombreCamion} - Vehicentro</title>
            <meta name="description" content={nombreCamion} />
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />

        </Helmet>
        <Landingmenu />
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
                    <div onClick={openFormContact} className="flex-row textoMotor2">{textoMotor2}</div>
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
            <Landingfooter />

        {modalFormIsOpen &&
            <FormContactFicha url={bdc} camion={nombreCamion} serie={nombreSerie} camionSerie={camionSerie} close={closeFormContact} />
        }
    </div>
}

function Landingmenu() {
    return (
        <>
            <div className="menuHome">
                <div className="logoHome">
                   <a href="/landing/comercio/"><img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" /></a> 
                </div>
            </div>
        </>
    )
}

function Landingfooter() {
    return (
        <>
            <div className="menuHome">
                <div className="logoHome">
                   <a href="/landing/comercio/"> <img src={urlMedia + "vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" /></a>
                </div>
            </div>
        </>
    )
}

export default Camion