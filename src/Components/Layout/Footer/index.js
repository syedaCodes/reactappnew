import React from 'react';
import Icons from '../../../assets/sprite.svg';

const index = () => {
  return (
    <footer className="footer">
      <ul className="footer__socials">
        <li>
          <a className="footer__socials--link" rel="noreferrer" target="_blank" href="https://github.com/syedacodes">
            <svg>
              <use xlinkHref={`${Icons}#icon-github`}></use>
            </svg>
          </a>
        </li>
        <li>
          <a className="footer__socials--link" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/syeda-neha-7b8b4881/">
            <svg>
              <use xlinkHref={`${Icons}#icon-linkedin`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <small>LOGO &copy; {new Date().getFullYear()} All rights reserved.</small>
      <p><small>Developed with <span style={{color: 'red'}}>&#10084;</span> by <a rel="noreferrer" target="_blank" href="https://syedacodes.github.io/nehacodes/">ncodes</a></small></p>
    </footer>
  )
}

export default index;