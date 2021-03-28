import react from 'react';
import '../styles/Footer.css';

const FooterClass = (props) => {
  return <div className="footer-dark">{props.children}</div>;
};

export default FooterClass;
