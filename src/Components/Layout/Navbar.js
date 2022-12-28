import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="menu__container">
        <nav className="nav">
            <ul className="nav__menu">
            <li className="nav__menu--items">
                    <Link to="/">Welcome</Link>
                </li><span>/</span>
                <li className="nav__menu--items"><Link to="/about">About</Link></li><span>/</span>
                <li className="nav__menu--items"><Link to="/howitworks">How it works</Link></li><span>/</span>
                <li className="nav__menu--items"><Link to="/code">Code</Link></li>
            </ul>
        </nav>

        <div className="btn__container">
            <button type="button" className="btn-all btn-primary-app">App</button>
        </div>
    </div>
  )
}

export default Navbar;