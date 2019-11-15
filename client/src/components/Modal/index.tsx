import React from 'react'
import ReactDOM from 'react-dom';

interface ModalProps {
   children: React.ReactNode;
   title?: string;
   open?: boolean;
   onClose: (check: boolean) => void;
 }

const Modal = ({ children, title, open, onClose } : ModalProps) => {
   return (
      open
      ? ReactDOM.createPortal(
         <div className="modal" id="section-filter" tabIndex={-1} role="dialog" 
         style={{display: open ? "block" : "none"}} aria-hidden={open ? false : true} aria-modal={open ? true : false} >
            <div className="modal-dialog modal-filter" role="document">
               <div className="modal-content">
                  <div className="modal-header" onClick={event => event.stopPropagation()}>
                     <h4 className="modal-title">{title}</h4>
                     <button className="close" type="button" aria-label="Close" onClick={() => onClose(false)}>
                        <i className="material-icons">clear</i>
                     </button>
                  </div>
                     {children}
                  <div className="modal-footer" onClick={event => event.stopPropagation()}>
                     <button type="button" className="btn btn-secondary mr-auto">초기화</button>
                     <button type="button" className="btn btn-secondary" onClick={() => onClose(false)} >취소</button>
                     <button type="button" className="btn btn-primary">적용</button>
                  </div>
                </div>
            </div>
         </div>,
         document.body
      )
      : null
   );
}

export default Modal;