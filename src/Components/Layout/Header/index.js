import React from 'react';

const index = () => {
  return (
    <header className="header">
        <div className="header__container">
            <div className="logo">
                {/* <div className="logo__img">
                    <img src="" alt="XYZ">
                </div> */}
                <h2 className="h2 logo__img--name">LOGO TEXT</h2>
            </div>
    
            <nav className="nav">
                <ul className="nav__menu">
                    <li className="nav__menu--items"><a href="">Welcome</a></li><span>/</span>
                    <li className="nav__menu--items"><a href="">About</a></li><span>/</span>
                    <li className="nav__menu--items"><a href="">How it works</a></li><span>/</span>
                    <li className="nav__menu--items"><a href="">Code</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default index;