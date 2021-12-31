import { React } from 'react';
import ReactDOM from 'react-dom';
import '../style/Modal.css';



const Modal = ({ showModal, setModal, article}) => {


    return ReactDOM.createPortal (

      <div className = 'ModalWrap'>
        {showModal ? <div className = "Modal">
          <button className ='Modal_CloseButton'>Close</button>
          <div>
          
          {article.title? null:
           article.description? null:
           article.content? null:
           article
          }
          
          </div>        
          <div> { article && article.title} </div>
          <div> { article && article.description} </div>
          <div> { article && article.content} </div>
         </div>: null}
      </div>,
      document.getElementById('Modal-root')
    
    )
  }
  
  export default Modal
