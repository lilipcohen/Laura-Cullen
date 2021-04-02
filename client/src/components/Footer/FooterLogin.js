import react from 'react';
import firebase from '../Firebase';

const FooterLogin = (props) => {
  return (
    <div className="col-sm-6 col-md-3 item">
      <h3>Manager</h3>
      <ul>
        <li>
          <a onClick={props.onClick}>Manager Login</a>
        </li>
        <li>
          <a onClick={logout}>logout</a>
        </li>
      </ul>
    </div>
  );
  async function logout() {
    await firebase.logout();
    window.location.href = '/home';
    console.log('logged out');
  }
};

export default FooterLogin;
