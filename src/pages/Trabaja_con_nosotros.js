import { Helmet } from "react-helmet"
import BannerContacto from "../components/BannerContacto"
import Footer from "../components/Footer"
import NavBarTop from "../NavBarTop"

function Trabaja_con_nosotros() {
    return (
        <>
            <Helmet>
                <title>Trabaja con Nosotros | Vehicentro</title>
                <meta name="description" content="Trabaja con Nosotros" />
            </Helmet>
            <NavBarTop />
            <Content1 />
            <BannerContacto />
            <Footer />
        </>
    )
}

function Content1() {
    return (
        <div className="boxesIni posRelative news trabajanosotros">
            <img src="./images/trabaja-con-nosotros/trabaja-con-nosotros.webp" />
        </div>
    )
}

export default Trabaja_con_nosotros