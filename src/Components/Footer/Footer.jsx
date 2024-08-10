import './Footer.css';
import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import whatsApp  from '../Assets/whatsapp_icon.png';
import pinterrest from '../Assets/pintester_icon.png';
import instagram from '../Assets/instagram_icon.png';
const Footer = () => {
  return (
    <div className="footer">
      <Link to={'/'} className="logo ">
        <img src={Logo} alt="logo" />
        <span>LuxeLoom</span>
      </Link>
      <ul className="footer-menu">
        <li>company</li>
        <li>products</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="socials">
        <img src={whatsApp} alt="whatsApp" />
        <img src={pinterrest} alt="pinterrest" />
        <img src={instagram} alt="instagram" />
      </div>
      <hr />
      <p>
        Copyright © 2024 <strong>LuxeLoom</strong> - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
