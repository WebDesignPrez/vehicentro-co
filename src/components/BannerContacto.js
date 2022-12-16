import { useState, useEffect } from "react";
import FormContact from "./FormContact";
import Modal from 'react-modal';
import '../modalContact.css';

export default function BannerContacto(){

  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContactIsOpen, setContactIsOpen] = useState(false);

  const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        
      },
    };

    useEffect(() => {
      const keyDownHandler = event => {
        if (event.key === 'Escape') {
          event.preventDefault();
          closeContact()
        }
      };
  
      document.addEventListener('keydown', keyDownHandler);
      return () => {
        document.removeEventListener('keydown', keyDownHandler);
      };
    }, []);

  function openModal() {
      setIsOpen(true);
      closeContact()
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
     // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    function openContact(){
      setContactIsOpen(true)
    }


    function closeContact(){
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
          <div className="boxesContact posRelative">
              <p className="buttonContact" onClick={openContact}>QUIERO SER CONTACTADO AHORA</p>
              <p className="textContact">Dejanos tus datos y uno de nuestros asesores se contactara contigo</p>
          </div>

          {modalContactIsOpen &&
          <div className="modalContact" id="modalBanner" >
            <div className="headerModalContact"><img src="./images/vehicentro-logo-blanco.png" alt="Vehicentro" /></div>
            <div className="bodyModalContact">
              <div className="btnModalContact" onClick={gotoWs}><span className="wa">ESCRIBENOS</span></div>
              <div className="btnModalContact" onClick={gotoCall}><span className="ca">LLAMADA DIRECTA</span></div>
              <div className="btnModalContact" onClick={openModal}><span>DEJANOS TUS DATOS</span></div>
            </div>
          </div>
}
        
      <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Formulario de contacto"
      >
          
          <button onClick={closeModal}>Cerrar</button>
          <FormContact />
      </Modal>
    </>

)
}