import NavBar from "../NavBar"
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import BannerContacto from '../components/BannerContacto'
function Inicio2() {
    return (
        <>
            <NavBar />
            <Block1 />
            <Menu2 />
            <Block2 />
            <Block3 />
            <Block4 />
            <Banner />
            <BannerContacto />
            <Footer />
            <Modal />
        </>
    )
}

function Block1() {
    return (
        <div className="block1 boxBlock">
            <div>
                <img src="./images/block1.jpeg" width="360" height="464" alt="Vehicentro" />
                <div className="overlayBox">
                    <p className="titleBox">PORTAFOLIO</p>
                    <div className="linksBox">
                        <a src="">SERIE 100</a>
                        <a src="">SERIE T5G</a>
                        <a src="">SERIE T7H</a>
                        <a src="">SERIE C7H</a>
                        <a src="">ESPECIALES</a>
                        <a src="">ESCAVADORAS</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="./images/block1.jpeg" width="360" height="464" alt="Vehicentro" />
                <div className="overlayBox">
                    <p className="titleBox">REPUESTOS, RENTABILIDAD y REPUESTOS</p>
                    <div className="linksBox">
                        <a src="">CONCESIONARIOS</a>
                        <a src="">REPUESTOS Y TALLERES</a>
                        <a src="">CALCULADORA DE RENDIMIENTO</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="./images/block1.jpeg" width="360" height="464" alt="Vehicentro" />
                <div className="overlayBox">
                    <p className="titleBox">EXPERIENCIA DE NUESTROS CLIENTES</p>
                    <div className="linksBox">
                        <a className="line2" src="">NUESTRA COMUNIDAD</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Block2() {
    return (
        <div className="block2">
            <video width="320" height="240" controls autoPlay={true} muted poster="./images/home/vehicentro-vehinstein-sinotruk-ecuador.webp" src="./images/home/c7h.mp4" className="videoWidth" />
        </div>
    )
}

function Block3() {
    return (
        <>
        <div className="block3 boxBlock">
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="block3 boxBlock row2">
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="block3 boxBlock row2">
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
            <div>
                <img src="../images/block3.jpg" width="360" height="464" alt="Vehicentro" />
                <div className="bottomContainer">
                    <p className="titleBox">SERIE</p>
                    <p className="titleBox2">100</p>
                    <div className="linksBox">
                        <a className="line2" src="">3.5 TON</a><span>/</span>
                        <a className="line2" src="">3.6 TON</a><span>/</span>
                        <a className="line2" src="">5 TON</a><span>/</span>
                        <a className="line2" src="">6 TON</a><span>/</span>
                        <a className="line2" src="">8 TON</a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

function Block4() {
    return (
        <div className="block4 boxBlock">
            <div>
                <img src="../images/block4.jpeg" width="360" height="464" alt="Vehicentro" />
            </div>
            <div>
                <img src="../images/block4.jpeg" width="360" height="464" alt="Vehicentro" />
            </div>
        </div>
    )
}

function Menu2() {
    return (
        <nav className="menu2 home2">
            <ul className="nav-links-h">
                <li><NavLink to="/">INICIO</NavLink></li>
                <li ><a className="sinotruk mouseA" option="sinotruk">SINOTRUK</a></li>
                <li ><a className="concesionarios mouseA" option="concesionarios">CONCESIONARIOS</a></li>
                <li className="camionesCss"><NavLink to="/sinotruk">CAMIONES EN USO</NavLink></li>
                <li className="companiaCss"><NavLink to="/compania">COMPAÑIA</NavLink></li>
                <li className="tecnologiaCss"><NavLink to="/sinotruk">TECNOLOGIA</NavLink></li>
            </ul>
            <span className="telefonoInicio">032994740 - 0992048229</span>
        </nav>
    )
}

function Banner() {
    return (
        <div className="posRelative banner">
            <img src="./images/home/vehicentro-en-ecuador-venta-de-camiones-cabezales-y-volquetas-sinotruk.webp" width="1790" height="590" className="slideMain" alt="Punto de Venta" />
            <div className="boxText flex-table row">
                <div className="flex-row textMain textMain2">Puntos Vehicentro a nivel Nacional</div>
                <div className="flex-row imgMain"><img src="./images/arrow-rojo.png" alt="arrow" width="30" height="35" /></div>
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