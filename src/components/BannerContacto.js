import { useState } from "react";
import FormContact from "./FormContact";
import Modal from 'react-modal';

export default function BannerContacto(){

  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);


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


  function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
     // subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }


  return (
    <>
          <div className="boxesContact posRelative">
              <p className="buttonContact" onClick={openModal}>QUIERO SER CONTACTADO AHORA</p>
              <p className="textContact">Dejanos tus datos y uno de nuestros asesores se contactara contigo</p>
          </div>
        
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