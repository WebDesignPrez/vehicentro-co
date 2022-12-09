import NavBarTop from "../NavBarTop"
import FormContact from "../components/FormContact"

function Camion_en_uso() {
    return (
        <>
            <NavBarTop />
            <PrimeraSeccion />
            <FormContact />
        
        </>
    )

}


function PrimeraSeccion() {
    return (
        <div className="boxesIniHeader main fondonegro">
            <div className="boxLeftHeader">
                <img src="./images/home/repuestos-para-camiones-vehicentro-ecuador-sinotruk.webp"/>
            </div>
            <div className="boxRightHeader inside" >
                <div className="boxRightHeader  half contenedorTextoSobrepuesto" >
                    <img src="./images/home/repuestos-para-camiones-vehicentro-ecuador-sinotruk.webp"/>
                </div>

                <div className="boxRightHeader  half contenedorTextoSobrepuesto">
                    <img src="./images/home/repuestos-para-camiones-vehicentro-ecuador-sinotruk.webp"/>
                </div>
                <div className="boxRightHeader  half contenedorTextoSobrepuesto" >
                    <img src="./images/home/repuestos-para-camiones-vehicentro-ecuador-sinotruk.webp"/>
                </div>
                <div className="boxRightHeader  half contenedorTextoSobrepuesto">
                    <img src="./images/home/repuestos-para-camiones-vehicentro-ecuador-sinotruk.webp"/>
                </div>
            </div>


        </div>
    )
}

export default Camion_en_uso