import React from 'react';
import '../styles/LoginModal.css';

const LoginModal = (props) => {
  if (!props.show) {
    return null;
  }

  return (
    <div id="modal" onClick={props.onClose}>
      <div id="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={props.onClose}
          type="button"
          class="close"
          data-dismiss="modal"
          aria-hidden="true"
        >
          ×
        </button>
        <div id="modal-header">
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
          <input id="submit" type="submit" value="SIGN IN" />
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
