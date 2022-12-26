import React from 'react';
import Icons from '../../../assets/sprite.svg';
import { Link } from 'react-router-dom';

const index = () => {

    let activeClassName = "active";

  return (
    <header className="header">
        <div className="header__container">
            <div className="logo">
                {/* <div className="logo__img">
                    <img src="" alt="XYZ">
                </div> */}
                <h2 className="h2 logo__img--name">LOGO TEXT</h2>
            </div>
    
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

            {/* <button type="button" className="btn-all btn-secondary-app">
                <svg>
                    <use xlinkHref={`${Icons}#icon-menu`}></use>
                </svg>
            </button> */}
        </div>
    </header>
  )
}

export default index;