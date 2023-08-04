import { useEffect } from 'react';
import NavBarTop from '../NavBarTop';
import BannerContacto from '../components/BannerContacto';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import env from '../config';
let urlMedia = env.url

function Concesionarios() {

  const datosConcesionarios = [{
    id: "Bogota",
    datos: [{
      nombre: "BOGOTÁ, SEDE PRINCIPAL",
      descripcion: "Punto de Venta, Talleres y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Sector Fontibón CR 126A #17-50",
      url: "https://goo.gl/maps/iUnCP1YSMsv9ibpQA",
      img: urlMedia + "/concesionarios/fontibonSede.jpg",
      alt: ""
    }, {
      nombre: "BOGOTÁ, SEDE CALLE 80",
      descripcion: "Punto de Venta y Repuestos",
      telefono: "032-994740 | 0992048229",
      direccion: "Sector Cota sentido Siberia - Bogotá  Kilometro 2.2",
      url: "https://goo.gl/maps/pBWeoKpyen13WrWR6",
      img: urlMedia + "/concesionarios/Calle80Sede.jpg",
      alt: ""
    }]
  }]


  useEffect(() => {
    const navButtons = document.querySelectorAll(".btnConcesionarios");
    navButtons.forEach((link, index) => {
      link.addEventListener("click", (ev) => {
        clickConcesionario(ev.target.getAttribute('option'))
      })
    })

    const clickConcesionario = (val) => {
      let container = document.querySelector(".boxConcesionarios")

      let buscarDatos = datosConcesionarios.find((dato) => dato.id == val)
      let datosGrid = buscarDatos.datos
      let auxTable = ""

      datosGrid.forEach((datos) => {
        auxTable += "<div class='concesionariosFlex'><div class='concesionariosFlexText textConcesionario'><p class='nombreConcesionario'>" + datos.nombre + "</p><p class='descConcesionario'>" + datos.descripcion + "</p><span class='direccionConcesionario'>" + datos.direccion + "</span><p class='telefonoConcesionario'><span>Línea directa </span>" + datos.telefono + "</p><span class='linkConcesionario'><a href='" + datos.url + "' target='_blank'>UBICACIÓN</a></span></div><div class='concesionariosFlexImg imgConcesionario'><img src='" + datos.img + "' alt='" + datos.alt + "' /></div></div>"
      })

      container.innerHTML = auxTable
    }

  })
  return (
    <>
      <Helmet>
        <title>Concesionarios en Ecuador | Vehicentro</title>
        <meta name="description" content="Tenemos concesionarios en todo el Ecuador: Ambato, Quito, Guayaquil, Riobamba, Machala, Cuenca, Ibarra, Manta" />
        <meta name="keywords" content="camion, camiones, venta de camiones, camiones en ecuador"></meta>
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <NavBarTop />
      <p className="tituloConcesionario">ENCUENTRA TU CONCESIONARIO MÁS CERCANO</p>
      <div className="btnConcesionarios">
        <a className='btn6' option="Bogota" href='#'>BOGOTÁ</a>
      </div>
      <div className="boxConcesionarios">
        <span className='spanText'>Selecciona el concesionario en la ciudad más cercana</span>
      </div>
      <BannerContacto />
      <Footer />
    </>
  )

}

export default Concesionarios