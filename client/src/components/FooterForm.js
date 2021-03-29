import react from 'react';

const FooterForm = (props) => {
  return (
    <div className="col-md-6 item text">
      <h3>Subscribe</h3>
      <form className="footer-dark" onSubmit={props.handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={props.value}
          onChange={props.handleChange}
        />
        <br></br>
        <input className="submit" type="submit" value="Stay Updated" />
      </form>
    </div>
  );
};

export default FooterForm;
