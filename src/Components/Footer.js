import React from 'react';
import logo from '../assets/icons_assets/Logo.svg'

const Footer = () => {
  return (
    <footer>
      <hr></hr>
      <section>
        <div className='company-info'>
          <img src={logo} alt='company-logo' />
          <p>lorem5
          </p>
        </div>
        <div>
          <h3>Important Link</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br />NYC</li>
            <li>Phone: <br />+0123 456</li>
            <li>Email: <br />littlelemon@123</li>
          </ul>
        </div>
        <div>
          <h3>Social Media Links</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
