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
        <form onSubmit={props.handleSubmit}>
          <label>
            email:
            <input
              type="text"
              value={props.value}
              onChange={props.handleChange}
            />
          </label>
          <label>
            password:
            <input
              type="text"
              value={props.value}
              onChange={props.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={props.onClose}>close</button>
      </div>
    </div>
    // </div>
  );
};

export default LoginModal;
