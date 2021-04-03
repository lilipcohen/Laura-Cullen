import React, { useState } from 'react';
import LoginModal from './LoginModal';
import FooterIcons from './FooterIcons';
import FooterCopyright from './FooterCopyright';
import FooterForm from './FooterForm';
import FooterLogin from './FooterLogin';
import FooterNav from './FooterNav';
import FooterRows from './FooterRows';
import FooterContainer from './FooterContainer';
import FooterClass from './FooterClass';
import '../../styles/Footer.css';

const Footer = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <FooterClass>
        <FooterContainer>
          <FooterRows>
            <FooterNav />
            <FooterLogin onClick={() => setShow(true)} />
            <FooterForm />
            <FooterIcons />
          </FooterRows>
          <FooterCopyright />
        </FooterContainer>
      </FooterClass>
      <LoginModal onClose={() => setShow(false)} show={show} />
    </div>
  );
};

export default Footer;
