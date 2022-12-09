import $ from "jquery";
import { useState } from 'react';
import "../form.css";
//import { Formik } from 'formik';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { useParams } from "react-router";

let imagen

function FormContact(props) {

  const url = props.url
  const nomCamion = props.camion

  const [nombre_y_apellido, setName] = useState('');
  const [ciudad, setCity] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setTel] = useState('');
  const [cedula, setCed] = useState('');
  const [camion, setCam] = useState(nomCamion);
  const [escoge_tu_concesionario_mas_cercano, setCon] = useState('Concesionario');


  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  }

  const handleChangeCed = (e) => {
    setCed(e.target.value);
  }

  const handleChangeCon = (e) => {
    setCon(e.target.value);
  }

  const handleChangeCam = (e) => {
    setCam(e.target.value);
  }



  const handleFocus = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateName(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Completar los datos requeridos.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateName = (e) => {
    if (e == "" || e.length < 3)
      return true
    else
      return false
  }


  const handleFocusEmail = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateEmail(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Email incorrecto.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateEmail = (e) => {
    if (e == "" || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)))
      return true
    else
      return false
  }

  const handleFocusTel = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateTel(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Numero telefonico incorrecto.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateTel = (e) => {
    if (e === "" || !(/^\d+$/.test(e)) || e.length < 6 || e.length > 10)
      return true
    else
      return false
  }


  const handleFocusCed = (e) => {
    let aux = e.target.closest('.input-group');
    if (validateCed(e.target.value)) {
      aux.classList.add("errorClass")
      NotificationManager.error('Cedula incorrecta.', '');
    } else {
      aux.classList.remove("errorClass")
    }
  }

  const validateCed = (e) => {
    if (e === "" || !(/^\d+$/.test(e)) || (e.length !== 10 && e.length !== 13))
      return true
    else
      return false
  }


  function handleSumbit(e) {
    e.preventDefault();

    if (!validateName(e.target[0].value) && !validateName(e.target[1].value) && !validateEmail(e.target[2].value) && !validateTel(e.target[3].value) && !validateCed(e.target[4].value)) {
      const form = $(e.target);
      alert(form.attr("action"));
      $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
          NotificationManager.success('Datos enviados.', '');
        }
      })
    } else {
      NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
    }
  }
  console.log(url)
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

  return <div>
    <div className="boxesIni posRelative">
      <div>
        <img src={imagen} width="1400" height="1000" className="slideMain" alt="Punto de Venta" />
      </div>
      <div>
        <div className="form-box">
          <h5 className="form-step"> ¿Necesitas información? </h5>
          <form action={url} method="post" onSubmit={(ev) => handleSumbit(ev)}>
            <div className="field1">
              <label> Cotizador Sinutruck Modelo T5G-1167 </label>

              <label className="input_title">*Nombre y Apellido</label>
              <div className="input-group">
                <span className="userIcon"><img src="../images/user-solid.png" /></span>
                <input placeholder="" name="nombre_y_apellido" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChange(e) }} value={nombre_y_apellido} />
              </div>

              <label className="input_title">*Ciudad</label>
              <div className="input-group">
                <span className="userIcon"><img src="../images/address-card-solid.png" /></span>
                <input placeholder="" name="ciudad" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeCity(e) }} value={ciudad} />
              </div>

              <label className="input_title">*Email</label>
              <div className="input-group">
                <span className="userIcon"><img src="../images/envelope-solid.png" /></span>
                <input placeholder="" name="email" type="text" onBlur={(e) => { handleFocusEmail(e) }} onChange={(e) => { handleChangeEmail(e) }} value={email} />
              </div>

              <label className="input_title">*Telefono</label>
              <div className="input-group">
                <span className="userIcon"><img src="../images/phone-solid.png" /></span>
                <input placeholder="" name="celular" type="text" onBlur={(e) => { handleFocusTel(e) }} onChange={(e) => { handleChangeTel(e) }} value={celular} />
              </div>

              <label className="input_title">*Cedula</label>
              <div className="input-group">
                <span className="userIcon"><img src="../images/portrait-solid.png" /></span>
                <input placeholder="" name="cedula" type="text" onBlur={(e) => { handleFocusCed(e) }} onChange={(e) => { handleChangeCed(e) }} value={cedula} />
              </div>

              <label className="input_title">*Escoge tu concesionario mas cercano</label>
              <div className="input-group">
                <span className="userIcon"><img src="../images/map-marker-solid.png" /></span>
                <select name="escoge_tu_concesionario_mas_cercano" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChangeCon(e) }} value={escoge_tu_concesionario_mas_cercano}>
                  <option value="Concesionario">Concesionario</option>
                  <option value="Ambato - Av. Indoamérica Sector Izamba">Ambato - Av. Indoamérica Sector Izamba</option>
                  <option value="Ambato - Av. Guaytambos Sector Ficoa">Ambato - Av. Guaytambos Sector Ficoa</option>
                  <option value="Riobamba">Riobamba</option>
                  <option value="Quito - Carapungo">Quito - Carapungo</option>
                  <option value="Quito - Sur">Quito - Sur</option>
                  <option value="Quito - Los Chillos">Quito - Los Chillos</option>
                  <option value="Quito - Galo Plaza">Quito - Galo Plaza</option>
                  <option value="Quito - El Colibrí ">Quito - El Colibrí </option>
                  <option value="Guayaquil - Samborondón">Guayaquil - Samborondón</option>
                  <option value="Guayaquil - Norte">Guayaquil - Norte</option>
                  <option value="Cuenca">Cuenca</option>
                  <option value="Machala">Machala</option>
                  <option value="Ibarra">Ibarra</option>
                  <option value="Manta">Manta</option>
                </select>
              </div>

              <div className="input-group">
                <span className="userIcon"></span>
                <input name="camion" type="text" value={camion} onChange={(e) => { handleChangeCam(e) }} />
              </div>

              <input name="redirect_url" value="https://vehicentro.com/gracias-por-contactarnos-sobre-camiones/" type="hidden" />
            </div>
            <button className="nextBtn" type="submit"> Cotizar </button>
          </form>
        </div>
      </div>
    </div>
    <NotificationContainer />
  </div>

}

export default FormContact