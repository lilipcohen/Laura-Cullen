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
          <h4>Sign In</h4>
        </div>
        <form onSubmit={props.handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={props.value}
            onChange={props.handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            value={props.value}
            onChange={props.handleChange}
          />
          <input className="submit" type="submit" value="SIGN IN" />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
