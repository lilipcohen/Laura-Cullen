import react from 'react';

const FooterLogin = (props) => {
  return (
    <div className="col-sm-6 col-md-3 item">
      <h3>Manager</h3>
      <ul>
        <li>
          <a onClick={props.onClick}>Manager Login</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterLogin;
