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
let interna
let medidas
let medidasMovil
let audio_motor
let garantia

function Camion() {

    //Comparacion paginas
    switch ((useParams("id").id)) {
        case "camion-10-toneladas-t5g-1167":
            console.log('entro')
            images = [
                "../images/10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador.webp",
                "../images/10-toneladas/camion-gris-sinotruk-de-10-toneladas-ecuadorn-slide.webp",
                "../images/10-toneladas/camion-blanco-sinotruk-de-10-toneladas-ecuador.webp"
            ];
            motor = "../images/10-toneladas/motor-sinotruk-de-camion-de-10-toneladas-ecuador.webp"
            garantia = "../images/10-toneladas/5-anos-de-garantia.webp"
            caracteristicas = [
                "../images/10-toneladas/camion-de-10-toneladas-potencia-240hp.webp",
                "../images/10-toneladas/camion-de-10-toneladas-6-cilindros-en-linea.webp",
                "../images/10-toneladas/camion-de-10-toneladas-freno-a-camion-de-10-toneladas-freno-a-las-valvulas.webp",
                "../images/10-toneladas/camion-de-10-toneladas-inyeccion-common-rail.webp"
            ]
            cabina = "../images/10-toneladas/cabina-de-camion-de-10-toneladas-sinotruk.webp"
            marcas = "../images/10-toneladas/marcas-vehicentro.webp"
            interna = [
                "../images/10-toneladas/volante-deportivo-de-camion-de-10-toneladas.webp",
                "../images/10-toneladas/palanca-de-cambios-de-camion-de-10-toneladas.webp",
                "../images/10-toneladas/asiento-neumatico-dos.webp",
                "../images/10-toneladas/eleva-vidrios-electricos.webp",
                "../images/10-toneladas/radio-touch-mp5.webp",
                "../images/10-toneladas/climatizador.webp",
                "../images/10-toneladas/radio-touch-mp5.webp",
                "../images/10-toneladas/cabina.webp",
                "../images/10-toneladas/portavasos.webp",
                "../images/10-toneladas/volante-deportivo-de-camion-de-10-toneladas.webp"
            ];
            medidas = "../images/10-toneladas/dimensiones-de-camion-de-10-toneladas-sinotruk.webp"
            medidasMovil = "../images/10-toneladas/dimensiones-de-camion-de-10-toneladas-sinotruk-responsive.webp"
            audio_motor = "../images/10-toneladas/motor.wav"


            break;

        default:
            break;
    }

    useEffect(() => {
        const motorPlayer = document.getElementById('audioMotor')
        motorPlayer.src = audio_motor
    })



    return <>
        <NavBarTop />
        <div className="boxesIni posRelative content2">
            <div className="boxRight tecnologia">
                <Slide>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[0]})`, height: `41vw` }}>

                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[1]})`, height: `41vw` }}>

                        </div>
                    </div>
                    <div className="each-slide-effect">
                        <div style={{ 'backgroundImage': `url(${images[2]})`, height: `41vw` }}>

                        </div>
                    </div>
                </Slide>
            </div>
            <div className="boxLeft playMotor contenedorTextoSobrepuesto">
                <img src={motor} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
                <div className="boxText flex-table row textoSobrepuesto">
                    <div className="flex-row  textoMotor1">240 HP</div>
                    <div className="flex-row  textoMotor2">Freno a las válvulas</div>
                    <div className="flex-row  textoMotor3">Ficha técnica</div>
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
                    <p>DESDE</p>
                    <p style={{ "font-size": `55px` }} >$53.890</p>
                </div>

                <div className="boxRightHeader  half icon_center" >
                    <div className="banner"><img src="../images/10-toneladas/tecnologia-alemana.webp" /></div>
                </div>

                <div className="boxRightHeader  half text_icon_center" >
                    <p>Vida útil de más de </p>
                    <p>1.5 MILLONES de</p>
                    <p>kilómetros</p>
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

                <div className="marcasbg" style={{ display: `flex`, 'flex-wrap': `wrap` }}>
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }}>
                        <Slide >
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[0]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[2]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[4]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[6]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[8]})`, height: `25vw` }}>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="boxRightHeader  half noResponsive" style={{ width: `50%` }} >
                        <Slide >
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[1]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[3]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[5]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[7]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[9]})`, height: `25vw` }}>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="boxRightHeader  half responsive" style={{ width: `100%` }} >
                        <Slide >
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[0]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[1]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[2]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[3]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[4]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[5]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[6]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[7]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[8]})`, height: `25vw` }}>
                                </div>
                            </div>
                            <div className="each-slide-effect" >
                                <div style={{ 'backgroundImage': `url(${interna[9]})`, height: `25vw` }}>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div className="boxRightHeader  half" style={{ width: `100%` }} >
                        <img src={marcas} width="1500" height="750" className="slideMain" alt="Punto de Venta" />
                    </div>
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