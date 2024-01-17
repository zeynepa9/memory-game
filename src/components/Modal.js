import React from 'react';  
import '../styles/Modal.css';

const Modal = ({ active, children, onClose }) => {
    return (
      <div className={`modal ${active ? 'active' : ''}`} onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  