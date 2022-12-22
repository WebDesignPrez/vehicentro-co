
export default function Footer(){
    return (
    <div className="footer posRelative">
            <div className="info">
            <img src="../images/vehicentro-logo-blanco.png" width="230" height="80" />
                 <ul className="list">
                    <li><p className="titleFooter"><a href="/compania">NOSOTROS</a></p></li>
                    <li><p className="titleFooter"><a href="/concesionarios">CONCESIONARIOS</a></p></li>
                    <li><p>VEINSTEIN</p></li>
                    <li><p>TECNOLOGÍA ALEMANA</p></li>
                </ul>
                <br />
                <p className="title titleNumero"><a href="tel:032294740">032 994 740</a></p>
                <p className="title titleContacto">CONTACTO DIRECTO</p>
                <div className="social row">
                  <div className="flex-row imgMain">
                    <span><img src="../images/facebook.png" alt="facebook" /></span>
                    <span><img src="../images/instagram.png" alt="instagram" /></span>
                    <span><img src="../images/youtube.png" alt="youtube" /></span>
                    <span><img src="../images/linkdin.png" alt="linkdin" /></span>
                    
                  </div>
                  
                </div>
            </div>
            <div className="col1 colProd">
                <p className="title">PRODUCTOS</p>
                <ul className="list">
                    <li><p className="subTitle">SINOTRUK</p></li>
                    <li><p className="itemMenu">Serie 100</p></li>
                    <li><p className="itemMenu">Serie T5G</p></li>
                    <li><p className="itemMenu">Serie T7H</p></li>
                    <li><p className="itemMenu">Serie C7H</p></li>
                    <li><p className="itemMenu">Especiales</p></li>
                </ul>
                <ul className="list">
                    <li><p className="subTitle">SUNWARD</p></li>
                    <li><p  className="titleFooter"><a href="/excavadoras/swe210">Excabadora SWE210</a></p></li>
                    <li><p  className="titleFooter"><a href="/excavadoras/swe365e">Excabadora SWE365E</a></p></li>
                </ul>
                
            </div>
            <div className="col1 colSell">
                <p className="title">POST VENTA</p>
                <ul className="list listNonTitle">
                    <li><p className="itemMenu">Talleres</p></li>
                    <li><p className="itemMenu">Repuestos</p></li>
                    <li><p className="itemMenu">Manteniento</p></li>
                    <li><p className="itemMenu">Garantía</p></li>
                </ul>
            </div>
            <div className="col1 colTech">
                <p className="title">TECNOLOGÍA</p>
                <ul className="list listNonTitle">
                    <li><p className="itemMenu">Componentes</p></li>
                    <li><p className="itemMenu">Medición de rendimiento</p></li>
                    
                </ul>
            </div>
        </div>
    )
}