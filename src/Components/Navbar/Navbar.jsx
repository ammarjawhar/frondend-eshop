import './Navbar.css';
import { useState, useContext, useRef } from 'react';
import Logo from '../Assets/logo.png';
import cartIcon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

import dropMenu from '../Assets/nav_dropdown.png';

const Navbar = () => {
  const { getTotalItems } = useContext(ShopContext);
  const [menu, setMenu] = useState(' ');
  const menuRef = useRef();

  const toogleMenu = (e) => {
    menuRef.current.classList.toggle('nav-visible');
    e.target.classList.toggle('open');
  };
  return (
    <div className="navbar">
      <Link to={'/'} className="logo decoration">
        <img src={Logo} alt="logo" />
        <span>Shopper</span>
      </Link>
      <img
        src={dropMenu}
        alt="dropMenu"
        className="nav-icon"
        onClick={toogleMenu}
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu('Shop')}>
          <Link className="decoration" to="/">
            Shop
          </Link>
          {menu === 'Shop' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('Mens')}>
          <Link className="decoration" to="/mens">
            Mens
          </Link>
          {menu === 'Mens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('Womens')}>
          <Link className="decoration" to="/Womens">
            Womens
          </Link>
          {menu === 'Womens' ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu('Kids')}>
          <Link className="decoration" to="/Kids">
            Kids
          </Link>
          {menu === 'Kids' ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('Auth-Token') ? (
          <button
            onClick={() => {
              localStorage.removeItem('Auth-Token');
              window.location.replace('/');
            }}
          >
            Logout
          </button>
        ) : (
          <Link to={'/login'}>
            <button>Login</button>
          </Link>
        )}

        <div className="nav-cart">
          <Link to={'/cart'}>
            <img src={cartIcon} alt="cart" />
          </Link>
          <div className="nav-cart-count">{getTotalItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
