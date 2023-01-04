import { useState, useEffect } from "react";
import '../modalContact.css';
import FormContactFicha from "./FormContactFicha";

export default function BannerContacto(props){
  let url = props.url
  let nomCamion = props.camion
  let listSerie = (props.serie=="")?'':props.serie
  let listCamion = (props.camionSerie=="")?'':props.camionSerie
 
  const [modalContactIsOpen, setContactIsOpen] = useState(false);
  const [modalFormIsOpen, setFormIsOpen] = useState(false);

    useEffect(() => {
      const keyDownHandler = event => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeContact()
          closeFormContact()
        }
      };
  
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, []);

    function openModal() {
      openFormContact();
      closeContact()
    }

    function openFormContact(){
      setFormIsOpen(true)
    }
  
    function closeFormContact(){
      setFormIsOpen(false)
    }

    function openContact(){
      setContactIsOpen(true)
    }


    function closeContact(){
      setContactIsOpen(false)
    }

    const closeContactF = ()=>{
      setContactIsOpen(false)
    }


    function gotoWs(){
      closeContact()
    }

    function gotoCall(){
      closeContact()
    }

  return (
    <>
          <div className="boxesContact posRelative fix">
              <p className="buttonContact f" onClick={openContact}>PROFORMA TU CAMIÓN</p>
              <p className="textContact">Déjanos tus datos y uno de nuestros asesores <br></br>se contactará de inmediato.</p>
          </div>

          {modalContactIsOpen &&
          <div className="modalContact" id="modalBanner" >
            <div className="headerModalContact"><img src="https://desarollo.vehicentro.com/images/vehicentro-logo-blanco.png" alt="Vehicentro" /></div>
            <div className="bodyModalContact">
              <div className="btnModalContact" onClick={gotoWs}><span className="wa">ESCRÍgit BENOS</span></div>
              <div className="btnModalContact" onClick={gotoCall}><span className="ca">LLAMADA DIRECTA</span></div>
              <div className="btnModalContact" onClick={openModal}><span>DEJANOS TUS DATOS</span></div>
            </div>
          </div>
          }
        
        {modalFormIsOpen &&
              <FormContactFicha url={url} camion={nomCamion} serie={listSerie} camionSerie={listCamion} close={closeFormContact}/>
        }
    </>

)
}