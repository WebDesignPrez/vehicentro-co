import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact";
import BannerContacto from "../components/BannerContacto";
import Footer from "../components/Footer";
import '../stylesIn.css';
import { useParams } from "react-router";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../slider.css';
import { useEffect } from "react";
import { nodeName } from "jquery";

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


function Camion() {

    //Comparacion paginas
    switch ((useParams("id").id)) {

        //10 toneladas
        case "camion-10-toneladas-t5g-1167":
            console.log('entro')
            images = [
                "../images/10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador.webp",
                "../images/10-toneladas/camion-gris-sinotruk-de-10-toneladas-ecuadorn-slide.webp"
            ];
            textoMotor1 = "240 HP"
            textoMotor2 = "Freno a las válvulas"
            textoMotor3 = "Ficha técnica"
            precio = "$53.890"
            motor = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            garantia = "../images/10-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/10-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/10-toneladas/camion-de-10-toneladas-potencia-240hp.webp",
                "../images/10-toneladas/camion-de-10-toneladas-6-cilindros-en-linea.webp",
                "../images/10-toneladas/camion-de-10-toneladas-freno-a-camion-de-10-toneladas-freno-a-las-valvulas.webp",
                "../images/10-toneladas/camion-de-10-toneladas-inyeccion-common-rail.webp"
            ]
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

            medidas = "../images/10-toneladas/dimensiones-de-camion-de-10-toneladas-sinotruk.webp"
            medidasMovil = "../images/10-toneladas/dimensiones-de-camion-de-10-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/10-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //9 toneladas
        case "camion-de-9-toneladas":
            console.log('entro')
            images = [
                "../images/9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador.webp",
                "../images/9-toneladas/camion-blanco-sinotruk-de-9-toneladas-ecuador-de-frente.webp"
            ];
            textoMotor1 = "210 HP"
            textoMotor2 = "Modelo T5G-1167"
            textoMotor3 = "Ficha técnica"
            precio = "$49.990"
            motor = "../images/9-toneladas/motor-sinotruk-de-camion-de-9-toneladas-ecuador.webp"
            garantia = "../images/9-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/9-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/9-toneladas/camion-de-10-toneladas-potencia-210hp.webp",
                "../images/9-toneladas/camion-de-9-toneladas-4-cilindros-en-linea.webp",
                "../images/9-toneladas/camion-de-9-toneladas-freno-a-camion-de-10-toneladas-freno-a-las-valvulas.webp",
                "../images/9-toneladas/camion-de-9-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/9-toneladas/cabina-de-camion-de-9-toneladas-sinotruk.webp"
            marcas = "../images/9-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/9-toneladas/volante-deportivo-de-camion-de-9-toneladas.webp",
                "../images/9-toneladas/palanca-de-cambios-de-camion-de-9-toneladas.webp",
                "../images/9-toneladas/asiento-neumatico-dos.webp",
                "../images/9-toneladas/eleva-vidrios-electricos.webp",
                "../images/9-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                "../images/9-toneladas/climatizador.webp",
                "../images/9-toneladas/radio-touch-mp5.webp",
                "../images/9-toneladas/cabina.webp",
                "../images/9-toneladas/portavasos.webp"
            ];

            medidas = "../images/9-toneladas/dimensiones-de-camion-de-9-toneladas-sinotruk.webp"
            medidasMovil = "../images/9-toneladas/dimensiones-de-camion-de-9-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/9-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //12 toneladas
        case "camion-12-toneladas-t5g-1167":
            console.log('12 toneladas')
            images = [
                "../images/12-toneladas/camion-blanco-sinotruk-de-12-toneladas-ecuador.webp",
                "../images/12-toneladas/camion-gris-sinotruk-de-12-toneladas-ecuador-slide.webp"
            ];
            textoMotor1 = "240 HP"
            textoMotor2 = "Modelo T5G-1167"
            textoMotor3 = "Ficha técnica"
            precio = "$57.990"
            motor = "../images/12-toneladas/motor-sinotruk-de-camion-de-12-toneladas-ecuador.webp"
            garantia = "../images/12-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/12-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/12-toneladas/camion-de-12-toneladas-potencia-240hp.webp",
                "../images/12-toneladas/camion-de-12-toneladas-6-cilindros-en-linea.webp",
                "../images/12-toneladas/camion-de-12-toneladas-freno-a-las-valvulas.webp",
                "../images/12-toneladas/camion-de-12-toneladas-inyeccion-common-rail.webp"
            ]
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

            medidas = "../images/12-toneladas/dimensiones-de-camion-de-12-toneladas-sinotruk.webp"
            medidasMovil = "../images/12-toneladas/dimensiones-de-camion-de-12-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/12-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //13 toneladas
        case "camion-13-toneladas-t5g-1167":
            console.log('13 toneladas')
            images = [
                "../images/13-toneladas/camion-blanco-sinotruk-de-13-toneladas-ecuador.webp",
                "../images/13-toneladas/camion-blanco-sinotruk-de-13-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "280 HP"
            textoMotor2 = "Modelo T5G-1167"
            textoMotor3 = "13 Ton"
            precio = "$62.990"
            motor = "../images/13-toneladas/motor-sinotruk-de-camion-de-13-toneladas-ecuador.webp"
            garantia = "../images/13-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/13-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/13-toneladas/camion-de-13-toneladas-potencia-280hp.webp",
                "../images/13-toneladas/camion-de-13-toneladas-6-cilindros-en-linea.webp",
                "../images/13-toneladas/camion-de-13-toneladas-freno-a-las-valvulas.webp",
                "../images/13-toneladas/camion-de-13-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/13-toneladas/cabina-de-camion-de-13-toneladas-sinotruk.webp"
            marcas = "../images/13-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/13-toneladas/volante-deportivo-de-camion-de-13-toneladas.webp",
                "../images/13-toneladas/palanca-de-cambios-de-camion-de-13-toneladas.webp",
                "../images/13-toneladas/asiento-neumatico.webp",
                "../images/13-toneladas/eleva-vidrios-electricos.webp",
                "../images/13-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                "../images/13-toneladas/climatizador.webp",
                "../images/13-toneladas/radio-touch-mp5.webp",
                "../images/13-toneladas/cabina.webp",
                "../images/13-toneladas/portavasos.webp"
            ];

            medidas = "../images/13-toneladas/dimensiones-de-camion-de-13-toneladas-sinotruk.webp"
            medidasMovil = "../images/13-toneladas/dimensiones-de-camion-de-13-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/13-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //13 toneladas 330hp
        case "camion-13-toneladas-t5g-1167-330hp":
            console.log('13 toneladas 330Hp')
            images = [
                "../images/13-toneladas-330/camion-blanco-sinotruk-de-13-toneladas-ecuador.webp",
                "../images/13-toneladas-330/camion-blanco-sinotruk-de-13-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "330 HP"
            textoMotor2 = "Modelo T5G-1067"
            textoMotor3 = "13 Ton"
            precio = "$67.990"
            motor = "../images/13-toneladas-330/motor-sinotruk-de-camion-de-13-toneladas-ecuador.webp"
            garantia = "../images/13-toneladas-330/5-anos-de-garantia.webp"
            tecnologia = "../images/13-toneladas-330/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/13-toneladas-330/camion-de-13-toneladas-potencia-330hp.webp",
                "../images/13-toneladas-330/camion-de-13-toneladas-6-cilindros-en-linea.webp",
                "../images/13-toneladas-330/camion-de-13-toneladas-freno-a-las-valvulas.webp",
                "../images/13-toneladas-330/camion-de-13-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/13-toneladas-330/cabina-de-camion-de-13-toneladas-sinotruk.webp"
            marcas = "../images/13-toneladas-330/marcas-vehicentro.webp"
            internas1 = [
                "../images/13-toneladas-330/volante-deportivo-de-camion-de-13-toneladas.webp",
                "../images/13-toneladas-330/palanca-de-cambios-de-camion-de-13-toneladas.webp",
                "../images/13-toneladas-330/asiento-neumatico.webp",
                "../images/13-toneladas-330/eleva-vidrios-electricos.webp",
                "../images/13-toneladas-330/radio-touch-mp5.webp"
            ];
            internas2 = [
                "../images/13-toneladas-330/climatizador.webp",
                "../images/13-toneladas-330/radio-touch-mp5.webp",
                "../images/13-toneladas-330/cabina.webp",
                "../images/13-toneladas-330/portavasos.webp"
            ];
            medidas = "../images/13-toneladas-330/dimensiones-de-camion-de-13-toneladas-sinotruk.webp"
            medidasMovil = "../images/13-toneladas-330/dimensiones-de-camion-de-13-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/13-toneladas-330/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //19 toneladas
        case "camion-de-19-toneladas-t5g-1257":
            console.log('19 toneladas')
            images = [
                "../images/19-toneladas/camion-blanco-sinotruk-de-19-toneladas-ecuador.webp",
                "../images/19-toneladas/camion-amarillo-sinotruk-de-19-toneladas-ecuador.webp"
            ];
            textoMotor1 = "340 HP"
            textoMotor2 = "Modelo T5G-1257"
            textoMotor3 = "19.5 Ton"
            precio = "$80.990"
            motor = "../images/19-toneladas/motor-sinotruk-de-camion-de-19-toneladas-ecuador.webp"
            garantia = "../images/19-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/19-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/19-toneladas/camion-de-19-toneladas-potencia-340hp.webp",
                "../images/19-toneladas/camion-de-19-toneladas-6-cilindros-en-linea.webp",
                "../images/19-toneladas/camion-de-19-toneladas-freno-a-las-valvulas.webp",
                "../images/19-toneladas/camion-de-19-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/19-toneladas/cabina-de-camion-de-19-toneladas-sinotruk.webp"
            marcas = "../images/19-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/19-toneladas/volante-deportivo-de-camion-de-19-toneladas.webp",
                "../images/19-toneladas/palanca-de-cambios-de-camion-de-19-toneladas.webp",
                "../images/19-toneladas/asiento-neumatico.webp",
                "../images/19-toneladas/eleva-vidrios-electricos.webp",
                "../images/19-toneladas/radio-touch-mp5.webp"
            ];
            internas2 = [
                "../images/19-toneladas/climatizador.webp",
                "../images/19-toneladas/radio-touch-mp5.webp",
                "../images/19-toneladas/cabina.webp",
                "../images/19-toneladas/portavasos.webp"
            ];
            medidas = "../images/19-toneladas/dimensiones-de-camion-de-19-toneladas-sinotruk.webp"
            medidasMovil = "../images/19-toneladas/dimensiones-de-camion-de-19-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/19-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //3.5 toneladas
        case "camion-de-3-5-toneladas-1057":
            console.log('3.5 toneladas')
            images = [
                "../images/3.5-toneladas/camion-blanco-sinotruk-de-3.5-toneladas-ecuador.webp",
                "../images/3.5-toneladas/camion-blanco-sinotruk-de-3.5-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "87 HP"
            textoMotor2 = "Modelo 1047"
            textoMotor3 = "3.5 Ton"
            precio = "$23.990"
            motor = "../images/3.5-toneladas/motor-sinotruk-de-camion-de-3.5-toneladas-ecuador.webp"
            garantia = "../images/3.5-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/3.5-toneladas/serie-100.webp"

            caracteristicas = [
                "../images/3.5-toneladas/camion-de-3.5-toneladas-potencia-87hp.webp",
                "../images/3.5-toneladas/camion-de-3.5-toneladas-cilindraje.webp",
                "../images/3.5-toneladas/camion-de-3.5-toneladas-freno-de-aire.webp",
                "../images/3.5-toneladas/camion-de-3.5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/3.5-toneladas/cabina-de-camion-de-3.5-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                "../images/3.5-toneladas/volante-deportivo.webp",
                "../images/3.5-toneladas/ventilacion.webp"
            ];
            internas2 = [
                "../images/3.5-toneladas/palanca-de-cambios.webp",
                "../images/3.5-toneladas/bloqueo.webp"
            ];
            internas1b = [
                "../images/3.5-toneladas/radio-mp5.webp",
                "../images/3.5-toneladas/vidrios-electricos.webp"
            ];
            internas2b = [
                "../images/3.5-toneladas/cabina.webp"
            ];
            medidas = "../images/3.5-toneladas/dimensiones-de-camion-de-3.5-toneladas-sinotruk.webp"
            medidasMovil = "../images/3.5-toneladas/dimensiones-de-camion-de-3.5-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/3.5-toneladas/motor.wav"


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
                    <Slide >
                        {slide3}
                    </Slide>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    <Slide >
                        {slide3b}
                    </Slide>
                </div>
            </div>


            break;

        //5 toneladas
        case "camion-de-5-toneladas-1067":
            console.log('5 toneladas')
            images = [
                "../images/5-toneladas/camion-blanco-sinotruk-de-5-toneladas-ecuador.webp",
                "../images/5-toneladas/camion-blanco-sinotruk-de-5-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "141 HP"
            textoMotor2 = "Modelo 1047"
            textoMotor3 = "5 Ton"
            precio = "$27.990"
            motor = "../images/5-toneladas/motor-sinotruk-de-camion-de-5-toneladas-ecuador.webp"
            garantia = "../images/5-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/5-toneladas/serie-100.webp"

            caracteristicas = [
                "../images/3.5-toneladas/camion-de-3.5-toneladas-potencia-87hp.webp",
                "../images/3.5-toneladas/camion-de-3.5-toneladas-cilindraje.webp",
                "../images/3.5-toneladas/camion-de-3.5-toneladas-freno-de-aire.webp",
                "../images/3.5-toneladas/camion-de-3.5-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/5-toneladas/cabina-de-camion-de-5-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                "../images/5-toneladas/volante-deportivo.webp",
                "../images/5-toneladas/ventilacion.webp"
            ];
            internas2 = [
                "../images/5-toneladas/palanca-de-cambios.webp",
                "../images/5-toneladas/bloqueo.webp"
            ];
            internas1b = [
                "../images/5-toneladas/radio-mp5.webp",
                "../images/5-toneladas/vidrios-electricos.webp"
            ];
            internas2b = [
                "../images/5-toneladas/cabina.webp"
            ];
            medidas = "../images/5-toneladas/dimensiones-de-camion-de-5-toneladas-sinotruk.webp"
            medidasMovil = "../images/5-toneladas/dimensiones-de-camion-de-5-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/5-toneladas/motor.wav"


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
                    <Slide >
                        {slide3}
                    </Slide>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    <Slide >
                        {slide3b}
                    </Slide>
                </div>
            </div>


            break;

        //6 toneladas
        case "camion-de-6-toneladas-1067":
            console.log('6 toneladas')
            images = [
                "../images/6-toneladas/camion-blanco-sinotruk-de-6-toneladas-ecuador.webp"
            ];
            textoMotor1 = "154 HP"
            textoMotor2 = "Modelo 1067"
            textoMotor3 = "6 Ton"
            precio = "$31.890"
            motor = "../images/6-toneladas/motor-sinotruk-de-camion-de-6-toneladas-ecuador.webp"
            garantia = "../images/6-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/6-toneladas/serie-100.webp"

            caracteristicas = [
                "../images/6-toneladas/camion-de-6-toneladas-potencia-154hp.webp",
                "../images/6-toneladas/camion-de-6-toneladas-cilindraje.webp",
                "../images/6-toneladas/camion-de-6-toneladas-freno-de-aire.webp",
                "../images/6-toneladas/camion-de-6-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/6-toneladas/cabina-de-camion-de-6-toneladas-sinotruk.webp"
            marcas = ""
            internas1 = [
                "../images/6-toneladas/palanca-de-cambios.webp",
                "../images/6-toneladas/Mandos-al-volante.webp",
                "../images/6-toneladas/vidrios-electricos.webp"
            ];
            internas2 = [
                "../images/6-toneladas/frenos-de-aire.webp",
                "../images/6-toneladas/bloqueo.webp"
            ];
            internas1b = [
                "../images/6-toneladas/tablero-con-pantalla.webp",
                "../images/6-toneladas/ventilacion.webp"
            ];
            internas2b = [
                "../images/6-toneladas/radio-android-con-icar.webp",
                "../images/6-toneladas/Litera.webp"
            ];
            medidas = "../images/6-toneladas/dimensiones-de-camion-de-6-toneladas-sinotruk.webp"
            medidasMovil = "../images/6-toneladas/dimensiones-de-camion-de-6-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/6-toneladas/motor.wav"


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
                    <Slide >
                        {slide3}
                    </Slide>
                </div>
                <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                    <Slide >
                        {slide3b}
                    </Slide>
                </div>
            </div>

            contenedorVidaUtil = <div className="banner"><img src="../images/6-toneladas/eaton.webp" /></div>

            break;

        //8 toneladas
        case "camion-8-toneladas-1147":
            console.log('8 toneladas')
            images = [
                "../images/8-toneladas/camion-blanco-sinotruk-de-8-toneladas-ecuador.webp",
                "../images/8-toneladas/camion-blanco-sinotruk-de-8-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "180 HP"
            textoMotor2 = "Modelo 1147"
            textoMotor3 = "8 Ton"
            precio = "$42.990"
            motor = "../images/8-toneladas/motor-sinotruk-de-camion-de-8-toneladas-ecuador.webp"
            garantia = "../images/8-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/8-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/8-toneladas/camion-de-8-toneladas-potencia-180hp.webp",
                "../images/8-toneladas/camion-de-8-toneladas-cilindraje.webp",
                "../images/8-toneladas/camion-de-8-toneladas-freno-a-las-valvulas.webp",
                "../images/8-toneladas/inyeccion.webp"
            ]
            cabina = "../images/8-toneladas/cabina-de-camion-de-8-toneladas-sinotruk.webp"
            marcas = "../images/8-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/8-toneladas/palanca-de-cambios.webp",
                "../images/8-toneladas/volante-deportivo.webp",
                "../images/8-toneladas/radio-mp5.webp",
                "../images/8-toneladas/cabina-amplia.webp"
            ];
            internas2 = [
                "../images/8-toneladas/mandos-al-volante.webp",
                "../images/8-toneladas/vidrios-amplios.webp",
                "../images/8-toneladas/bloqueo.webp"
            ];
            medidas = "../images/8-toneladas/dimensiones-de-camion-de-8-toneladas-sinotruk.webp"
            medidasMovil = "../images/8-toneladas/dimensiones-de-camion-de-8-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/8-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        //20 toneladas
        case "camion-20-toneladas-1256":
            console.log('20 toneladas')
            images = [
                "../images/20-toneladas/camion-blanco-sinotruk-de-20-toneladas-ecuador.webp",
                "../images/20-toneladas/camion-blanco-sinotruk-de-20-toneladas-de-frente-ecuador.webp"
            ];
            textoMotor1 = "430 HP"
            textoMotor2 = "Modelo C7H-1256"
            textoMotor3 = "20 Ton"
            precio = "$96.990"
            motor = "../images/20-toneladas/motor-sinotruk-de-camion-de-20-toneladas-ecuador.webp"
            garantia = "../images/20-toneladas/5-anos-de-garantia.webp"
            tecnologia = "../images/20-toneladas/tecnologia-alemana.webp"
            caracteristicas = [
                "../images/20-toneladas/camion-de-20-toneladas-potencia-430hp.webp",
                "../images/20-toneladas/camion-de-20-toneladas-cilindraje.webp",
                "../images/20-toneladas/camion-de-20-toneladas-freno-a-las-valvulas.webp",
                "../images/20-toneladas/inyeccion.webp"
            ]
            cabina = "../images/20-toneladas/cabina-de-camion-de-20-toneladas-sinotruk.webp"
            marcas = "../images/20-toneladas/marcas-vehicentro.webp"
            internas1 = [
                "../images/20-toneladas/palanca-de-cambios.webp",
                "../images/20-toneladas/litera-de-descanso.webp",
                "../images/20-toneladas/asiento-neumatico.webp",
                "../images/20-toneladas/comportamiento-en-el-panel.webp",
                "../images/20-toneladas/climatizador-y-mandos.webp"
            ];
            internas2 = [
                "../images/20-toneladas/volante-deportivo.webp",
                "../images/20-toneladas/radio-touch-mp5.webp",
                "../images/20-toneladas/componentes-wabco.webp",
                "../images/20-toneladas/retardador.webp",
                "../images/20-toneladas/bodega.webp"
            ];
            medidas = "../images/20-toneladas/dimensiones-de-camion-de-20-toneladas-sinotruk.webp"
            medidasMovil = "../images/20-toneladas/dimensiones-de-camion-de-20-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/20-toneladas/motor.wav"

            internas = internas1.concat(internas2)

            contenedorMarcas = <div className="boxRightHeader  half" style={{ width: '100 %' }} >
                <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
            </div>

            break;

        


        default:
            break;
    }


    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotor')
        motorPlayer.src = audio_motor
    })

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
        <NavBarTop />
        <div className="boxesIni posRelative content2">
            <div className="boxRight tecnologia">
                <Slide>
                    {slide1}
                </Slide>
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxText flex-table row textoSobrepuesto">
                    <div className="flex-row  textoMotor1">{textoMotor1}</div>
                    <div className="flex-row  textoMotor2">{textoMotor2}</div>
                    <div className="flex-row  textoMotor3">{textoMotor3}</div>
                    <div className="flex-row  textoMotor4">Escucha tu motor</div>
                </div>
                <div className="boxPlayerMotor ">
                    <audio id="audioMotor" controls></audio>
                </div>
            </div>

        </div>
        <div className="contentProduct">

            <div className="marcasbg textoImagenesProducto" >

                <div className="boxRightHeader  half text_icon_left" >
                    <p className='vidaUtil'>DESDE</p>
                    <p className='precioCamiones' >{precio}</p>
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
                        <Slide >
                            {slide2}
                        </Slide>
                    </div>
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                        <Slide >
                            {slide2b}
                        </Slide>
                    </div>
                    <div className="boxRightHeader  half responsive" style={{ width: `100%` }} >
                        <Slide >
                            {slide2c}
                        </Slide>
                    </div>
                    {contenedorMarcas}

                </div>


            </div>
            <div className="bannerMedidas noResponsive"><img src={medidas} /></div>
            <div className="bannerMedidas responsive"><img src={medidasMovil} /></div>
        </div>
        <FormContact />
        <BannerContacto />
        <Footer />
    </>
}

export default Camion