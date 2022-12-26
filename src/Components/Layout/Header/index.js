import React, { useState } from 'react';
import Icons from '../../../assets/sprite.svg';
import Navbar from '../Navbar';

const index = () => {

    const [ showMenu, setShowMenu ] = useState(false);

  return (
    <header className="header">
        <div className="header__container">
            <div className="logo">
                {/* <div className="logo__img">
                    <img src="" alt="XYZ">
                </div> */}
                <h2 className="h2 logo__img--name">LOGO TEXT</h2>
            </div>
    
            <Navbar />
        </div>

        <div id="mobile-nav" className="header__container">
            <div className="logo">
                {/* <div className="logo__img">
                    <img src="" alt="XYZ">
                </div> */}
                <h2 className="h2 logo__img--name">LOGO TEXT</h2>
            </div>

            <button type="button" id="mobile-nav-btn" className="btn-all btn-secondary-app" onClick={() => showMenu? setShowMenu(false): setShowMenu(true)}>
                <svg>
                    <use xlinkHref={`${Icons}#icon-${showMenu?'close':'menu'}`}></use>
                </svg>
            </button>
        </div>
        {showMenu? <div id="mobile-nav-menu">
            <Navbar />
        </div>: null}
    </header>
  )
}

export default index;