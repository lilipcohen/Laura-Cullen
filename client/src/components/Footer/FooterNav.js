import react from 'react';

const FooterNav = () => {
  return (
    <div className="col-sm-6 col-md-3 item">
      <h3>Pages</h3>
      <ul>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/gallery"> Art Gallery</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterNav;
