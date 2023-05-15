import $ from "jquery";
import { useState, useEffect } from 'react';
import "../form.css";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import env from '../config';

let urlMedia = env.url

function FormNosotros() {
  let redireccion = "https://vehicentro.com/gracias-por-contactarnos"
  let url = "https://vehicentro.com/contactoWeb/envio.php"

  let [nombre_y_apellido, setName] = useState('');
  let [email, setEmail] = useState('');
  let [celular, setTel] = useState('');
  let [cedula, setCed] = useState('');
  let [cv, setCv] = useState('');
  let [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setName((e.target.value));
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

  const handleChangeCv = (e) => {
    setCv(e.target.value);
  }

  const handleChangeMensaje = (e) => {
    setMensaje(e.target.value);
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
    let auxNom = e.trim()
    if (auxNom == "" || auxNom.length < 5)
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
    if (e === "" || !(/^\d+$/.test(e)) || e.length < 10 || e.length > 10)
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

  const handleFocusCv = (e) => {
    let aux = e.target.closest('.input-group');
  }

  const handleFocusMensaje = (e) => {
    let aux = e.target.closest('.input-group');
  }

  function handleSumbit(e) {
    if (!validateName(e.target[0].value) && !validateEmail(e.target[1].value) && !validateTel(e.target[2].value) && !validateCed(e.target[3].value)) {
      const form = $(e.target);
      if($('#file')[0].files[0]!==undefined){
        document.getElementById("btnSend").disabled = true; 
        document.getElementById("btnSend").style.display = "none"; 
        e.preventDefault();
        var formData = new FormData();
        formData.append('nombre', e.target[0].value);
        formData.append('email', e.target[1].value);
        formData.append('celular', e.target[2].value);
        formData.append('cedula', e.target[3].value);
        formData.append('cv', $('#file')[0].files[0]);
        formData.append('mensaje', e.target[5].value);

        $.ajax({
          type: "POST",
          url: form.attr("action"),
          data: formData,
          async: false,
          cache: false,
          contentType: false,
          enctype: 'multipart/form-data',
          processData: false,
          success(data) {
            if(data.enviado==="SI"){
              setName('')
              setEmail('')
              setTel('')
              setCed('')
              NotificationManager.success('Datos enviados.', '')
              window.location.href = redireccion;
            }else{  
              document.getElementById("btnSend").disabled = false
              document.getElementById("btnSend").style.display = "block"; 
              NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
            }
          }, 
          error(data){
            document.getElementById("btnSend").disabled = false
            document.getElementById("btnSend").style.display = "block"; 
            NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
          }
        })
      }else{
        document.getElementById("btnSend").disabled = false
        document.getElementById("btnSend").style.display = "block"; 
        NotificationManager.error('Obligatorio adjuntar hoja de vida.', '');
      }
    } else {
      document.getElementById("btnSend").disabled = false
      document.getElementById("btnSend").style.display = "block"; 
      NotificationManager.error('No se puede enviar datos, completar los datos correctamente.', '');
    }
  }

  useEffect(() => {
  }, []) 

  return <div>
            <div className="form-box">
              <h5 className="form-step"></h5>
              <form action={url} method="post" onSubmit={(ev) => handleSumbit(ev)}>
                <div className="field1">
                  <label></label>
                  <label className="input_title">*Nombre y Apellido</label>
                  <div className="input-group">
                    <span className="userIcon"><img src={urlMedia+"user-solid.png"} /></span>
                    <input placeholder="" name="nombre_y_apellido" type="text" onBlur={(e) => { handleFocus(e) }} onChange={(e) => { handleChange(e) }} value={nombre_y_apellido} />
                  </div>

                  <label className="input_title">*Email</label>
                  <div className="input-group">
                    <span className="userIcon"><img src={urlMedia+"envelope-solid.png"} /></span>
                    <input placeholder="" name="email" type="text" onBlur={(e) => { handleFocusEmail(e) }} onChange={(e) => { handleChangeEmail(e) }} value={email} />
                  </div>

                  <label className="input_title">*Celular</label>
                  <div className="input-group">
                    <span className="userIcon"><img src={urlMedia+"phone-solid.png"} /></span>
                    <input placeholder="" name="celular" type="text" onBlur={(e) => { handleFocusTel(e) }} onChange={(e) => { handleChangeTel(e) }} value={celular} />
                  </div>

                  <label className="input_title">*Cédula</label>
                  <div className="input-group">
                    <span className="userIcon"><img src={urlMedia+"portrait-solid.png"} /></span>
                    <input placeholder="" name="cedula" type="text" onBlur={(e) => { handleFocusCed(e) }} onChange={(e) => { handleChangeCed(e) }} value={cedula} />
                  </div>

                  <label className="input_title">*Cv</label>
                  <div className="input-group">
                    <span className="userIcon"><img src={urlMedia+"portrait-solid.png"} /></span>
                    <input id="file" placeholder="" name="cv" accept=".pdf, .docx, .doc" type="file" onBlur={(e) => { handleFocusCv(e) }} onChange={(e) => { handleChangeCv(e) }} value={cv} />
                  </div>
                  <label className="input_title">*Mensaje</label>
                  <div className="input-group">
                    <span className="userIcon"><img src={urlMedia+"portrait-solid.png"} /></span>
                    <textarea placeholder="" name="mensaje" type="text" onBlur={(e) => { handleFocusMensaje(e) }} onChange={(e) => { handleChangeMensaje(e) }} value={mensaje} />
                  </div>
                </div>
                <button id="btnSend" className="nextBtn" type="submit"> Enviar </button>
                <NotificationContainer />
              </form>
            </div>
        
        </div>
}

export default FormNosotros