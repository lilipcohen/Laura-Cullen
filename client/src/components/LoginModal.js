import React from 'react';
import '../styles/LoginModal.css';

const LoginModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4>Login</h4>
        </div>
        <div className="modal-body">Body Text</div>
        <div className="modal-footer">
          <button onClick={props.onClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
