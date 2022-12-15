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
let internas2b
let internas1b
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
let medidasMovilDos
let medidasDos
let camionSerie
let nombreSerie



function Camion() {

    //Comparacion paginas
    switch ((useParams("id").id)) {

        //swe210
        case "swe210":
            console.log('24 ton')
            nombreCamion = "Excavadora SE210"
            camionSerie = "VOLQUETA T5G 430-330 10-14M2"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB24TT5G4187"
            images = [
                "../images/swe210/vehicentro-excavadora-ecuador.webp"
            ];
            textoMotor1 = "SUNWARD"
            textoMotor2 = "Swe210"
            textoMotor3 = "Escavadora"
            precio = "Contáctanos"
            motor = "../images/swe210/motor.webp"
            garantia = "../images/swe210/5-anos-de-garantia.webp"
            tecnologia = "../images/swe210/sunward.webp"
            contenedorVidaUtil = <div className="banner"><img src="../images/swe210/isuzu.webp" /></div>
            
            caracteristicas = [
                "../images/swe210/camion-de-24-toneladas-potencia-340hp.webp",
                "../images/swe210/camion-de-24-toneladas-cilindraje.webp",
                "../images/swe210/camion-de-24-toneladas-freno-a-las-valvulas.webp",
                "../images/swe210/inyeccion.webp"
            ]
            cabina = "../images/swe210/cabina.webp"
            marcas = "../images/swe210/asiento.webp"
            internas1 = [
                "../images/swe210/motor-giro.webp",
                "../images/swe210/sunroof.webp"
            ];
            internas2 = [
                "../images/swe210/cluster.webp",
                "../images/swe210/asiento.webp"
            ];
            internas1b = [
                "../images/swe210/bomba.webp"
            ];
            internas2b = [
                "../images/swe210/radio.webp"
            ];

            medidas = "../images/swe210/medidas.webp"
            medidasDos = "../images/swe210/medidas-2.webp"
            medidasMovil = "../images/swe210/medidas-movil.webp"
            medidasMovilDos = "../images/swe210/medidas-movil-2.webp"
            audio_motor = "../images/swe210/motor.wav"

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
                    <div className="flex-row textoMotorFlecha"><img src="../images/arrow-rojo.png" alt="arrow" /></div>
                </div>
            </div>

        </div>
        <div className="contentProduct">

            <div className="marcasbg textoImagenesProducto" >

                <div className="boxRightHeader  half text_icon_left" >
                    <p className='precioExcavadora' >{precio}</p>
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
            <div className="bannerMedidas noResponsive"><img src={medidasDos} /></div>
            <div className="bannerMedidas responsive"><img src={medidasMovil} /></div>
            <div className="bannerMedidas responsive"><img src={medidasMovilDos} /></div>
        </div>
        <FormContact url={bdc} camion={nombreCamion} />
        <BannerContacto />
        <Footer />
    </>
}

export default Camion