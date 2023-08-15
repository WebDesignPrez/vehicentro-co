import { NavLink } from "react-router-dom"
import env from '../config';

let urlMedia = env.url

export default function Footer() {
    
    return (
        <div className="footer posRelative">
            <div className="info">
                <img src={urlMedia+"vehicentro-logo-blanco.png"} width="230" height="80" alt="Vehicentro" />
                <ul className="list">
                    <li><p className="titleFooter"><a href="/co/compania">NOSOTROS</a></p></li>
                    <li><p className="titleFooter"><a href="/co/concesionarios">CONCESIONARIOS</a></p></li>
                    <li><p className="titleFooter"><a href="/co/concesionarios">TECNOLOGÍA ALEMANA</a></p></li>
                </ul>
                <br />
                <p className="title titleNumero"><a href="tel:032294740">032 994 740</a></p>
                <p className="title titleContacto">CONTACTO DIRECTO</p>
                <div className="social row">
                    <div className="flex-row imgMain">
                        <a href="https://www.facebook.com/Vehicentro"><img src={urlMedia+"facebook.png"} alt="facebook" width="32" height="32" /></a>
                        <a href="https://www.instagram.com/vehicentroec"><img src={urlMedia+"instagram.png"} alt="instagram" width="32" height="32" /></a>
                        <a href="https://www.youtube.com/channel/UCW8gGawovE35cXcJ3P2kryQ"><img src={urlMedia+"youtube.png"} alt="youtube" width="32" height="32" /></a>
                        <a href="https://www.tiktok.com/@sinotrukeros"><img src={urlMedia+"tiktok.webp"} alt="tiktok" width="32" height="32" /></a>
                        <a href="https://www.linkedin.com/company/vehicentroecu/?originalSubdomain=ec"><img src={urlMedia+"linkdin.png"} alt="linkdin" width="32" height="32" /></a>
                    </div>

                </div>
                {/*<p className="title titleContacto">Realizado por Agencia Prez</p>*/}
                
            </div>
            <div className="col1 colProd">
                <p className="title">PRODUCTOS</p>
                <ul className="list">
                    <li><p className="subTitle">SINOTRUK</p></li>
                    <li><p className="itemMenu"><a href="/co/serie/100">Serie 100</a></p></li>
                    <li><p className="itemMenu"><a href="/co/serie/t5g">Serie T5G</a></p></li>
                    <li><p className="itemMenu"><a href="/co/serie/t7h">Serie T7H</a></p></li>
                    <li><p className="itemMenu"><a href="/co/serie/c7h">Serie C7H</a></p></li>

                </ul>
                {/* <ul className="list">
                    <li><p className="subTitle">SUNWARD</p></li>
                    <li><p className="titleFooter"><a href="/excavadoras/swe210">Excavadora SWE210</a></p></li>
                    <li><p className="titleFooter"><a href="/excavadoras/swe365e">Excavadora SWE365E</a></p></li>
                </ul> */}

            </div>
            <div className="col1 colSell">
                <p className="title">POSVENTA</p>
                <ul className="list listNonTitle">
                    <li><p className="itemMenu"><a href="/co/concesionarios">Concesionarios</a></p></li>
                    <li><p className="itemMenu"><a href="/co/repuestos">Repuestos</a></p></li>
                    <li><p className="itemMenu">Mantenimiento</p></li>
                    <li><p className="itemMenu"><a href="/co/garantia">Garantía</a></p></li>
                </ul>
            </div>
            <div className="col1 colTech">
                <p className="title">TECNOLOGÍA</p>
                <ul className="list listNonTitle">
                    <li><p className="itemMenu"><a href="/co/motor-mc">Componentes</a></p></li>
                    <li><p className="itemMenu"><a href="/co/rendimiento/100">Medición de rendimiento</a></p></li>
                </ul>

                
            </div>
            <a href="https://api.whatsapp.com/send?phone=593988593279" className="btn-wsp" target="_blank">
                    <img className="imgWpp" width="60" height="60" src={urlMedia+"wpp.gif"} alt="Whatsapp"></img>
                </a>
        </div>
    )
}
