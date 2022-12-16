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

let imagen
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
            precio = "$161.280"
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

        case "swe365e":
            console.log('24 ton')
            nombreCamion = "Excavadora SWE365E"
            camionSerie = "VOLQUETA T5G 430-330 10-14M2"
            nombreSerie = "Especiales"
            bdc = "https://bdc.vehicentro.com:9443/ords/ws_vehicentro/api/conexiones/wordpress/WEB24TT5G4187"
            images = [
                "../images/swe365e/vehicentro-excavadora-ecuador.webp"
            ];
            textoMotor1 = "SUNWARD"
            textoMotor2 = "swe365e"
            textoMotor3 = "Escavadora"
            precio = "$257.600"
            motor = "../images/swe365e/motor.webp"
            garantia = "../images/swe365e/5-anos-de-garantia.webp"
            tecnologia = "../images/swe365e/sunward.webp"
            contenedorVidaUtil = <div className="banner"><img src="../images/swe365e/isuzu.webp" /></div>

            caracteristicas = [
                "../images/swe365e/camion-de-24-toneladas-potencia-340hp.webp",
                "../images/swe365e/camion-de-24-toneladas-cilindraje.webp",
                "../images/swe365e/camion-de-24-toneladas-freno-a-las-valvulas.webp",
                "../images/swe365e/inyeccion.webp"
            ]
            cabina = "../images/swe365e/cabina.webp"
            marcas = "../images/swe365e/asiento.webp"
            internas1 = [
                "../images/swe365e/motor-giro.webp",
                "../images/swe365e/sunroof.webp"
            ];
            internas2 = [
                "../images/swe365e/cluster.webp",
                "../images/swe365e/asiento.webp"
            ];
            internas1b = [
                "../images/swe365e/bomba.webp"
            ];
            internas2b = [
                "../images/swe365e/radio.webp"
            ];

            medidas = "../images/swe365e/medidas.webp"
            medidasDos = "../images/swe365e/medidas-2.webp"
            medidasMovil = "../images/swe365e/medidas-movil.webp"
            medidasMovilDos = "../images/swe365e/medidas-movil-2.webp"
            audio_motor = "../images/swe365e/motor.wav"

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



    switch ((useParams("id").id)) {
        case "camion-10-toneladas-t5g-1167":
          imagen = "../images/10-toneladas/camion-de-10-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-9-toneladas":
          imagen = "../images/9-toneladas/camion-de-9-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-12-toneladas-t5g-1167":
          imagen = "../images/12-toneladas/camion-de-12-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-13-toneladas-t5g-1167":
          imagen = "../images/13-toneladas/camion-de-13-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-13-toneladas-t5g-1167-330hp":
          imagen = "../images/13-toneladas-330/camion-de-13-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-19-toneladas-t5g-1257":
          imagen = "../images/19-toneladas/camion-de-19-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-3-5-toneladas-1057":
          imagen = "../images/3.5-toneladas/camion-de-3.5-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-5-toneladas-1067":
          imagen = "../images/5-toneladas/camion-de-5-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-6-toneladas-1067":
          imagen = "../images/6-toneladas/camion-de-6-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-8-toneladas-1147":
          imagen = "../images/8-toneladas/camion-de-8-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-20-toneladas-1256":
          imagen = "../images/20-toneladas/camion-de-20-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-t5g-4187":
          imagen = "../images/24-toneladas/camion-de-24-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-t7h-390-28-toneladas":
          imagen = "../images/28-toneladas/camion-de-28-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-t7h-390-42-toneladas":
          imagen = "../images/42-toneladas/camion-de-42-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-t7h-430-45-toneladas":
          imagen = "../images/45-toneladas/camion-de-45-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-c7h-540":
          imagen = "../images/48-toneladas/camion-de-48-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-c7h-540-catalinas-48-toneladas":
          imagen = "../images/48-toneladas-catalinas/camion-de-48-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "swe210":
          imagen = "../images/swe210/excavadora-en-carretera-vehicentro-ecuador.webp"
          break;
    
          
        case "camion-de-18-toneladas-t5g-1257":
          imagen = "../images/18-toneladas/camion-de-18-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        default:
          break;
      }

 

      switch ((useParams("id").id)) {
        case "camion-10-toneladas-t5g-1167":
          imagen = "../images/10-toneladas/camion-de-10-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-9-toneladas":
          imagen = "../images/9-toneladas/camion-de-9-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-12-toneladas-t5g-1167":
          imagen = "../images/12-toneladas/camion-de-12-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-13-toneladas-t5g-1167":
          imagen = "../images/13-toneladas/camion-de-13-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-13-toneladas-t5g-1167-330hp":
          imagen = "../images/13-toneladas-330/camion-de-13-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-19-toneladas-t5g-1257":
          imagen = "../images/19-toneladas/camion-de-19-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-3-5-toneladas-1057":
          imagen = "../images/3.5-toneladas/camion-de-3.5-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-5-toneladas-1067":
          imagen = "../images/5-toneladas/camion-de-5-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-de-6-toneladas-1067":
          imagen = "../images/6-toneladas/camion-de-6-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-8-toneladas-1147":
          imagen = "../images/8-toneladas/camion-de-8-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "camion-20-toneladas-1256":
          imagen = "../images/20-toneladas/camion-de-20-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-t5g-4187":
          imagen = "../images/24-toneladas/camion-de-24-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-t7h-390-28-toneladas":
          imagen = "../images/28-toneladas/camion-de-28-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-t7h-390-42-toneladas":
          imagen = "../images/42-toneladas/camion-de-42-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-t7h-430-45-toneladas":
          imagen = "../images/45-toneladas/camion-de-45-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-c7h-540":
          imagen = "../images/48-toneladas/camion-de-48-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "cabezal-c7h-540-catalinas-48-toneladas":
          imagen = "../images/48-toneladas-catalinas/camion-de-48-toneladas-en-la-carretera-sinotruk.webp"
          break;
    
        case "swe210":
          imagen = "../images/swe210/excavadora-en-carretera-vehicentro-ecuador.webp"
          break;
    
          
        case "camion-de-18-toneladas-t5g-1257":
          imagen = "../images/18-toneladas/camion-de-18-toneladas-en-la-carretera-sinotruk.webp"
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
                    <p className='vidaUtil'>DESDE</p>
                    <p className='precioExcavadora' >{precio}</p>
                    <p className='cuotas'>Cuotas desde: $123</p>
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